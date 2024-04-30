import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierExempleComponent } from './premier-exemple.component';

describe('PremierExempleComponent', () => {
  let component: PremierExempleComponent;
  let fixture: ComponentFixture<PremierExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremierExempleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremierExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
