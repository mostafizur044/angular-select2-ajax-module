import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Select2AJAXComponent } from './select2-ajax.component';

describe('Select2AJAXComponent', () => {
  let component: Select2AJAXComponent;
  let fixture: ComponentFixture<Select2AJAXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Select2AJAXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Select2AJAXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
