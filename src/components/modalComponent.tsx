import { Dialog, Transition } from "@headlessui/react";
import { ModalRequest } from "../domain/ModalRequest";
import { Fragment } from "react";

const DialogComponent = ({
  isOpen,
  onClose,
  title,
  children,
}: ModalRequest) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block bg-white dark:bg-slate-800 px-6 py-8 ring-1 ring-slate-900/5 p-4 shadow-md shadow-gray-800 rounded-lg */">
              <Dialog.Title
                as="h3"
                className="text-lg flex justify-between font-medium leading-6 text-slate-900 dark:text-white mt-5 tracking-tight"
              >
                {title}
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => onClose(false)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </Dialog.Title>
              <div className="text-slate-500 dark:text-slate-400 mt-2 text-sm p-5">
                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DialogComponent;
