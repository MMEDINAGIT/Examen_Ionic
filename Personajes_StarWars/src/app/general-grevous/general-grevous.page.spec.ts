import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralGrevousPage } from './general-grevous.page';

describe('GeneralGrevousPage', () => {
  let component: GeneralGrevousPage;
  let fixture: ComponentFixture<GeneralGrevousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralGrevousPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralGrevousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
