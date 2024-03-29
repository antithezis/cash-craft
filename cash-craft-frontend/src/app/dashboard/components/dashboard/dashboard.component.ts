import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

const primeNgModules = [CalendarModule];

@Component({
  selector: 'Dashboard',
  standalone: true,
  imports: [...primeNgModules, FormsModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  date: any;
}
