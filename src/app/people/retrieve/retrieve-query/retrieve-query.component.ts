import { RetrieveService } from './../shared/retrieve.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retrieve-query',
  templateUrl: './retrieve-query.component.html',
  styleUrls: ['./retrieve-query.component.css']
})
export class RetrieveQueryComponent implements OnInit {

  constructor(private retrieveService :RetrieveService) {

   }
   private search(searchTerm: string)
   {
     this.retrieveService.search(searchTerm);
   }

  ngOnInit() {
  }

}
