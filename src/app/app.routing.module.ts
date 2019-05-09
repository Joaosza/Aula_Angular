import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; 
import { HomeComponent } from "./home/home.component";
import { SobreComponent } from "./sobre/sobre.component";
import { RodapeComponent } from "src/rodape/rodape.component";

const routes: Routes = [
    {path: '', component: HomeComponent}
    ,{path: 'sobre', component: SobreComponent}
    ,{path: 'rodape', component: RodapeComponent} 
]

@NgModule({ 
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {  }  