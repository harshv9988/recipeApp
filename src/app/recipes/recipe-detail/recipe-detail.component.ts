import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shoppinglistService: ShoppingListService) {}

  ngOnInit(): void {}

  addOnShoppingList(): void {
    this.shoppinglistService.addMultipleInredients(this.recipe.ingredients);
  }
}
