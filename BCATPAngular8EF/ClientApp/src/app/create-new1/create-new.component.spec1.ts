import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBcatpComponent } from './create-new.component';

describe('CreateBcatpComponent', () => {
  let component: CreateBcatpComponent;
  let fixture: ComponentFixture<CreateBcatpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBcatpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBcatpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
