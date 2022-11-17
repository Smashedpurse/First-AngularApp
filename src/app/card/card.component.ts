import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  public Titulo:string="Curso de Angular con Interpolacion";
  public Imagen:string="https://photoshop-kopona.com/uploads/posts/2019-05/1559108923_0-2.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
