import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { householdDTO } from 'src/app/interface/household.model';
import { HouseholdService } from 'src/app/service/household.service';

@Component({
  selector: 'app-household',
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.css']
})
export class HouseholdComponent implements OnInit {

  constructor(private householdService: HouseholdService, private modalService: NgbModal) { }

  public models: householdDTO[] = [];

  Read(): void {
    this.householdService.read().subscribe(
      (response: householdDTO[]) => {

        this.models = response;
        console.log("Data 0", this.models);
      },
      (error: HttpErrorResponse) => {
        console.log("erro in HouseholdComponent.Read()", error.message)
      }
    )

    console.log("Data 1", this.models);
  }

  ngOnInit() {

    this.Read(); 
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

}
