import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    "Review React fundamentals",
    "Finish Data Analytics activity",
    "Study JavaScript",
  ]);

  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() === "") return;

    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  return (
    <div className="app">

      <nav className="navbar">
        <h2>StudyFlow</h2>

        <div className="nav-links">
          <a href="#dashboard">Dashboard</a>
          <a href="#subjects">Subjects</a>
          <a href="#tasks">Tasks</a>
        </div>
      </nav>

      <main>

        <section className="hero" id="dashboard">
          <div>
            <p className="small-title">STUDENT DASHBOARD</p>

            <h1>
              Learn smarter.
              <br />
              Build better.
            </h1>

            <p className="hero-text">
              Organize your subjects, track your tasks,
              and stay focused on your goals.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("tasks")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Tasks
            </button>
          </div>
        </section>

        <section className="subjects" id="subjects">

          <div className="section-heading">
            <p className="small-title">MY SUBJECTS</p>
            <h2>Current Subjects</h2>
          </div>

          <div className="subject-grid">

            <div className="subject-card">
              <span>01</span>
              <h3>React Development</h3>
              <p>
                Learn components, JSX, props,
                state, and modern frontend development.
              </p>
            </div>

            <div className="subject-card">
              <span>02</span>
              <h3>Data Analytics</h3>
              <p>
                Explore data cleaning, analysis,
                visualization, and statistics.
              </p>
            </div>

            <div className="subject-card">
              <span>03</span>
              <h3>Cybersecurity</h3>
              <p>
                Understand security principles,
                threats, and defensive techniques.
              </p>
            </div>

          </div>

        </section>

        <section className="tasks" id="tasks">

          <div className="section-heading">
            <p className="small-title">TO-DO LIST</p>
            <h2>Today's Tasks</h2>
          </div>

          <div className="task-input">

            <input
              type="text"
              placeholder="Enter a new task..."
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  addTask();
                }
              }}
            />

            <button onClick={addTask}>
              Add Task
            </button>

          </div>

          <div className="task-list">

            {tasks.map((task, index) => (
              <div className="task" key={index}>
                <span className="task-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{task}</p>
              </div>
            ))}

          </div>

        </section>

      </main>

      <footer>
        <p>StudyFlow © 2026</p>
        <p>Built with React.js + CSS</p>
      </footer>

    </div>
  );
}

export default App;