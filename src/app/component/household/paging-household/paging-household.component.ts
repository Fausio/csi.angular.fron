import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { householdPage } from 'src/app/interface/household/householdPage';
import { householdDTO } from 'src/app/interface/household/household.model';
import { HouseholdService } from 'src/app/service/household/household.service';

@Component({
  selector: 'app-paging-household',
  templateUrl: './paging-household.component.html',
  styleUrls: ['./paging-household.component.css']
})
export class PagingHouseholdComponent implements OnInit {

  constructor(private householdService: HouseholdService, private modalService: NgbModal) { }

  public models: householdPage;
  public current: number
  public dashboardLink: string = 'dashboard';
  public activeCurrentPage: string = 'page-item mr-2';
  public searchText: string = '';


  Read(): void {
    this.householdService.read().subscribe(
      (response: householdPage) => {

        this.models = response;
        this.current = 1; 
      },
      (error: HttpErrorResponse) => {
        console.log("erro in HouseholdComponent.Read()", error.message)
      }
    )

  }

  public GotoPage(pageNumber: number): void {



    this.householdService.paging(pageNumber).subscribe(
      (response: householdPage) => {

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


  ngOnInit() {
    this.Read();
  }


  onKey(event: Event): void {



    this.householdService.search(this.searchText).subscribe(
      (response: householdPage) => {

        this.models = response;
        this.current = 1;

      },
      (error: HttpErrorResponse) => {
        console.log("erro in HouseholdComponent.onKey()", error.message)
      }
    ) 
  }

}
