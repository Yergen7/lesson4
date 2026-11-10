interface Task {
  id: number;
  title: string;
  done: boolean;
  deadline?: string;
}

const tasks: Task[] = [
  { id: 1, title: "Сделать ДЗ по Git", done: true },
  { id: 2, title: "Повторить типы", done: false, deadline: "11.11" },
  { id: 3, title: "Выполнить домашнее задание по TypeScript", done: false },
  { id: 4, title: "Посмотреть урок по FullStack AI", done: false },
  { id: 5, title: "Позаниматься английским языком", done: false },
];

function addTask(list: Task[], title: string): Task {
  const maxId = list.reduce((max, task) => {
    return task.id > max ? task.id : max;
  }, 0);

  const task: Task = {
    id: maxId + 1,
    title,
    done: false,
  };

  list.push(task);
  return task;
}

function completeTask(list: Task[], id: number): void {
  const task = list.find((task) => task.id === id);

  if (task) {
    task.done = true;
  }
}

function pending(list: Task[]): Task[] {
  return list.filter((task) => !task.done);
}

addTask(tasks, "Новая задача");
completeTask(tasks, 2);
console.log(pending(tasks));