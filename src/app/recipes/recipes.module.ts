import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { recipeRouting } from "./recipeRouting.module";
import { sharedModule } from "../shared/shared.module";

@NgModule({
  declarations : [
     RecipeListComponent,
     RecipeDetailComponent,
     RecipeEditComponent,
     RecipeStartComponent,
     RecipesComponent,
     RecipeItemComponent
  ],

  imports : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    recipeRouting,
    sharedModule
  ]
})

export class recipesModule { }