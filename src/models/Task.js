
/**
 * Creates a task object for the StudyFlow dashboard.
 * @param {number} id - Unique task identifier.
 * @param {string} text - Task description.
 * @param {boolean} completed - Task completion status.
 * @returns {{ id: number, text: string, completed: boolean }}
 */
export function createTask(id, text, completed = false) {
  return {
    id,
    text,
    completed,
  };
}

/**
 * Returns the initial sample tasks for the dashboard.
 */
export function getInitialTasks() {
  return [
    createTask(1, "Review React fundamentals"),
    createTask(2, "Finish Data Analytics activity"),
    createTask(3, "Study JavaScript"),
  ];
}
