import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { householdDTO } from 'src/app/interface/household/household.model';
import { HouseholdService } from 'src/app/service/household/household.service';
import { dropdown } from '../../../interface/dto/dropdown'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-household',
  templateUrl: './create-household.component.html',
  styleUrls: ['./create-household.component.css']
})
export class CreateHouseholdComponent implements OnInit {

  constructor(private householdService: HouseholdService, private fb: FormBuilder) { }

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


    console.log(".modelForm.value", this.modelForm.value);
    console.log("JSON.stringify", JSON.stringify(this.modelForm.value));




    /* {
    
      "name":"Nome",
      "address":"Nome",
      "otherFamilyOriginRef":"Diária",
      "neighborhoodName":"Vizinhança",
      "block":"2",
      "familyPhoneNumber":"872202323",
      "closePlaceToHome":"Lugar perto de casa",
      
      "partnerId":7,
      "familyHeadId":6,
      "familyOriginRefId":6 
       
      } */


    /*     this.householdService.create(JSON.stringify(this.modelForm.value)).subscribe(
          (response: householdDTO) => {
    
            console.log("onCreate", this.householdService)
    
          },
          (error: HttpErrorResponse) => {
            console.log("erro in HouseholdComponent.onCreate()", error.message)
          }
        ) */
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

  ngOnInit(): void {
    this.readPartners();
    this.readFamilyOriginRef();
    this.readFamilyHead();
  }

}
