import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CFbSignInComponent } from './c-fb-sign-in.component';

describe('CFbSignInComponent', () => {
  let component: CFbSignInComponent;
  let fixture: ComponentFixture<CFbSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CFbSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CFbSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
