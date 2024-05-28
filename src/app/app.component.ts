import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, RouterLink, ReactiveFormsModule]
})
export class AppComponent {
  title = 'Hospital Management System';
}