import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"
import { UserPage } from "./userPage";
import { LoginPage } from "./loginPage";

export default function Login(){

    const {authState} = useContext(AuthContext);

    return (
        <div className = 'h-full'>
            {authState.isAuthenticated ? 
                <UserPage />
            :
                <LoginPage />
            }
        </div>
    )
}