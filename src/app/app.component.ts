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
}
