import { ReactNode } from 'react'

export interface ModalRequest {
    title: string;
    isOpen: boolean;
    onClose: (param: boolean) => void
    children: ReactNode;
}