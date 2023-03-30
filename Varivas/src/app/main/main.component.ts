import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  Allclass:any={}
  top:any=[]
  constructor(private http: HttpClient,private api:ApiService) {}

  ngOnInit(): void {
    this.api.getalldata().subscribe((result:any)=>{
      this.Allclass = result.products['0']
      this.top=this.Allclass.Top
      console.log(this.top)


    })
  }
}
