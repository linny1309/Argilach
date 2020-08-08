import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CFbTaskListComponent } from './c-fb-task-list.component';

describe('CFbTaskListComponent', () => {
  let component: CFbTaskListComponent;
  let fixture: ComponentFixture<CFbTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CFbTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CFbTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
