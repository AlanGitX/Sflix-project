import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';




@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.css']
})
export class ComedyComponent {

  Allclass:any={}
  comedy:any=[]
  instant:any=[]
  baseUrl = "https://image.tmdb.org/t/p/original/"
  constructor(private http: HttpClient,private api:ApiService) {}

  ngOnInit(): void {
    this.api.getalldata().subscribe((result:any)=>{
      this.Allclass = result.products['0']
      this.comedy=this.Allclass.Comedy
      console.log(this.comedy)


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
