import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    window.open('https://www.instagram.com/agusshoggan/');
  }
  Github(){
    window.open('https://github.com/agushoggan');
  }
  Linkedin(){
    window.open('https://www.linkedin.com/in/agustin-hoggan-962564228/');
  }
  Twitter(){
    window.open('https://twitter.com/AgustiinHoggan');
  }
}


