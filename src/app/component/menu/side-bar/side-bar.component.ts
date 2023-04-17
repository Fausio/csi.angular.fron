import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {


  // sideMenu =  menuList;
  collapse = false;

  ngOnInit(): void {
      
  }

  toggleSidebar(){
    this.collapse = !this.collapse;
  }
}
