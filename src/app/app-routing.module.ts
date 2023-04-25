import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';  
import { PartnerComponent } from './component/partner/partner.component';
import { ReportComponent } from './component/report/report.component';
import { CreateHouseholdComponent } from './component/household/create-household/create-household.component';
import { EditHouseholdComponent } from './component/household/edit-household/edit-household.component';
import { ViewHouseholdComponent } from './component/household/view-household/view-household.component';
import { PagingHouseholdComponent } from './component/household/paging-household/paging-household.component';
import { PagingBeneficiaryComponent } from './component/beneficiary/paging-beneficiary/paging-beneficiary.component';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'beneficiary-paging', component: PagingBeneficiaryComponent },
  { path: 'report', component: ReportComponent },
  { path: 'Partner', component: PartnerComponent },

  { path: 'household-paging', component: PagingHouseholdComponent }, 
  { path: 'household-create', component: CreateHouseholdComponent },
  { path: 'household-edit/:id', component: EditHouseholdComponent },
  { path: 'household-view', component: ViewHouseholdComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
