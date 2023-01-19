import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";
import { DetallesComponent } from "./detalles/detalles.component";

import { HomeComponent } from "./home/home.component";

const routes : Routes = [
    {path : "" , component : HomeComponent},
    {path : "detalles/:id" , component : DetallesComponent}
]

 @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
 })

 export class AppRoutingModule{}