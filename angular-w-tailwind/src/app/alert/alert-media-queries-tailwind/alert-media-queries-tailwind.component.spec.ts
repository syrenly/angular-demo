import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertMediaQueriesTailwindComponent } from './alert-media-queries-tailwind.component';

describe('AlertMediaQueriesTailwindComponent', () => {
  let component: AlertMediaQueriesTailwindComponent;
  let fixture: ComponentFixture<AlertMediaQueriesTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertMediaQueriesTailwindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertMediaQueriesTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
