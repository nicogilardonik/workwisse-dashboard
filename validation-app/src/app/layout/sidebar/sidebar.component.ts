import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Import RouterLink

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink], // Add RouterLink to imports
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
