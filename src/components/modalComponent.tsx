import { Dialog, Transition } from "@headlessui/react";
import { ModalRequest } from "../domain/ModalRequest";

const DialogComponent = ({
  isOpen,
  onClose,
  title,
  children,
}: ModalRequest) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel>
            <Dialog.Title>{title}</Dialog.Title>
            <div>{children}</div>
          </Dialog.Panel>
        </div>
      </Transition>
    </Dialog>
  );
};

export default DialogComponent;
