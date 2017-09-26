import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {
  products: any[] = [];
  products_filter: any[] = [];
  loadingP: boolean = true;

  constructor(private http: Http) {
    this.loadingProducts();
  }

public searchProduct(termino: string) {

    if (this.products.length === 0) {
      this.loadingProducts()
      .then(() => {
        this.filterProduct(termino);
      });
    } else {
      this.filterProduct(termino);
    }
  }

private filterProduct(termino: string) {
    this.products_filter = [];

    termino.toLowerCase();

    this.products.forEach(prod => {
      if (prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0) {
        this.products_filter.push(prod);
      }
    })
  }

public loadingItemByID(cod: string) {
    return this.http.get(`https://portafolioangular2.firebaseio.com/productos/${cod}.json`)
  }

public loadingProducts() {
    this.loadingP = true;
    let promise = new Promise((resolve, reject) => {
      this.http.get('https://portafolioangular2.firebaseio.com/productos_idx.json')
        .subscribe(res => {
          this.products = res.json()
          this.loadingP = false;
          resolve();
        });
    });
    return promise;
  }
}
