import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBottomContainerComponent } from './c-bottom-container.component';

describe('CBottomContainerComponent', () => {
  let component: CBottomContainerComponent;
  let fixture: ComponentFixture<CBottomContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBottomContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBottomContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
