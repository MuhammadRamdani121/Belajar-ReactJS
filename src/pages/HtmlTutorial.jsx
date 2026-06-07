import { Outlet } from "react-router-dom";
import LessonSidebar from "../components/LessonSidebar";

function HtmlTutorial() {
  return (
    <div className="flex">
      <LessonSidebar />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default HtmlTutorial;
