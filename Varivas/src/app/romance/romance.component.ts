import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrls: ['./romance.component.css']
})
export class RomanceComponent {

  Allclass:any={}
  Roms:any=[]
  instant:any=[]

  baseUrl = "https://image.tmdb.org/t/p/original/"
  constructor(private http: HttpClient,private api:ApiService) {}

  ngOnInit(): void {
    this.api.getalldata().subscribe((result:any)=>{
      this.Allclass = result.products['0']
      this.Roms=this.Allclass.Romance
      console.log(this.Roms)


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
