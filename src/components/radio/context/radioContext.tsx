import { createContext } from "react";

interface RadioContextProps {
    state: string | null
}
export const RadioContext = createContext<RadioContextProps | null>(null);

