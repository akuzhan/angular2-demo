import { RetrieveService } from './../shared/retrieve.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-retrieve-result',
  templateUrl: './retrieve-result.component.html',
  styleUrls: ['./retrieve-result.component.css']
})
export class RetrieveResultComponent implements OnInit {
subscription: Subscription;
private peopleDetails:any;
  constructor(private retrieveService : RetrieveService) 
  {
    this.subscription = retrieveService.peopleSearched$.subscribe(
      data=>{
        //this.peopleDetails =data;
        this.setPersonalDetails(data);
      }
    );
}
private setPersonalDetails(data : any)
{
  debugger;
this.peopleDetails = data.name;
}

  ngOnInit() {
  }
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}
