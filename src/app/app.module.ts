 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import {HttpClientModule } from  '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { BodyComponent } from './component/body/body.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HouseholdComponent } from './component/household/household.component';
import { BeneficiaryComponent } from './component/beneficiary/beneficiary.component';
import { PartnerComponent } from './component/partner/partner.component';
import { SiteComponent } from './component/site/site.component';
import { ReportComponent } from './component/report/report.component';
import { HouseholdService } from './service/household.service';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent, BodyComponent, DashboardComponent, HouseholdComponent, BeneficiaryComponent, PartnerComponent, SiteComponent, ReportComponent
  ],
  imports: [
    BrowserModule,
   
    AppRoutingModule,
    RouterModule,

    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,

    HttpClientModule
  ],
  providers: [HouseholdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
