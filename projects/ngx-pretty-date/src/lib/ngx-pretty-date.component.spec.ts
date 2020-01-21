import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPrettyDateComponent } from './ngx-pretty-date.component';

describe('NgxPrettyDateComponent', () => {
  let component: NgxPrettyDateComponent;
  let fixture: ComponentFixture<NgxPrettyDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPrettyDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPrettyDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
