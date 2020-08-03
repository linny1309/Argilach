import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLeftMenuComponent } from './c-left-menu.component';

describe('CLeftMenuComponent', () => {
  let component: CLeftMenuComponent;
  let fixture: ComponentFixture<CLeftMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLeftMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
