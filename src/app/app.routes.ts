import { FaqComponent } from './views/faq/faq.component';
import { DepoimentosComponent } from './views/depoimentos/depoimentos.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { BlogComponent } from './views/blog/blog.component';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ServicosComponent } from './views/servicos/servicos.component';
import { HeaderComponent } from './shared/components/header/header.component';

export const routes: Routes = [
    { path:'', redirectTo:'home',pathMatch:'full'},
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'depoimentos', component: DepoimentosComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'home', component: HomeComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'servicos', component: ServicosComponent },
    { path: 'header', component: HeaderComponent }
];
