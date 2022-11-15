import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
     AngularLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
  constructor(private router: Router) { }
  gotoContactMe(){
    this.router.navigate(['/contactme'],{skipLocationChange:true});
  }

  ngOnInit(): void {
  }

}
