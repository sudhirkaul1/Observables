import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { root } from "rxjs/internal-compatibility";

@Injectable({providedIn: 'root'})
export class userService{

  activatedEmitter = new Subject<boolean>();

}
