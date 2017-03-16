import { RetrieveComponent } from './retrieve/retrieve.component';
import { NgModule } from '@angular/core';
import{ RouterModule, Routes} from "@angular/router"

const peopleRoutes: Routes = [
  { 
    path: '', 
    component: RetrieveComponent 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(peopleRoutes)
  ],
  exports:
  [
    RouterModule
  ],
  providers:[]
})
export class PeopleRoutingModule { }
