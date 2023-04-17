import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HouseholdComponent } from './component/household/household.component';
import { BeneficiaryComponent } from './component/beneficiary/beneficiary.component';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'household', component: HouseholdComponent },
  { path: 'beneficiary', component: BeneficiaryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
