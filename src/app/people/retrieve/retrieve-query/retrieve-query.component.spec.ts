import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveQueryComponent } from './retrieve-query.component';

describe('RetrieveQueryComponent', () => {
  let component: RetrieveQueryComponent;
  let fixture: ComponentFixture<RetrieveQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
