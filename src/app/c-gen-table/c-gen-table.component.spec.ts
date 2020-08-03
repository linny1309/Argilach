import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CGenTableComponent } from './c-gen-table.component';

describe('CGenTableComponent', () => {
  let component: CGenTableComponent;
  let fixture: ComponentFixture<CGenTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CGenTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CGenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
