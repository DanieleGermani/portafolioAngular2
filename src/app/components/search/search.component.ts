import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',

})
export class SearchComponent {

  termino: string = undefined;

  constructor(private route: ActivatedRoute,
    private _productS: ProductsService
  ) {
    route.params.subscribe(params => {

      this.termino = params['termino'];

      _productS.searchProduct(this.termino)

    })


  }


}
