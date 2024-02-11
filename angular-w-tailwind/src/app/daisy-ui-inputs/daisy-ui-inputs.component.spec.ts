import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaisyUIInputsComponent } from './daisy-ui-inputs.component';

describe('DaisyUIInputsComponent', () => {
  let component: DaisyUIInputsComponent;
  let fixture: ComponentFixture<DaisyUIInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaisyUIInputsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DaisyUIInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
