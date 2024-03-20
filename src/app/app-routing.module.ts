import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { NgModule } from "@angular/core";

const appRoutes : Routes = [
    {path : '', redirectTo:'recipes', pathMatch : "full"},
    {path : 'recipes', component : RecipesComponent},
    {path : 'shopping-list', component : ShoppingListComponent},
    {path : 'not-found', component:ErrorPageComponent, data : {errorMessage : 'Page not found !'}},
    {path : '**', redirectTo:'/not-found'}
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash : true})
    ],
    exports:[RouterModule]
})

export class AppRoutingModule {

}