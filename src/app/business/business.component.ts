import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BusinessService } from '../service/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  business : any[];
  currentNewsToShow: any[];
  count:number;
  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.businessService.getBusiness().subscribe(data=>{
      this.business = data.articles;
      this.count = this.business.length;
      this.currentNewsToShow = this.business;
    })
  }
  onPageChange($event:any) {
    this.currentNewsToShow =  this.business.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
  }
  readonly testForm = new FormGroup({
    testValue: new FormControl(``),
  });

  text:string ="";

}
