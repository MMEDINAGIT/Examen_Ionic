import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadmeAmdalaPage } from './padme-amdala.page';

describe('PadmeAmdalaPage', () => {
  let component: PadmeAmdalaPage;
  let fixture: ComponentFixture<PadmeAmdalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadmeAmdalaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadmeAmdalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
