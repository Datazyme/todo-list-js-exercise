// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    completeTask: function() {
      task.complete = true;
    }


  }
  return task;
}



/*prints out the provided task's details
function logTaskState(task) {
  console.log(`${task.title} has ${task.complete ? " " : " not "}been completed`);
}



//Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(task) {
  task.complete = true;
}*/


// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];
//console.log(tasks);
task1.logTaskState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTaskState(); // Clean Cat Litter has been completed
//task1.title
//task1.markCompleted();

/*logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);

//newTask("Clean Cat Litter"); // task 0
//newTask("Do Laundry"); // task 1

//logTaskState(0); // Clean Cat Litter has not been completed
//completeTask(0);
