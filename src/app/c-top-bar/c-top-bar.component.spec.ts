import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTopBarComponent } from './c-top-bar.component';

describe('CTopBarComponent', () => {
  let component: CTopBarComponent;
  let fixture: ComponentFixture<CTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
