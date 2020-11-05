import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monProjet';
  etudiants = [
    {nom:'Amir', moyenne:15.5, ville:'Tunis'},
    {nom:'Mouna', moyenne:14.2, ville:'Sfax'},
    {nom:'Sami', moyenne:8.75, ville:'Sousse'},
    {nom:'Sameh', moyenne:12.42, ville:'Tunis'},
    {nom:'Mounir', moyenne:13.87, ville:'Nabeul'},
    {nom:'Siwar', moyenne:7.9, ville:'Tunis'},
    {nom:'Karim', moyenne:12.56, ville:'Sfax'},
    {nom:'Ahlem', moyenne:9.96, ville:'Sousse'}
  ]
}
