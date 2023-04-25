
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { BodyComponent } from './component/body/body.component';
import { DashboardComponent } from './component/dashboard/dashboard.component'; 
import { PartnerComponent } from './component/partner/partner.component';
import { SiteComponent } from './component/site/site.component';
import { ReportComponent } from './component/report/report.component';
import { HouseholdService } from './service/household/household.service';
import { CardComponent } from './component/helper/card/card.component';
import { CreateHouseholdComponent } from './component/household/create-household/create-household.component';

import { EditHouseholdComponent } from './component/household/edit-household/edit-household.component';
import { ViewHouseholdComponent } from './component/household/view-household/view-household.component';
import { PagingHouseholdComponent } from './component/household/paging-household/paging-household.component';

 
import { ToastrModule } from 'ngx-toastr';
import { PagingBeneficiaryComponent } from './component/beneficiary/paging-beneficiary/paging-beneficiary.component';
import { SimplepagingBeneficiaryComponent } from './component/beneficiary/simplepaging-beneficiary/simplepaging-beneficiary.component';


//import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
//var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    BodyComponent,
    DashboardComponent, 
    PartnerComponent,
    SiteComponent,
    ReportComponent,
    CardComponent, CreateHouseholdComponent, EditHouseholdComponent, ViewHouseholdComponent, PagingHouseholdComponent, PagingBeneficiaryComponent, SimplepagingBeneficiaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,

    BrowserAnimationsModule,
    

    ReactiveFormsModule,

    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
  

    HttpClientModule,

    ToastrModule
  ],
  providers: [HouseholdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
