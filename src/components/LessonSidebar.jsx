import { NavLink } from "react-router-dom";
import htmlLessons from "../data/htmlLessons";

function LessonSidebar() {
  return (
    <aside className="w-64 border-r bg-white">
      <h2 className="font-bold p-4">HTML Tutorial</h2>

      {htmlLessons.map((lesson) => (
        <NavLink
          key={lesson.id}
          to={`/html/${lesson.slug}`}
          className={({ isActive }) =>
            `block px-4 py-2 ${
              isActive ? "bg-green-600 text-white" : "hover:bg-gray-100"
            }`
          }
        >
          {lesson.title}
        </NavLink>
      ))}
    </aside>
  );
}

export default LessonSidebar;
