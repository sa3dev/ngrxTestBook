import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklandpageComponent } from './booklandpage.component';

describe('BooklandpageComponent', () => {
  let component: BooklandpageComponent;
  let fixture: ComponentFixture<BooklandpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooklandpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
