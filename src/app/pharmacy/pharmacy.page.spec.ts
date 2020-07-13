import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyPage } from './pharmacy.page';

describe('PharmacyPage', () => {
  let component: PharmacyPage;
  let fixture: ComponentFixture<PharmacyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
