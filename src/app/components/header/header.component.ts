import { Component } from '@angular/core';
import {InfoService} from '../../service/info.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent  {
  constructor(public _infoS: InfoService){

  }


}
