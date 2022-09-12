import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SportsService } from '../service/sports.service';

@Component({
  selector: 'Sports',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {
  sports : any[];
  currentItemsToShow: any[];
  count:number;
  constructor(private sportsService: SportsService) { }

  ngOnInit(): void {
    this.sportsService.getSports().subscribe(data=>{
      this.sports = data.articles;
      this.count = this.sports.length;
      this.currentItemsToShow = this.sports;
    })
    
    
  }
  onPageChange($event:any) {
    this.currentItemsToShow =  this.sports.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
  }
  
  readonly testForm = new FormGroup({
    testValue: new FormControl(``),
  });

  text:string ="";

}
