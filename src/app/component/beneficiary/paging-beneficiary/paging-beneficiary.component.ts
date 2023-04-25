import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { beneficiaryPage } from 'src/app/interface/beneficiary/beneficiaryPage';
import { BeneficiaryService } from 'src/app/service/beneficiary/beneficiary.service';

@Component({
  selector: 'app-paging-beneficiary',
  templateUrl: './paging-beneficiary.component.html',
  styleUrls: ['./paging-beneficiary.component.css']
})
export class PagingBeneficiaryComponent implements OnInit{

  constructor(private beneficiaryService: BeneficiaryService) { }
  ngOnInit(): void {
   this.read();
  }


  public models: beneficiaryPage;
  public current: number;
  public searchText: string = '';



  
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


  read(): void {
    this.beneficiaryService.read().subscribe(
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
