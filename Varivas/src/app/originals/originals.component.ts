import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-originals',
  templateUrl: './originals.component.html',
  styleUrls: ['./originals.component.css'],
})
export class OriginalsComponent {
  Allclass: any = {};
  originals: any = [];
  instantorg: any = {};

  baseUrl = 'https://image.tmdb.org/t/p/original/';
  constructor(private http: HttpClient, private api: ApiService) {}

  ngOnInit(): void {
    this.api.getalldata().subscribe((result: any) => {
      this.Allclass = result.products['0'];
      console.log(result.products['0']);

      this.originals = this.Allclass.Originals;
      console.log(this.originals);
    });
  }
  Imageclicked(com: any) {
    this.instantorg = com
    console.log(this.instantorg);
    this.api.addItems(com).subscribe((result: any) => {
      console.log(result);
    });
  }
}
