import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComRoutingModule } from './a-com-routing.module';
import { AComComponent } from './a-com.component';

@NgModule({
  declarations: [AComComponent],
  imports: [
    AComRoutingModule,
    CommonModule
  ]
})
export class AComModule { }
