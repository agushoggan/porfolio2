import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto_x';
  @ViewChild('seccionFotos') secFotos: ElementRef | any;
  public scrollToIntro() {
    this.secFotos.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
  }

}
