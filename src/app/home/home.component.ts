import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(function(){
      document.getElementsByClassName('content')[0].classList.add('opacity-1');
    },500)
  }

}
