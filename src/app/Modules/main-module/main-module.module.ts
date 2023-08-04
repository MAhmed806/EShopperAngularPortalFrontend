import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { mainroutingmodule } from './main-routing.module';
@NgModule({
  declarations: [Component1Component,
    Component2Component,Component3Component],
  imports: [
    CommonModule,
    mainroutingmodule
  ],
  exports:[]
})
export class MainModuleModule {
 }