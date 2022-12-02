import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit{
  persona= ['Juan, Ruiz', 'Jose, Diaz', 'Pedro, Perez'];

  constructor(){

  }
  ngOnInit(): void {
    
  }
}
