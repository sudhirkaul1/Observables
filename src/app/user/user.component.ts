import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { userService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id?: number;
  constructor(private route: ActivatedRoute,
              private userService: userService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params)=> {
        this.id = +param['id'];
      });
  }

  onActivate(){
      this.userService.activatedEmitter.next(true);
  }

}
