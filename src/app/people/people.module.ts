import { RetrieveService } from './retrieve/shared/retrieve.service';
import { PeopleRoutingModule } from './people-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { RetrieveQueryComponent } from './retrieve/retrieve-query/retrieve-query.component';
import { RetrieveResultComponent } from './retrieve/retrieve-result/retrieve-result.component';

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  declarations: [RetrieveComponent, RetrieveQueryComponent, RetrieveResultComponent],
  providers: [RetrieveService]
})
export class PeopleModule { }
