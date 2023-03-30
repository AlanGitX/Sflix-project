import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  id:any=''
  CurrItem:any=[]
  imageurl:any=''
  videourl:any
  
constructor(private api:ApiService,private http:HttpClient,private route:ActivatedRoute,private sanitizer:DomSanitizer ){
  this.videourl =this.photoURL()
}
  ngOnInit(): void {
    this.route.params.subscribe((result:any)=>{
      console.log(result)
      this.id=result.id
      console.log(this.id)

    })
    this.api.findonedata(this.id).subscribe((data:any)=>{
      this.CurrItem = data.product
      console.log(this.CurrItem)
      this.imageurl = 'https://image.tmdb.org/t/p/original/' + this.CurrItem.backdrop_path
      console.log(this.imageurl);
      this.videourl =this.photoURL()
      console.log(this.videourl);
      
      

    })
  }
  photoURL() {
    return this.sanitizer.bypassSecurityTrustUrl(this.CurrItem.video);
  }


}
