import { Link } from "react-router-dom";

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
];

const Navbar = () => {
  return (
    <nav className="flex flex-row flex-wrap justify-around bg-white dark:bg-slate-800 rounded-lg px-6 py-2 ring-1 ring-slate-900/5 shadow-xl">
      <Link
        className="text-slate-900 dark:text-white text-base font-medium tracking-tight"
        to="/"
      >
        Prueba Intuito
      </Link>
      <ul className="flex flex-row gap-2">
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
