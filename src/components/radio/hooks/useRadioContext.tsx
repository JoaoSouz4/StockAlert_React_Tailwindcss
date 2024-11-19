import { useContext } from "react";
import { RadioContext } from "../context/radioContext";

export function useRadioContext(){
    const context = useContext(RadioContext);

    if (!context) {
        throw new Error("useListContext must be used within a ListProvider");
    }

    return context
}