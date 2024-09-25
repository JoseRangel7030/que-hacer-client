import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sectores-actividades',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sectores-actividades.component.html',
  styleUrl: './sectores-actividades.component.css'
})
export class SectoresActividadesComponent {
  sectores: string[] = ['Matemáticas', 'Música', 'Dibujo'];
  actividades: string[] = ['Estudiar Porcentajes', 'Estudiar teoría musical', 'Estudiar Sombras'];
}
