import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userObject;
  constructor(private userService: UserService,public router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params && (params.id)) {
        this.GetUserDataById(params.id);
      }
    });
  }
  GetUserDataById(id) {
    this.userService.getUserById(id).subscribe((data: any) => {
      this.userObject = data.data;
    },
      (err: HttpErrorResponse) => {
      });
  }
}
