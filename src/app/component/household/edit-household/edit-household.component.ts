import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { dropdown } from 'src/app/interface/dto/dropdown';
import { householdDTO } from 'src/app/interface/household/household.model';
import { HouseholdService } from 'src/app/service/household/household.service';
import { formatDate } from '@angular/common'

@Component({
  selector: 'app-edit-household',
  templateUrl: './edit-household.component.html',
  styleUrls: ['./edit-household.component.css']
})
export class EditHouseholdComponent implements OnInit {

  constructor(private householdService: HouseholdService, private fb: FormBuilder, private route: Router, private _route: ActivatedRoute) { }



  capabilityForm: FormGroup;

  public model: householdDTO;

  public readFamilyHeadDropdown: dropdown[] = [];
  public readFamilyOriginRefDropdown: dropdown[] = [];
  public readPartnersDropdown: dropdown[] = [];

  modelForm = this.fb.group({

    id: 0,
    guid: [''],
    createdDate: [new Date()],
    updatedDate: [new Date()],


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

  

     this.householdService.update(JSON.stringify(this.modelForm.value)).subscribe(
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


    const prodId = this._route.snapshot.paramMap.get('id');

    this.readHouseholdById(Number(prodId));

  }


  PopulateFormBuilder(dataModel: householdDTO) {
    this.fb.group({
      name: this.fb.control({ value: dataModel.name, disabled: true })
    })
  }


  readHouseholdById(id: number): void {
    this.householdService.readById(id).subscribe(
      (response: householdDTO) => {

        this.modelForm.setValue({

          id: response.id,
          guid: response.guid,
          createdDate: response.createdDate,
          updatedDate: response.updatedDate,

          name: response.name,
          address: response.address,
          block: response.block,
          closePlaceToHome: response.closePlaceToHome,

          familyPhoneNumber: response.familyPhoneNumber,
          neighborhoodName: response.neighborhoodName,
          otherFamilyOriginRef: response.otherFamilyOriginRef,
          partnerId: response.partnerId,
          familyHeadId: response.familyHeadId,
          familyOriginRefId: response.familyOriginRefId,
        });

      },
      (error: HttpErrorResponse) => {
        console.log("erro in readHouseholdById(id: number)", error.message)
      }
    )
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

}
