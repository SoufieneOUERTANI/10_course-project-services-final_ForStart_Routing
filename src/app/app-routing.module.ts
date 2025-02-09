import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { NgModule } from "@angular/core";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes : Routes = [
    {path : '', redirectTo:'recipes', pathMatch : "full"},
    {path : 'recipes', component : RecipesComponent, children :
        [
            {path : '', component : RecipeStartComponent, pathMatch : "full"},
            {path : 'new', component : RecipeEditComponent},
            {path : ':id', component : RecipeDetailComponent},
            {path : ':id/edit', component : RecipeEditComponent},
        ]
    },
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