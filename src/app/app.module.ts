import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatListModule } from '@angular/material/list'; 
import { MatButtonModule } from '@angular/material/button'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  
import { SideNavComponent } from './component/menu/side-nav/side-nav.component';
import { BodyComponent } from './component/body/body.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HouseholdComponent } from './component/household/household.component';
import { BeneficiaryComponent } from './component/beneficiary/beneficiary.component';
import { PartnerComponent } from './component/partner/partner.component';
import { SiteComponent } from './component/site/site.component';

@NgModule({
  declarations: [
    AppComponent,  
    SideNavComponent, BodyComponent, DashboardComponent, HouseholdComponent, BeneficiaryComponent, PartnerComponent, SiteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,

    MatSlideToggleModule,
    MatSidenavModule, 
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
