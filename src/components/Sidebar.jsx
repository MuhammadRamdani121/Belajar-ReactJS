import { NavLink } from "react-router-dom";
import tutorials from "../data/tutorials";

function Sidebar({ search }) {
  return (
    <aside className="w-72 bg-slate-100 min-h-screen overflow-y-auto">
      {tutorials.map((tutorial) => {
        const filteredLessons = tutorial.lessons.filter((lesson) =>
          lesson.title.toLowerCase().includes(search.toLowerCase()),
        );

        if (filteredLessons.length === 0 && search !== "") {
          return null;
        }

        return (
          <div key={tutorial.slug}>
            <h2 className="px-4 py-3 font-bold bg-slate-200 text-center">
              {tutorial.title}
            </h2>

            {filteredLessons.map((lesson) => (
              <NavLink
                key={lesson.slug}
                to={`/tutorial/${tutorial.slug}/${lesson.slug}`}
                className={({ isActive }) =>
                  `block pl-8 py-2 ${
                    isActive ? "bg-green-600 text-white" : "hover:bg-gray-200"
                  }`
                }
              >
                {lesson.title}
              </NavLink>
            ))}
          </div>
        );
      })}
    </aside>
  );
}

export default Sidebar;
