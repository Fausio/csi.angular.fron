import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import { MatDrawer } from '@angular/material/sidenav';
import { MatDrawerContainer } from '@angular/material/sidenav'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/menu/nav-bar/nav-bar.component';
import { SideBarComponent } from './component/menu/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,

    MatSlideToggleModule,
    MatSidenavModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
