import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any = { };

  constructor(public accountService:AccountService,private router:Router,private toastr:ToastrService) {}

  ngOnInit(): void {
    this.router.navigateByUrl
  }
  
  login(){
    this.accountService.login(this.model).subscribe({
      next:_ => this.router.navigateByUrl('/members')
    })
  }

  logout(){
    this.router.navigateByUrl('/');
    this.accountService.logout();
  }
}
