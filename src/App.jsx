import { useState } from "react";

function App() {
  // =========================
  // TASK STATE
  // =========================

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Review React fundamentals",
      completed: false,
    },
    {
      id: 2,
      text: "Finish Data Analytics activity",
      completed: false,
    },
    {
      id: 3,
      text: "Study JavaScript",
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");

  // =========================
  // STUDY PROGRESS
  // =========================

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const totalTasks = tasks.length;

  const remainingTasks = totalTasks - completedTasks;

  const progressPercentage =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  // =========================
  // ADD TASK
  // =========================

  const addTask = () => {
    if (newTask.trim() === "") return;

    const newTaskItem = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    };

    setTasks([...tasks, newTaskItem]);
    setNewTask("");
  };

  // =========================
  // ENTER KEY
  // =========================

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  // =========================
  // COMPLETE / UNCOMPLETE TASK
  // =========================

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  // =========================
  // DELETE TASK
  // =========================

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

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


        {/* ==================== STUDY PROGRESS ==================== */}

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Study Progress
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                Keep going!
              </h2>
            </div>

            <span className="text-3xl font-bold text-blue-600">
              {progressPercentage}%
            </span>

          </div>


          {/* Progress Bar */}

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-gray-200">

            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{
                width: `${progressPercentage}%`,
              }}
            />

          </div>


          {/* Progress Statistics */}

          <div className="mt-4 grid grid-cols-3 gap-4 text-center">

            {/* Total Tasks */}

            <div>
              <p className="text-2xl font-bold text-gray-900">
                {totalTasks}
              </p>

              <p className="text-sm text-gray-500">
                Total Tasks
              </p>
            </div>


            {/* Completed */}

            <div>
              <p className="text-2xl font-bold text-green-600">
                {completedTasks}
              </p>

              <p className="text-sm text-gray-500">
                Completed
              </p>
            </div>


            {/* Remaining */}

            <div>
              <p className="text-2xl font-bold text-orange-500">
                {remainingTasks}
              </p>

              <p className="text-sm text-gray-500">
                Remaining
              </p>
            </div>

          </div>

        </div>

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

          {/* Task Heading */}

          <div className="mb-10 flex items-end justify-between">

            <div>

              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                My Tasks
              </p>

              <h2 className="text-3xl font-bold text-gray-900">
                Study Checklist
              </h2>

            </div>

            <span className="text-sm text-gray-500">
              {tasks.length}{" "}
              {tasks.length === 1 ? "task" : "tasks"}
            </span>

          </div>


          {/* Add Task */}

          <div className="mb-8 flex flex-col gap-3 sm:flex-row">

            <input
              type="text"
              placeholder="Add a new task..."
              value={newTask}
              onChange={(event) =>
                setNewTask(event.target.value)
              }
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

            {tasks.map((task) => (

              <div
                key={task.id}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:shadow-md"
              >

                {/* Complete Task */}

                <button
                  onClick={() => toggleTask(task.id)}
                  className="flex items-center gap-3 text-left"
                >

                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border-2 text-sm font-bold transition ${
                      task.completed
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-gray-300 text-transparent hover:border-blue-500"
                    }`}
                  >
                    ✓
                  </span>

                  <span
                    className={`transition ${
                      task.completed
                        ? "text-gray-400 line-through"
                        : "text-gray-700"
                    }`}
                  >
                    {task.text}
                  </span>

                </button>


                {/* Delete Task */}

                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-sm font-medium text-red-500 transition hover:text-red-700"
                >
                  Delete
                </button>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ==================== FOOTER ==================== */}

      <footer className="border-t border-gray-200 bg-white px-8 py-8 text-center">

        <p className="font-semibold text-gray-900">
          StudyFlow © 2026
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Built with React.js + Tailwind CSS
        </p>

      </footer>

    </div>
  );
}

export default App;