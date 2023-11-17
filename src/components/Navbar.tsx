import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

const navigation = [
  {
    name: "Inicio",
    href: "/",
    current: true,
    class: "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium",
  },
  {
    name: "Clientes",
    href: "/customer",
    current: true,
    class:
      "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium",
  },
  {
    name: "Salas",
    href: "/rooms",
    current: true,
    class:
      "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium",
  },
  {
    name: "Sillas",
    href: "/seats",
    current: true,
    class:
      "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium",
  },
  {
    name: "Carteleras",
    href: "/billboards",
    current: true,
    class:
      "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium",
  },
  {
    path: "/bookings",
    name: "Reservas",
    current: true,
    class:
      "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium",
  },
];

const logo =
  "https://facturasintuitosa.com/static/media/isologo.296eb24044a6b769ab1e.png";

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <span className="material-symbols-outlined">close</span>
                  ) : (
                    <span className="material-symbols-outlined">menu</span>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center gap-2 text-white">
                  <img className="h-8 w-auto" src={logo} alt="Intuito Redux" />
                  <p>Intuito Suscripciones</p>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        to={`${item.href}`}
                        className={item.class}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 flex justify-center flex-col text-center">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  to={`${item.href}`}
                  className={item.class}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
