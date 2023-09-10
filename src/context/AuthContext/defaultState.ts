export interface DefaultStateProps  {
    isAuthenticated: boolean,
    userName: string,
    idUser: string
    isLoad: boolean
}

export const defaultState: DefaultStateProps = {
    isAuthenticated: false,
    userName: '',
    idUser: '',
    isLoad: true
}