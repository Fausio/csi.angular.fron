import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HouseholdComponent } from './component/household/household.component';
import { BeneficiaryComponent } from './component/beneficiary/beneficiary.component';
import { PartnerComponent } from './component/partner/partner.component';
import { ReportComponent } from './component/report/report.component';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'household', component: HouseholdComponent },
  { path: 'beneficiary', component: BeneficiaryComponent },
  { path: 'report', component: ReportComponent },
  { path: 'Partner', component: PartnerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
