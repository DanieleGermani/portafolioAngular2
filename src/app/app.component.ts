import { Component } from '@angular/core';
import{InfoService} from './service/info.service';
import{ProductsService} from './service/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public infoService:InfoService,
              public _productS:ProductsService  ){

              }
}
