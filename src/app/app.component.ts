import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monProjet';

  aliment ={nom:'yaourt', prix: 0.6, image:"assets/Alimentation/yaourt.jpg", frais:true};
  aliments= [
    {
        nom:"Lait",
        image:"assets/Alimentation/lait.jpg",
        prix:1.2,
        frais:true
    },
    {
        nom:"Pâtes",
        image:"assets/Alimentation/pate.jpg",
        prix:0.41,
        frais:true
    }
    ,
    {
        nom:"Tomate en conserve",
        image:"assets/Alimentation/tomate.jpg",
        prix:1.8,
        frais:true
    },

];
  onAfficher(){
    alert(this.aliment.nom + " "+ this.aliment.prix+ " "+ this.aliment.frais);
  }

  nbFrais(){
  let compteur =0;
  for(let al of this.aliments ){
    if(al.frais)
      compteur ++;
  }
  return compteur;

  }
  
}
