import { Component, OnInit } from '@angular/core';
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  providers:[MathsService]
})
export class AboutmeComponent implements OnInit {

  constructor(public _maths:MathsService) { }

  Increase2(){
    this._maths.addOne();
  }
  ngOnInit(): void {
  }

}
