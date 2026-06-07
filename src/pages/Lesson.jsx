import { useParams, Link } from "react-router-dom";
import tutorials from "../data/tutorials";

function Lesson() {
  const { course, lesson } = useParams();

  const currentCourse = tutorials.find((item) => item.slug === course);

  const currentLesson = currentCourse?.lessons.find(
    (item) => item.slug === lesson,
  );

  if (!currentLesson) {
    return <h1 className="text-2xl font-bold">Lesson Not Found</h1>;
  }

  const currentIndex = currentCourse.lessons.findIndex(
    (item) => item.slug === lesson,
  );

  const previousLesson =
    currentIndex > 0 ? currentCourse.lessons[currentIndex - 1] : null;

  const nextLesson =
    currentIndex < currentCourse.lessons.length - 1
      ? currentCourse.lessons[currentIndex + 1]
      : null;

  return (
    <div className="max-w-4xl min-h-screen flex flex-col">
      {/* Content */}
      <div>
        <div className="text-sm text-gray-500 mb-4 capitalize">
          Home &gt; {course} &gt; {currentLesson.title}
        </div>

        <h1 className="text-4xl font-bold">{currentLesson.title}</h1>

        <p className="mt-6 text-lg leading-relaxed">{currentLesson.content}</p>

        {currentLesson.example && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-3">Example</h2>

            <div className="bg-slate-900 text-white p-4 rounded-lg overflow-x-auto">
              <pre>{currentLesson.example}</pre>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-auto pt-12">
        <div className="flex justify-between border-t pt-6">
          {previousLesson ? (
            <Link
              to={`/tutorial/${course}/${previousLesson.slug}`}
              className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              ← Previous
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link
              to={`/tutorial/${course}/${nextLesson.slug}`}
              className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Next →
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

export default Lesson;
