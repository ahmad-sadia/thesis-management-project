import {NgModule} from '@angular/core';
import {BreadcrumbComponent} from "./components/breadcrumb/breadcrumb.component";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    MDBBootstrapModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    BreadcrumbComponent,
  ],
})


export class SharedModule {
}
