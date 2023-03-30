import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit{
  Allclass:any={}
  top:any=[]
  instant:any=[]

  baseUrl = "https://image.tmdb.org/t/p/original/"
  constructor(private http: HttpClient,private api:ApiService) {}

  ngOnInit(): void {
    this.api.getalldata().subscribe((result:any)=>{
      this.Allclass = result.products['0']
      this.top=this.Allclass.Top
      console.log(this.top)


    })
  }

  Imageclicked(com:any){
    console.log(com);
    this.instant=com
    this.api.addItems(com).subscribe((result:any)=>{
      console.log(result);
      
    })

  }

}
