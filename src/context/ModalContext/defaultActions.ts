interface DefaultActionsProps {
    openModal: () => void,
    closeModal: () => void,
    onAction: () => void,
}

export const defaultActions: DefaultActionsProps = {
    openModal: () => {},
    closeModal: () => {},
    onAction: () => {},
}