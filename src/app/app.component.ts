import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { subscribeOn } from 'rxjs-compat/operator/subscribeOn';
import { userService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSubs: Subscription = new Subscription;
  constructor(private userService: userService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activatedSubs = this.userService.activatedEmitter.subscribe(
      (didActivate) => {
        this.userActivated = didActivate;
      }
    )
  }

  ngOnDestroy(): void {
      this.activatedSubs.unsubscribe();
  }

}
