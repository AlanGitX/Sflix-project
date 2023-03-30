import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {
  Allclass:any={}
  action:any=[]
  instantaction:any=[]

  baseUrl = "https://image.tmdb.org/t/p/original/"
  constructor(private http: HttpClient,private api:ApiService) {}

  ngOnInit(): void {
    this.api.getalldata().subscribe((result:any)=>{
      this.Allclass = result.products['0']
      this.action=this.Allclass.Action
      console.log(this.action)


    })
  }
  Imageclicked(com:any){
    console.log(com);
    this.instantaction=com
    this.api.addItems(com).subscribe((result:any)=>{
      console.log(result);      
    })

    this.api.findonedata(com.id).subscribe((result:any)=>{
      console.log(result.product)
      this.instantaction=result.product
    })

  }

}
