import { PeopleModule } from './people/people.module';
import { RetrieveComponent } from './people/retrieve/retrieve.component';
import { NgModule } from '@angular/core';
import{ RouterModule, Routes} from "@angular/router"

const appRoutes: Routes = [
  { 
    path: 'people', 
    loadChildren :'app/people/people.module#PeopleModule',
    data : {preload : true}
  },
  { path: '',
    redirectTo: '/people',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    // other imports here
  ],
  exports:
  [
    RouterModule
  ],
  providers:[]
})
export class AppRoutingModule { }
