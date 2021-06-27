import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCredentialComponent } from './submit-credential.component';

describe('SubmitCredentialComponent', () => {
  let component: SubmitCredentialComponent;
  let fixture: ComponentFixture<SubmitCredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitCredentialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
