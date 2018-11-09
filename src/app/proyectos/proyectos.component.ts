import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(function(){
      document.getElementsByClassName('content')[0].classList.add('opacity-1');
    },500)
  }

}
