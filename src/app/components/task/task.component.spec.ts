import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { TaskService } from 'src/app/services/task.service';
import { FormsModule } from '@angular/forms';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let service: TaskService;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [TaskComponent],
      imports: [FormsModule],
      providers: [TaskService],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TaskService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new task', () => {
    component.newTaskTitle = 'Test Task';
    component.addTask();
    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0].title).toBe('Test Task');
  });

  it('should toggle a task', () => {
    component.newTaskTitle = 'Tarefa to toggle';
    component.addTask();
    const task = component.tasks[0];
    component.toggleTask(task.id);
    expect(component.tasks[0].completed).toBeTrue();
  });

  it('should remove a task', () => {
    component.newTaskTitle = 'Task to remove';
    component.addTask();
    const task = component.tasks[0];
    component.deleteTask(task.id);
    expect(component.tasks.length).toBe(0);
  });
});
