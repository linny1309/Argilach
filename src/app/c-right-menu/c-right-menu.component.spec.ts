import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRightMenuComponent } from './c-right-menu.component';

describe('CRightMenuComponent', () => {
  let component: CRightMenuComponent;
  let fixture: ComponentFixture<CRightMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRightMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
