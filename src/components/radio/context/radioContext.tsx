import { createContext } from "react";

interface RadioContextProps {
    state: string
}
export const RadioContext = createContext<RadioContextProps | null>(null);

