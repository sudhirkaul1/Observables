import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { map , filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private intervalSubscription: Subscription = new Subscription;

  constructor() { }

  ngOnInit(): void {
    // this.intervalSubscription = interval(1000).subscribe(cnt=> {
    //   console.log(cnt);
    // })

   // const customIntervalObservable = Observable.create((observer: {
    const customIntervalObservable = new Observable((observer: Observer<any>) =>
                        // {
                        // next: (arg0: number) => void;
                        // error:(arg0: Error) => string;
                        // complete: () => void;
                        // }
                        // ) =>
                    {
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        if(count === 2){
          observer.complete();
        }
        if(count>3){
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      },1000);
    });

    customIntervalObservable.pipe(
      filter(
        (data) => {
          return data + 1;
        }
      ),
      map(
       (data) => {
        return 'Round ' + (data + 1);
      }))
    //this.intervalSubscription = customIntervalObservable
    .subscribe((data: any)=>{
      console.log(data);
    }, (error: any) =>{
      console.log(error.message);
      alert(error.message);
    }, ()=>{
      console.log('Observable Completed');
    })

  }

  ngOnDestroy(): void {
      this.intervalSubscription.unsubscribe();
  }

}
