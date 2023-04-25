import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
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
}
