import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('cucumber', 6),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
    console.log('hemlo');
  }

  addMultipleInredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);

    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
