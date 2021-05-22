import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {

  username : string;
  password : string;
  currentvalue='';

    login(value)
    {
     console.warn(value);
     this.currentvalue=value;
    }

  

}
