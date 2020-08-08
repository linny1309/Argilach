import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CWelcomeComponent } from './c-welcome.component';

describe('CWelcomeComponent', () => {
  let component: CWelcomeComponent;
  let fixture: ComponentFixture<CWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
