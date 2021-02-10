import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBcatpComponent } from './add-edit.component';

describe('AddBcatpComponent', () => {
  let component: AddBcatpComponent;
  let fixture: ComponentFixture<AddBcatpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBcatpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBcatpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
