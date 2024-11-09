import { Component } from '@angular/core';
import { TotalProjectsWidgetComponent } from '@elementar/store/widgets';

@Component({
  selector: 'app-total-projects-example',
  standalone: true,
  imports: [
    TotalProjectsWidgetComponent
  ],
  templateUrl: './total-projects-example.component.html',
  styleUrl: './total-projects-example.component.scss'
})
export class TotalProjectsExampleComponent {

}