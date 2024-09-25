import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { BienvenidaComponent } from "./components/bienvenida/bienvenida.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, BienvenidaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'que-hacer';

  constructor(private router:Router){}

  redirectToPage(): void {
    console.log("Entra a la función");
    this.router.navigate(['/sectoresactividades']);
  }
}
