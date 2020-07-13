import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacylistPage } from './pharmacylist.page';

describe('PharmacylistPage', () => {
  let component: PharmacylistPage;
  let fixture: ComponentFixture<PharmacylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacylistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
