import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCalendarComponent } from './c-calendar.component';

describe('CCalendarComponent', () => {
  let component: CCalendarComponent;
  let fixture: ComponentFixture<CCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
