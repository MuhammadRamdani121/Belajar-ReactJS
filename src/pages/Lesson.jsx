import { useParams } from "react-router-dom";
import lessons from "../data/lessons";

function Lesson() {
  const { slug } = useParams();

  const lesson = lessons[slug];

  if (!lesson) {
    return <h1>Tutorial tidak ditemukan</h1>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">{lesson.title}</h1>

      <p className="mt-4">{lesson.description}</p>

      <div className="bg-slate-900 text-white p-4 rounded mt-6">
        <pre>{lesson.code}</pre>
      </div>
    </div>
  );
}

export default Lesson;
