import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EntertainmentService } from '../service/entertainment.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {

  entertainment : any[];
  currentNewsToShow: any[];
  count:number;
  constructor(private entertainmentService: EntertainmentService) { }

  ngOnInit(): void {
    this.entertainmentService.getEntertainment().subscribe(data=>{
      this.entertainment = data.articles;
      this.count = this.entertainment.length;
      this.currentNewsToShow = this.entertainment;
    })
  }
  onPageChange($event:any) {
    this.currentNewsToShow =  this.entertainment.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
  }
  readonly testForm = new FormGroup({
    testValue: new FormControl(``),
  });

  text:string ="";

}
