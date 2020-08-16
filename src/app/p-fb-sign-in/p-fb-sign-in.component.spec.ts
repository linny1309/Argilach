import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PFbSignInComponent } from './p-fb-sign-in.component';

describe('PFbSignInComponent', () => {
  let component: PFbSignInComponent;
  let fixture: ComponentFixture<PFbSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PFbSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PFbSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
