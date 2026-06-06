import { useParams } from "react-router-dom";
import htmlLessons from "../data/htmlLessons";

function HtmlLesson() {
  const { lesson } = useParams();

  const currentLesson = htmlLessons.find((item) => item.slug === lesson);

  if (!currentLesson) {
    return <h1>Lesson Not Found</h1>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">{currentLesson.title}</h1>

      <p className="mt-4">{currentLesson.content}</p>
    </div>
  );
}

export default HtmlLesson;
