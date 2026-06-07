import { NavLink } from "react-router-dom";
import htmlLessons from "../data/htmlLessons";

function LessonSidebar() {
  return (
    <aside className="w-72 border-r h-screen overflow-y-auto text-center">
      <h2 className="p-4 font-bold text-xl ">HTML Tutorial</h2>

      {htmlLessons.map((lesson) => (
        <NavLink
          key={lesson.slug}
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
