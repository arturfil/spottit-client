import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySpotsComponent } from './my-spots.component';

describe('MySpotsComponent', () => {
  let component: MySpotsComponent;
  let fixture: ComponentFixture<MySpotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySpotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
