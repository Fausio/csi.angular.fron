import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';


interface SideNavTogle {

  screenWidth: number;
  collapsed: boolean;

}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  animations: [

    trigger('fadeInout',
      [transition(':enter',[
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
          )
        ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
          )
        ])
      ]),

    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' })          
          ])
          )
      ])
    ])
  ]
})
export class SideNavComponent implements OnInit {

  @Output() onTogleSideNav: EventEmitter<SideNavTogle> = new EventEmitter();

  collapse = true;
  screenWidth = 0;
  navDate = navbarData;

  @HostListener('window:resize', ['$event'])
  onRisize(event: any) {
    this.screenWidth = window.innerHeight;
    if (this.screenWidth <= 768) {
      this.collapse = false;
      this.onTogleSideNav.emit({ collapsed: this.collapse, screenWidth: this.screenWidth });
    }
  }

  ngOnInit(): void {
    this.closseToggleCollapse();
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {

    this.collapse = !this.collapse;
    this.onTogleSideNav.emit(
      {
        collapsed: this.collapse,
        screenWidth: this.screenWidth
      })
  }

  closseToggleCollapse(): void {

    this.collapse = false;
    this.onTogleSideNav.emit(
      {
        collapsed: this.collapse,
        screenWidth: this.screenWidth
      })
  }
}
