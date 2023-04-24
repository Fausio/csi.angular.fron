import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule,Validators   } from '@angular/forms';
import { householdDTO } from 'src/app/interface/household/household.model';


@Component({
  selector: 'app-create-household',
  templateUrl: './create-household.component.html',
  styleUrls: ['./create-household.component.css']
})
export class CreateHouseholdComponent {

  constructor(private fb: FormBuilder) { }

  public model: householdDTO;
  

  modelForm = this.fb.group({
      
    name:  [''], 
    address: [''], 
    NeighborhoodName: [''], 
    Block:  [''], 
    FamilyPhoneNumber:  [''], 
    ClosePlaceToHome: [''], 


    partnerId: [0],
    FamilyHeadId: [0],
    FamilyOriginRefId: [0],


    
  });


  onCreate():void{

    console.log("submitInfo", this.modelForm.value)
    console.log("JSON.stringify", JSON.stringify(this.modelForm.value));
  }
 

  get name() {
    return this.modelForm.get('name');
  }

}
