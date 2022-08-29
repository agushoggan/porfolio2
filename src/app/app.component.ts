import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto_x';
  @ViewChild('seccionSkill') secFotosuno: ElementRef | any;
  @ViewChild('seccionAbout') secFotosdos: ElementRef | any;
  @ViewChild('seccionExperiencia') secFotostres: ElementRef | any;
  @ViewChild('seccionEducation') secFotoscuatro: ElementRef | any;
  scrollDos() {
    this.secFotosuno.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }
  scrollUno() {
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
