import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../ShareService';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  code: string
  name: string
  email: string
  tel: string
  line_id: string
  address: string
  _id: string

  customers: any

  constructor(
    private http: HttpClient,
    private shareService: ShareService
  ) { }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.http.get(this.shareService.serverPath + '/customerAll').subscribe((res:any)=>{
      this.customers = res  
      //console.log(res)    
    });
  }
  save() {
    if (confirm("ยืนยันการบันทึก")) {
      var param = {
        code: this.code,
        name: this.name,
        email: this.email,
        tel: this.tel,
        line_id: this.line_id,
        address: this.address,
        _id: null
      }
      var path = this.shareService.serverPath + '/customerSave';
      if(this._id != null){
        path = this.shareService.serverPath + '/customerUpdate';
        param._id = this._id
      }
      this.http.post(path, param).subscribe((res: any) => {
        alert('save success');
        this.loadData()
        this._id = null  //save เสร็จแล้วต้องเคลียร์ค่า _id
      });
    }
  }

  customerDelete(item) {
    if (confirm("ยืนยันการลบ ?")){
      //console.log(item)
      var param = {
        _id: item._id
      }
      var path = this.shareService.serverPath + '/customerDelete';
      this.http.post(path,param).subscribe((res:any)=>{
        alert("ลบ รายการแล้ว!")
        this.loadData()
      });
    }    
  }

  customerInfo(item) {
    this.code = item.code
    this.name = item.name
    this.email = item.email
    this.tel = item.tel
    this.address = item.address
    this.line_id = item.line_id
    this._id = item._id
  }
}