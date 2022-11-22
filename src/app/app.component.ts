import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomNumber:number | undefined;
public onNumberGenerated(randomNumber: number) {
this.randomNumber=randomNumber;
}
  title = 'my-firstapp-routing';

subjectParent:object=[
  {id:1, name:'Tamil'},
  {id:2, name:'English'},
  {id:3, name:'Maths'},
  {id:4, name:'Science'},
  {id:5, name:'Social'}
];
}
