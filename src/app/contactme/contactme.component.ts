import { Component, OnInit } from '@angular/core';
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {
  myContact='sathiyan@whiteblue.in'
  constructor(public _maths:MathsService) { }

  Increase()
  {
    alert("Hello How are you?")
  }
  ngOnInit(): void {
  }

}
