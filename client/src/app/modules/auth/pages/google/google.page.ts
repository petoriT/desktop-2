import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-google',
  templateUrl: './google.page.html',
  styleUrls: ['./google.page.scss'],
})
export class GooglePage implements OnInit {

  id;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      if (this.id != null ){
        localStorage.setItem('token', this.id);
        this.router.navigate(['/user/landing']);
      }else{
        console.log('You are not google Authenticated')
      }
    })
  }

}
