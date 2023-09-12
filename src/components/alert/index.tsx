import { AlertRoot } from "./alertRoot";
import { AlertStatus } from "./alertStatus";
import { AlertMessage } from "./alertMessage";

export default function Alert(){

    return (
        <AlertRoot>
            <AlertStatus />
            <AlertMessage />
        </AlertRoot>
    )
}
   