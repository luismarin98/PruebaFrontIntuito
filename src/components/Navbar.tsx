import { Link } from "react-router-dom";
import logo from "../assets/logo.f683b60d.png";

const routes = [
  {
    path: "/movies",
    name: "Peliculas",
  },
  {
    path: "/customer",
    name: "Clientes",
  },
  {
    path: "/rooms",
    name: "Salas",
  },
  {
    path: "/seats",
    name: "Sillas",
  },
  {
    path: '/billboards',
    name: 'Carteleras',
  },
  {
    path: '/bookings',
    name: 'Reservas',
  }
];

const Navbar = () => {
  return (
    <nav className="flex flex-row flex-wrap justify-around bg-white dark:bg-slate-800 rounded-lg px-6 py-2 ring-1 ring-slate-900/5 shadow-xl">
      <Link
        className="text-slate-900 dark:text-white text-base font-medium tracking-tight flex flex-row items-center gap-2"
        to="/"
      >
        <img
          className="inline-block h-6 w-6 "
          src={logo}
          alt="logoIntuito"
        />
        Prueba Intuito
      </Link>
      <ul className="flex flex-row gap-4">
        {routes.map((data) => (
          <li key={data.name} className="text-slate-500 dark:text-slate-400">
            <Link className="hover:text-slate-600" to={data.path}>
              {data.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
