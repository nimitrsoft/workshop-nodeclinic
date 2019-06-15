import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../ShareService';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  customers: any
  customer = {
    name: null,
    code: null,
    _id: null
  }

  pet = {
    customer_id: null,
    name: null,
    remark: null
  }

  constructor(private http: HttpClient, private shareService: ShareService) { }

  ngOnInit() {
    this.loadCustomers()
  }

  loadCustomers() {
    this.http.get(this.shareService.serverPath + '/customerAll').subscribe((res:any)=>{
      this.customers = res  
    });
  }

  chooseCustomer(customer) {
    this.customer = customer
    //console.log(this.customer)
  }

  save() {
    this.pet.customer_id = this.customer._id
//    console.log(this.pet)
    this.http.post(this.shareService.serverPath + '/petSave', this.pet).subscribe((res:any)=>{
      
    });
  }
}
