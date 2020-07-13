import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsServicesPage } from './terms-services.page';

describe('TermsServicesPage', () => {
  let component: TermsServicesPage;
  let fixture: ComponentFixture<TermsServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsServicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
