import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ScienceService } from '../service/science.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent implements OnInit {

  science : any[];
  currentNewsToShow: any[];
  count:number;
  constructor(private scienceService: ScienceService) { }

  ngOnInit(): void {
    this.scienceService.getScience().subscribe(data=>{
      this.science = data.articles;
      console.log(data.articles);
      this.count = this.science.length;
      this.currentNewsToShow = this.science;
    })
  }
  onPageChange($event:any) {
    this.currentNewsToShow =  this.science.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
  }
  readonly testForm = new FormGroup({
    testValue: new FormControl(``),
  });

  text:string ="";
}
