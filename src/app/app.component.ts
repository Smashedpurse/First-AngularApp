import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subTitulo:string;
  nro?:Number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MiPrimeraApp';

  public ArregloTarjetas: Tarjeta[] = []

ngOnInit(): void {
  this.ArregloTarjetas =[
    {titulo:'video 1', subTitulo: 'subtitulo Video 1'},
    {titulo:'video 2', subTitulo: 'subtitulo Video 2'},
    {titulo:'video 3', subTitulo: 'subtitulo Video 3'} 
  ]
}

}
