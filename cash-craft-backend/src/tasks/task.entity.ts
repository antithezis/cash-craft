enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

class Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

const task = new Task();
task.id = 1;
