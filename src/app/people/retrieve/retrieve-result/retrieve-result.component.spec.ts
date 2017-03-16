import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveResultComponent } from './retrieve-result.component';

describe('RetrieveResultComponent', () => {
  let component: RetrieveResultComponent;
  let fixture: ComponentFixture<RetrieveResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
