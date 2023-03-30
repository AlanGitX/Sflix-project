import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent {
  Allclass:any={}
  Trend:any=[]
  instant:any=[]
  i:any=0;

  baseUrl = "https://image.tmdb.org/t/p/original/"
  constructor(private http: HttpClient,private api:ApiService) {}

  ngOnInit(): void {
    this.api.getalldata().subscribe((result:any)=>{
      this.Allclass = result.products['0']
      this.Trend=this.Allclass.Trending
      console.log(this.Trend[this.i])
      this.instant = this.Trend[this.i]



    })
  }
  incre(){
    if(this.i<=5){
      this.i = this.i+1
      this.instant = this.Trend[this.i]

    }
    else{
      this.i=5
    }
  }
  decre(){
    if(this.i>=1){
      this.i = this.i-1
      this.instant = this.Trend[this.i]

    }
    else{
      this.i=1
    }
  }
}
