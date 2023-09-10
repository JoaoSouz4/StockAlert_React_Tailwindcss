

export interface ActionsTypes {
    setUserToken: (token: string) => void
    removeUserToken: () => void
}

export const defaultActions: ActionsTypes = {
    setUserToken: () => {},
    removeUserToken: () => {}
}