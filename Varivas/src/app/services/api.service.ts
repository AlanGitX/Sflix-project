import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getalldata(){
     return this.http.get('http://localhost:8000/all-items')
  }

  findonedata(id:any){
    return this.http.get('http://localhost:8000/view/'+id)
  }

  
  deleteData(){
    return this.http.delete('http://localhost:8000/delete-item')
  }

  addItems(item:any){
    return this.http.post('http://localhost:8000/add-item',item)
  }




}
