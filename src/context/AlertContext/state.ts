export interface StateProps  {
    message: string,
    status: string,
    isOpen: boolean,
    isClosing: boolean,
}

export const state: StateProps = {
    message: '',
    status: '',
    isOpen: false,
    isClosing: false,
}