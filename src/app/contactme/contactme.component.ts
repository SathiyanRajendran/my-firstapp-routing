import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {
  myContact='sathiyan@whiteblue.in'
  constructor() { }

  ngOnInit(): void {
  }

}
