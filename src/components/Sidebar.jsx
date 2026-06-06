import { NavLink } from "react-router-dom";
import tutorials from "../data/tutorials";

function Sidebar({ search }) {
  const filteredTutorials = tutorials.filter((tutorial) =>
    tutorial.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <aside className="w-64 bg-slate-100 min-h-screen">
      <h2 className="font-bold text-xl p-4">Tutorials</h2>

      <ul>
        {filteredTutorials.map((tutorial) => (
          <li key={tutorial.id}>
            <NavLink
              to={tutorial.path}
              className={({ isActive }) =>
                `block px-4 py-2 hover:bg-green-500 hover:text-white ${
                  isActive ? "bg-green-600 text-white" : ""
                }`
              }
            >
              {tutorial.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
