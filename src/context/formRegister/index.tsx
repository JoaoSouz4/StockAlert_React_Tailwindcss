import { createContext, useState, ReactNode, useContext } from "react";
import { registerProduct } from "../../services/api/post/regiterProduct";
import { AuthContext } from "../AuthContext";
import { AlertContext } from "../AlertContext";

interface FormRegisterProps {
  name: string;
  categorie: string;
  status: string | null; // Alterado para permitir null
  registedBy: string;
  isLoad: boolean;
}

interface BuildActionProps {
  setName: (value: string) => void;
  setStatus: (value: string) => void;
  setCategorie: (value: string) => void;
  submit: () => void;
}

interface ContextProps {
  formRegister: FormRegisterProps;
  buildActions: BuildActionProps;
}

export const FormRegisterContext = createContext<ContextProps>({
  formRegister: {
    name: "",
    status: null,
    categorie: "",
    registedBy: "",
    isLoad: false,
  },
  buildActions: {
    setName: () => {},
    setStatus: () => {},
    setCategorie: () => {},
    submit: () => {},
  },
});

export function FormRegisterProvider({ children }: { children: ReactNode }) {
  const { authState } = useContext(AuthContext);
  const { openAlert } = useContext(AlertContext);

  const [formRegister, setFormRegister] = useState<FormRegisterProps>({
    name: "",
    categorie: "",
    status: null, // Alinhado com a tipagem
    registedBy: authState.userName,
    isLoad: false,
  });

  const buildActions: BuildActionProps = {
    setName: (value: string) => {
      setFormRegister({ ...formRegister, name: value });
    },
    setCategorie: (value: string) => {
      setFormRegister({ ...formRegister, categorie: value });
    },
    setStatus: (value: string) => {
      setFormRegister({ ...formRegister, status: value });
    },

    submit: () => {
      setFormRegister({ ...formRegister, isLoad: true });

      if (!formRegister.name) {
        setFormRegister({ ...formRegister, isLoad: false });
        return openAlert("warning", "nome inválido");
      }
      if (!formRegister.categorie) {
        setFormRegister({ ...formRegister, isLoad: false });
        return openAlert("warning", "é necessário informar a categoria");
      }

      if (!formRegister.status) {
        setFormRegister({ ...formRegister, isLoad: false });
        return openAlert("warning", "certifique o status do produto");
      }

      registerProduct(formRegister).then((res) => {
        if (!res.isSucess) {
          setFormRegister({ ...formRegister, isLoad: false });
          return openAlert("warning", res.requestMessage);
        }
        setFormRegister({
          status: null,
          name: "",
          categorie: "",
          registedBy: "",
          isLoad: false,
        });
        openAlert("sucess", "Produto Registrado");
      });
    },
  };

  return (
    <FormRegisterContext.Provider value={{ formRegister, buildActions }}>
      {children}
    </FormRegisterContext.Provider>
  );
}


