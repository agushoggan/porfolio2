import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto_x';
  @ViewChild('seccionAbout') secFotosuno: ElementRef | any;
  @ViewChild('seccionExperiencia') secFotosdos: ElementRef | any;
  @ViewChild('seccionSkill') secFotostres: ElementRef | any;
  @ViewChild('seccionEducation') secFotoscuatro: ElementRef | any;
  @ViewChild('seccionContacto') secFotoscinco: ElementRef | any;
  scrollUno() {
    this.secFotosuno.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }
  scrollDos() {
    this.secFotosdos.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }
  scrollTres() {
    this.secFotostres.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }
  scrollCuatro() {
    this.secFotoscuatro.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }
  scrollCinco() {
    this.secFotoscinco.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }
  Instagram(){
    window.open('https://www.instagram.com/ezequielbsso?r=nametag');
  }
  Github(){
    window.open('https://github.com/');
  }
  Linkedin(){
    window.open('https://www.linkedin.com/in/ezequiel-barragan-8463a51a6/');
  }
  Twitter(){
    window.open('https://twitter.com/ezee_bsso03');
  }
}

