import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CFilterMenuComponent } from './c-filter-menu.component';

describe('CFilterMenuComponent', () => {
  let component: CFilterMenuComponent;
  let fixture: ComponentFixture<CFilterMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CFilterMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CFilterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
