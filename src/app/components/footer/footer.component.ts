import { Component } from '@angular/core';
import {InfoService} from '../../service/info.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'

})
export class FooterComponent {

  year:number = new Date().getFullYear();
constructor(public _infoS:InfoService){

}



}
