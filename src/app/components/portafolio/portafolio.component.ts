import { Component} from '@angular/core';
import{ProductsService} from '../../service/products.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html'

})
export class PortafolioComponent  {

  constructor(
    private _productS:ProductsService 
  ) { }


}
