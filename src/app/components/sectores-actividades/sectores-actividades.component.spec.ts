import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoresActividadesComponent } from './sectores-actividades.component';

describe('SectoresActividadesComponent', () => {
  let component: SectoresActividadesComponent;
  let fixture: ComponentFixture<SectoresActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectoresActividadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectoresActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
