import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  nom = 'aziz';
  img = 'https://angular.io/assets/images/logos/angular/angular.svg';
  bonjour(){
    alert('bonjour');
  }
  nom1='amen';

  //signal
  count=0;
  counts=signal(0);
  incrementSimple(){
    this.count++;
  
  }
  increment(){
    this.counts.update((v) => v + 1);
  }
  
}
