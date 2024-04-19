import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule


@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
  
})
 export class  TeamComponent implements OnInit {
menber: any;
  ngOnInit(): void {
    console.log(this.team[0].foto)
  }
  team =  [
    {
      "nome": "Eduardo",
      "profissao": "CEO",
      "foto": "../../../../assets/images/eduardo.png"
    },
    {
      "nome": "Lais",
      "profissao": "Desenvolvedor",
      "foto": "../../../../assets/images/lais.jpg"
     
    },
    {
      "nome": "Guilherme",
      "profissao": "Produtor Manager",
      "foto": "../../../../assets/images/guilherme.jpg"
    }
    
  
  ]
  onInit(){
    console.log(this.team[0].foto)
  }

}
