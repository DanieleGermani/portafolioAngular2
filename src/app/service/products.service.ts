import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {
  products: any[] = [];
  loadingP: boolean = true;


  constructor(private http: Http) {
    this.loadingProducts();

  }

  public loadingItemByID(cod:string){

    return this.http.get(`https://portafolioangular2.firebaseio.com/productos/${cod}.json`)
    

  }

  public loadingProducts() {

    this.loadingP = true;

    this.http.get('https://portafolioangular2.firebaseio.com/productos_idx.json')
      .subscribe(res => {

          this.products = res.json()
          this.loadingP = false;


      });
  }



}
