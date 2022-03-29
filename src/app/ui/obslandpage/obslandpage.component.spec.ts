import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObslandpageComponent } from './obslandpage.component';

describe('ObslandpageComponent', () => {
  let component: ObslandpageComponent;
  let fixture: ComponentFixture<ObslandpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObslandpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObslandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
