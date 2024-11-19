import { useContext } from "react";
import { ListContext } from "..";

export function useListContext() {
    const context = useContext(ListContext);

    if (!context) {
        throw new Error("useListContext must be used within a ListProvider");
    }

    return context;
}