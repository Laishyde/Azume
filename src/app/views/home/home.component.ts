import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SectionServiceComponent } from '../../shared/components/section-service/section-service.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { TeamComponent } from "../../shared/components/team/team.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, SectionServiceComponent, FooterComponent, TeamComponent]
})
export class HomeComponent {

}
