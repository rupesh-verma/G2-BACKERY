import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLandingPage } from './app-landing.page';

describe('AppLandingPage', () => {
  let component: AppLandingPage;
  let fixture: ComponentFixture<AppLandingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLandingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
