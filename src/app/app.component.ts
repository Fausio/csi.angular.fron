import { Component } from '@angular/core';


interface SideNavTogle {

  screenWidth: number;
  collapsed: boolean;

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csi.angular.fron';

  isSideNavCollapsed = false;
  screenWidth= 0;

  onTogleSideNav(data: SideNavTogle): void {

    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
