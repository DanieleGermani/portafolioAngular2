import { Component } from '@angular/core';
import {InfoService} from '../../service/info.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent  {
  constructor(public _infoS: InfoService,
              public router:Router
){

  }
  searchProduct(termino:string){

    this.router.navigate(['/search',termino]);
  }


}
