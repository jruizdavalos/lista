import { Component, OnInit } from '@angular/core';
import { Personas } from '../models/personas.models';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  /* personas = ['Juan, Ruiz', 'Jose, Diaz', 'Pedro, Perez']; */
  personas: Personas[] = [
    new Personas('Juan', 'Ruiz', 3345),
    new Personas('Pedro', 'Altamiranda', 2235),
    new Personas('Jose', 'Marti', 3345)
  ]

  constructor() {

  }
  ngOnInit(): void {

  }
}
