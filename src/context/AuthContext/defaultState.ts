export interface DefaultStateProps  {
    isAuthenticated: boolean,
    userName: string,
    token: string,
}

export const defaultState: DefaultStateProps = {
    isAuthenticated: false,
    userName: '',
    token: '',
}