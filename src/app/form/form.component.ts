import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'Forms',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(function(){
      document.getElementsByClassName('content')[0].classList.add('opacity-1');
    },500)

    // console.log($( ".glitch-img" ).html())
   $( ".glitch-img" ).mgGlitch();

    // (<any>$('.glitch-img)).plugin();
  }

}
