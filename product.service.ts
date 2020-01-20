import { Injectable } from '@angular/core';
import { Product } from './product';


@Injectable()
export class ProductService {
   products: Product[]

   constructor() {
   }

   getAllProducts(): Product[] {
      this.products=[
         {
               'name' : 'boek',
               'brand': 'addidas',
               'description':'boek over addidas',
               'price':2
         },
         {
            'name' : 'schoen',
            'brand': 'addidas',
            'description':'schoen van addidas',
            'price':200
         }
      ]
      return this.products
   }
}
