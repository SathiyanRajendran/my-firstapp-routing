import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, of, Subscription, take } from 'rxjs';
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  providers:[MathsService]
})
export class AboutmeComponent implements OnInit,OnDestroy {
 myDestroy:Subscription | undefined

  constructor(public _maths:MathsService) { }

  Increase2(){
    this._maths.addOne();
  }
  ngOnInit(): void {
  //   const numbers$=interval(1000).pipe(take(25));

  // this.myDestroy=numbers$.subscribe(sub=>{
  //   console.log(sub)
  // });
  const of$=of(1,2,3,4,5,6,7,8,9,10)
  .pipe(filter(f=>f%2==0),map(m=>m*1000));
  of$.subscribe(sub=>{
    console.log(sub);
  });
  }
  ngOnDestroy(): void {
    this.myDestroy?.unsubscribe()
  }

}
