import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCommentComponent } from './c-comment.component';

describe('CCommentComponent', () => {
  let component: CCommentComponent;
  let fixture: ComponentFixture<CCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
