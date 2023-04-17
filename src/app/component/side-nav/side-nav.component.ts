import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';


interface SideNavTogle {

  screenWidth: number;
  collapsed: boolean;

}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  @Output() onTogleSideNav: EventEmitter<SideNavTogle> = new EventEmitter();

  collapse = true;
  screenWidth = 0;
  navDate = navbarData;


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
