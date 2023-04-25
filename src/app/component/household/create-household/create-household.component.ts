import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { householdDTO } from 'src/app/interface/household/household.model';
import { HouseholdService } from 'src/app/service/household/household.service';
import { dropdown } from '../../../interface/dto/dropdown'
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-household',
  templateUrl: './create-household.component.html',
  styleUrls: ['./create-household.component.css']
})
export class CreateHouseholdComponent implements OnInit {

  constructor(private householdService: HouseholdService, private fb: FormBuilder, private route: Router) { }

  public model: householdDTO;

  public readFamilyHeadDropdown: dropdown[] = [];
  public readFamilyOriginRefDropdown: dropdown[] = [];
  public readPartnersDropdown: dropdown[] = [];

  modelForm = this.fb.group({

    name: [''],
    address: [''],
    neighborhoodName: [''],
    block: [''],
    familyPhoneNumber: [''],
    closePlaceToHome: [''],

    otherFamilyOriginRef: [''],

    partnerId: [0,],
    familyHeadId: [0],
    familyOriginRefId: [0],
  });


  onCreate(): void {

 
 
    this.householdService.create(JSON.stringify(this.modelForm.value)).subscribe(
      (response: householdDTO) => {

        this.navigateToEdit(response.id);

      },
      (error: HttpErrorResponse) => {
        console.log("erro in HouseholdComponent.onCreate()", error.message)
      }
    )


  }


  navigateToEdit(id: number) {
    this.route.navigateByUrl('/household-edit/' + id);
  }


  readFamilyHead(): void {
    this.householdService.readFamilyHead().subscribe(
      (response: dropdown[]) => {

        this.readFamilyHeadDropdown = response;

      },
      (error: HttpErrorResponse) => {
        console.log("erro in HouseholdComponent.onKey()", error.message)
      }
    )
  }

  readFamilyOriginRef(): void {
    this.householdService.readFamilyOriginRef().subscribe(
      (response: dropdown[]) => {

        this.readFamilyOriginRefDropdown = response;

      },
      (error: HttpErrorResponse) => {
        console.log("erro in HouseholdComponent.onKey()", error.message)
      }
    )
  }

  readPartners(): void {
    this.householdService.readPartners().subscribe(
      (response: dropdown[]) => {

        this.readPartnersDropdown = response;
        
      },
      (error: HttpErrorResponse) => {
        console.log("erro in HouseholdComponent.onKey()", error.message)
      }
    )
  }

  ngOnInit(): void {
    this.readPartners();
    this.readFamilyOriginRef();
    this.readFamilyHead();
  }

}
