import { useRadioContext } from "./useRadioContext";

export function useRadio(){
    const { state } = useRadioContext();
    return state
}