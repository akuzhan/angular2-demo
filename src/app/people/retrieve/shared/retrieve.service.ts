import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Http } from "@angular/http";

@Injectable()
export class RetrieveService {

private peopleSearchedSource = new Subject<any>();
peopleSearched$ = this.peopleSearchedSource.asObservable();

  constructor(private http: Http) { }

  public search(searchTerm)
  {
    this.http.get('http://swapi.co/api/people/'+searchTerm).subscribe(result=>{
    this.peopleSearchedSource.next(result.json());
    });
  }

}
