import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    "Review React fundamentals",
    "Finish Data Analytics activity",
    "Study JavaScript",
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    setTasks([...tasks, newTask.trim()]);
    setNewTask("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="app">

      {/* ==================== NAVBAR ==================== */}
      <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-5">
        <div className="text-2xl font-bold text-blue-600">
          StudyFlow
        </div>

        <div className="flex gap-8">
          <a
            href="#dashboard"
            className="font-medium text-gray-600 transition hover:text-blue-600"
          >
            Dashboard
          </a>

          <a
            href="#subjects"
            className="font-medium text-gray-600 transition hover:text-blue-600"
          >
            Subjects
          </a>

          <a
            href="#tasks"
            className="font-medium text-gray-600 transition hover:text-blue-600"
          >
            Tasks
          </a>
        </div>
      </nav>


      {/* ==================== HERO ==================== */}
      <section
        id="dashboard"
        className="bg-gray-50 px-8 py-20 text-center"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
          Student Dashboard
        </p>

        <h1 className="text-5xl font-bold leading-tight text-blue-600">
          Learn smarter.
          <br />
          Build better.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Organize your subjects, track your tasks, and stay focused on your
          goals.
        </p>

        <a
          href="#tasks"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          View My Tasks
        </a>
      </section>


      {/* ==================== SUBJECTS ==================== */}
      <section
        id="subjects"
        className="bg-white px-8 py-20"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
              My Subjects
            </p>

            <h2 className="text-3xl font-bold text-gray-900">
              Current Subjects
            </h2>
          </div>


          <div className="grid gap-6 md:grid-cols-3">

            {/* React Development */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-bold text-blue-600">
                01
              </span>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                React Development
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Learn components, JSX, props, state, and modern frontend
                development.
              </p>
            </div>


            {/* Data Analytics */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-bold text-blue-600">
                02
              </span>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Data Analytics
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Explore data cleaning, analysis, visualization, and statistics.
              </p>
            </div>


            {/* Cybersecurity */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-bold text-blue-600">
                03
              </span>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Cybersecurity
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Understand cybersecurity concepts, threats, protection, and
                security practices.
              </p>
            </div>

          </div>
        </div>
      </section>


     {/* ==================== TASKS ==================== */}
<section
  id="tasks"
  className="bg-gray-50 px-8 py-20"
>
  <div className="mx-auto max-w-4xl">

    {/* Section Heading */}
    <div className="mb-10">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
        My Tasks
      </p>

      <h2 className="text-3xl font-bold text-gray-900">
        Study Checklist
      </h2>
    </div>


        {/* Add Task */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />

          <button
            onClick={addTask}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>


        {/* Task List */}
        <div className="space-y-3">
          {tasks.map((task, index) => (
            <div
              className="flex items-center rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:shadow-md"
              key={index}
            >
              <span className="text-gray-700">
                {task}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>


          <footer className="border-t border-gray-200 bg-white px-8 py-8 text-center">
        <p className="font-semibold text-gray-900">
          StudyFlow © 2026
        </p>

        
      </footer>

    </div>
  );
}

export default App;