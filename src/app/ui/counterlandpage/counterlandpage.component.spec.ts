import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterlandpageComponent } from './counterlandpage.component';

describe('CounterlandpageComponent', () => {
  let component: CounterlandpageComponent;
  let fixture: ComponentFixture<CounterlandpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterlandpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterlandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
