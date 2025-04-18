import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud add a new task', () => {
    service.addTask('New Task');
    const tasks = service.getTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe('New Task');
    expect(tasks[0].completed).toBeFalse();
  });

  it('should toggle task status', () => {
    service.addTask('Task for toggle');
    const task = service.getTasks()[0];
    service.toggleTask(task.id);
    expect(service.getTasks()[0].completed).toBeTrue();
  });

  it('should remove a task', () => {
    service.addTask('Task for remove');
    const task = service.getTasks()[0];
    service.deleteTask(task.id);
    expect(service.getTasks().length).toBe(0);
  });
});
