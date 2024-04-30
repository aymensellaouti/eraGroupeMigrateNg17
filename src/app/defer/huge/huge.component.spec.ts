import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HugeComponent } from './huge.component';

describe('HugeComponent', () => {
  let component: HugeComponent;
  let fixture: ComponentFixture<HugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HugeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
