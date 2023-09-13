export interface DefaultActionsProps {
    updatePass: (e: string) => void,
    updateConfirmPass: (e: string) => void,
    updateNewPass: ()=> void,
}

export const defaultActions: DefaultActionsProps = {
    updatePass: () => {},
    updateConfirmPass: () => {},
    updateNewPass: () => {}
}