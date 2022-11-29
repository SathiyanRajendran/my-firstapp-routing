import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myDestroy:Subscription | undefined;
     AngularLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
  constructor(private router: Router) { }
  gotoContactMe(){
    this.router.navigate(['/contactme'],{skipLocationChange:true});
  }

  ngOnInit(): void {
    const myObj$=new Observable(obs=>{
      console.log('Start Observable');
      obs.next('100');
      obs.next('200');
      obs.next('300');
      //obs.complete();
      //obs.error('Not working');
      setTimeout(
        ()=>{
          obs.next('400');
        },2000);
      
      obs.next('500');
      console.log('End Observable');
    });


    this.myDestroy=myObj$.subscribe(sub=>{
      console.log('First',sub);
    },
    error=>{
      console.log("Error:",error);
    },
    ()=>{
      console.log("Completed");
    }
    );

    // myObj$.subscribe(sub=>{
    //   console.log('Second',sub);
    // });
    this.myDestroy.unsubscribe();

  }
  @Input() subjectChild: any;
  @Output() private numberGen1=new EventEmitter<number>();
  public genNumber(){
    const randomNumber=Math.random();
    this.numberGen1.emit(randomNumber);
  }
}
