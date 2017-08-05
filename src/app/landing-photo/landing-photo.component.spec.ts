import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPhotoComponent } from './landing-photo.component';

describe('LandingPhotoComponent', () => {
  let component: LandingPhotoComponent;
  let fixture: ComponentFixture<LandingPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
