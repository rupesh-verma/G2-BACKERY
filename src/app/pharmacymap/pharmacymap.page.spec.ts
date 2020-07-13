import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacymapPage } from './pharmacymap.page';

describe('PharmacymapPage', () => {
  let component: PharmacymapPage;
  let fixture: ComponentFixture<PharmacymapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacymapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacymapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
