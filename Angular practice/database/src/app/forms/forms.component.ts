import { Component } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  show:boolean=false;
  data = new Data("","",null,null,"","",null,false);

  print()
  {
    this.show=true;
    console.log(this.data); 
  }
}
