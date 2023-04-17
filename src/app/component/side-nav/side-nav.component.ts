import { Component } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {


  collapse = true;
  navDate = navbarData;


  toggleCollapse(): void {

    this.collapse = !  this.collapse ;
  }
  closseToggleCollapse(): void {

    this.collapse = false;
  }
}
