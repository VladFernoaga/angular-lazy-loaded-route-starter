import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementOneDetailComponent } from './element-one-detail.component';

describe('ElementOneDetailComponent', () => {
  let component: ElementOneDetailComponent;
  let fixture: ComponentFixture<ElementOneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementOneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementOneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
