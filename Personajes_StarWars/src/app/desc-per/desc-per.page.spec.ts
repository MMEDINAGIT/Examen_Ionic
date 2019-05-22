import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescPerPage } from './desc-per.page';

describe('DescPerPage', () => {
  let component: DescPerPage;
  let fixture: ComponentFixture<DescPerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescPerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescPerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
