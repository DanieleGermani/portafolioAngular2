import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../service/products.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html'

})
export class PortfolioItemComponent {
  product:any = undefined;
  cod:any= undefined;

  constructor(public route:ActivatedRoute, public _productS:ProductsService) {



      route.params.subscribe(params=>{

          _productS.loadingItemByID(params['id'])
            .subscribe(res=>{
              this.cod = params['id'];
              this.product= res.json();
              //console.log(this.product);

            })
      })


   }



}
