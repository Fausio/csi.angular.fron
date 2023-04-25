import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { dropdown } from 'src/app/interface/dto/dropdown';
import { householdDTO } from 'src/app/interface/household/household.model';
import { HouseholdService } from 'src/app/service/household/household.service';

@Component({
  selector: 'app-edit-household',
  templateUrl: './edit-household.component.html',
  styleUrls: ['./edit-household.component.css']
})
export class EditHouseholdComponent implements OnInit{

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



  onEdit(): void {



    this.householdService.create(JSON.stringify(this.modelForm.value)).subscribe(
      (response: householdDTO) => {

        // this.navigateToEdit(response.id);

      },
      (error: HttpErrorResponse) => {
        console.log("erro in HouseholdComponent.onCreate()", error.message)
      }
    )


  }


  ngOnInit(): void {
    this.readPartners();
    this.readFamilyOriginRef();
    this.readFamilyHead();
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
        console.log("erro in HouseholdComponent.onKey()", response)
      },
      (error: HttpErrorResponse) => {
        console.log("erro in HouseholdComponent.onKey()", error.message)
      }
    )
  }

}
