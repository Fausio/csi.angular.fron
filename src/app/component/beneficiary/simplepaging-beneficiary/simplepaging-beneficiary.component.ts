import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { beneficiaryPage } from 'src/app/interface/beneficiary/beneficiaryPage';
import { BeneficiaryService } from 'src/app/service/beneficiary/beneficiary.service';

@Component({
  selector: 'app-simplepaging-beneficiary',
  templateUrl: './simplepaging-beneficiary.component.html',
  styleUrls: ['./simplepaging-beneficiary.component.css']
})
export class SimplepagingBeneficiaryComponent implements OnInit {

  constructor(private beneficiaryService: BeneficiaryService) { }

  @Input() householdId: number;
  public models: beneficiaryPage;
  public current: number;
  public searchText: string = '';


  ngOnInit(): void {
  this.getByHouseholdId(this.householdId) 


  }






  getByHouseholdId(householdId:number): void {
    this.beneficiaryService.getByHouseholdId(householdId).subscribe(
      (response: beneficiaryPage) => {


        console.log("xxxxxxxxxxxxx",response)
        this.models = response;
        this.current = 1;
      },
      (error: HttpErrorResponse) => {
        console.log("erro in ", error.message)
      }
    )

  }

  public GotoPage(pageNumber: number): void {

    this.beneficiaryService.paging(pageNumber).subscribe(
      (response: beneficiaryPage) => {

        this.models = response;
        this.current = pageNumber

      },
      (error: HttpErrorResponse) => {
        console.log("erro in HouseholdComponent.paging()", error.message)
      }
    )

  }


  public NextPage(): void {

    this.current = (this.current + 1)
    this.GotoPage(this.current)
  }

  public BackPage(): void {

    this.current = (this.current - 1)
    this.GotoPage(this.current)
  }



  onKey(event: Event): void {

    this.beneficiaryService.search(this.searchText).subscribe(
      (response: beneficiaryPage) => {

        this.models = response;
        this.current = 1;

      },
      (error: HttpErrorResponse) => {
        console.log("erro", error.message)
      }
    )
  }




  OnCreateBen(model: NgForm): void {

    /*     this.EmployeeService.Create(model.value).subscribe(
          (response: beneficiaryDTO) => {
            this.Read();
          }, (error: HttpErrorResponse) => {
            alert(error.message)
          }
        ) */
    
        document.getElementById('closeAddEmployeeModal')?.click();
      }


      public openModal(model?: any, mode?: String) {

        const mainDiv = document.getElementById("employeesRow"); // will receive the btn of the modal
    
        const btn = document.createElement('button'); // btn of the modal
        btn.type = 'button' // to remve submit event (to be a simple btn)
        btn.style.display = 'none'; // hide de btn
        btn.setAttribute('data-toggle', 'modal') // necessary for pop up works
    
        if (model != null) {
         //  this.SelectedEmployee = model;
        }
    
        if (mode === 'createBen') {
          btn.setAttribute('data-target', '#createBen');
        }
        if (mode === 'updateEmployee') {
          btn.setAttribute('data-target', '#updateEmployee');
        }
        if (mode === 'deleteEmployee') {
          btn.setAttribute('data-target', '#deleteEmployee');
        }
    
        mainDiv?.appendChild(btn);
        btn.click();
      }

}
