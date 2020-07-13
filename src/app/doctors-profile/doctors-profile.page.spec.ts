import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsProfilePage } from './doctors-profile.page';

describe('DoctorsProfilePage', () => {
  let component: DoctorsProfilePage;
  let fixture: ComponentFixture<DoctorsProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
