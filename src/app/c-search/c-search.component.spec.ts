import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSearchComponent } from './c-search.component';

describe('CSearchComponent', () => {
  let component: CSearchComponent;
  let fixture: ComponentFixture<CSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
