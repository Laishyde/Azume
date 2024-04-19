import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SectionServiceComponent } from '../../shared/components/section-service/section-service.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { DepoimentosComponent } from '../../shared/components/depoimentos/depoimentos.component';
import { ClientesComponent } from '../../shared/components/clientes/clientes.component';
import { TeamComponent } from "../../shared/components/team/team.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SectionServiceComponent, FooterComponent, DepoimentosComponent, ClientesComponent, TeamComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}
