import { modalAction } from "./modaAction";
import { modalActions } from "./modalActions";
import { ModalRoot } from "./modalRoot";
import { ModalWrapper } from "./modalWrapper";

const Modal = {
    Wrapper: ModalWrapper,
    Root: ModalRoot,
    Actions: modalActions,
    Action: modalAction
}

export default Modal