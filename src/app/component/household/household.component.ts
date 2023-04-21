import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { householdPage } from 'src/app/interface/HouseholdPage';
import { householdDTO } from 'src/app/interface/household.model';
import { HouseholdService } from 'src/app/service/household.service';

@Component({
  selector: 'app-household',
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.css']
})
export class HouseholdComponent implements OnInit {

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

        console.log(" this.models", this.models);
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

        console.log(" this.models", this.models);
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

    console.log("onKey start")

    this.householdService.search(this.searchText).subscribe(
      (response: householdPage) => {

        console.log("onKey core",response);
        this.models = response;
        this.current = 1;

      },
      (error: HttpErrorResponse) => {
        console.log("erro in HouseholdComponent.onKey()", error.message)
      }
    )

    console.log("onKey end")

  }

}
