import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  dashboard() {
    this.router.navigate([''])
  }

  clinic() {
    this.router.navigate(['clinic']);
  }

  customer() {
    this.router.navigate(['customer'])
  }
  
  pet() {
    this.router.navigate(['pet'])
  }
  
  treatment() {
    this.router.navigate(['treatment'])
  }
  
  medicine() {
    this.router.navigate(['medicine'])
  }
  
  report() {
    this.router.navigate(['report'])
  }


}
