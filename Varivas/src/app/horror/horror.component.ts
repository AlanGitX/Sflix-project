import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.css']
})
export class HorrorComponent {

  Allclass:any={}
  horror:any=[]
  instant:any=[]

  baseUrl = "https://image.tmdb.org/t/p/original/"
  constructor(private http: HttpClient,private api:ApiService) {}

  ngOnInit(): void {
    this.api.getalldata().subscribe((result:any)=>{
      this.Allclass = result.products['0']
      this.horror=this.Allclass.Horror
      console.log(this.horror)


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
