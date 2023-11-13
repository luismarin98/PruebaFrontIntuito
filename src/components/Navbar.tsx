import { Link } from "react-router-dom";

const routes = [
  {
    path: "/movies",
    name: "Movies",
  },
];

const Navbar = () => {
  return (
    <nav className="flex flex-row flex-wrap justify-around">
      <Link to="/">Prueba</Link>
      <ul>
        {routes.map((data) => (
          <li key={data.name}>
            <Link to={data.path}>{data.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
