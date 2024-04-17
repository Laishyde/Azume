import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SectionServiceComponent } from '../../shared/components/section-service/section-service.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SectionServiceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
