import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable()
export class ProductsService {
  products:any[]=[];
  loading:boolean = true;


  constructor(private http:Http) {
this.loadingProducts();

    }

public loadingProducts(){

  this.loading = true;

  this.http.get('https://portafolioangular2.firebaseio.com/productos_idx.json')
  .subscribe(res=>{
    this.products = res.json()
    this.loading = false;

  });
}



}
