import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  userData: any = [];
  constructor(private userService: UserService,public router: Router) { }

  ngOnInit() {
    this.GetUserListData();
  }

  GetUserListData() {
    this.userService.getUserList().subscribe((data: any) => {
      this.userData = data.data;
    },
      (err: HttpErrorResponse) => {
      });
  }

  openUserPage(id) {

    this.router.navigate(['/user'] ,{ queryParams: { id: id } });
  }

}
