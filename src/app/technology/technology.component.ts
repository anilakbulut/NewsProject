import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TechnologyService } from '../service/technology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  technology : any[];
  currentItemsToShow: any[];
  count:number;
  constructor(private technologyService: TechnologyService) { }

  ngOnInit(): void {
    this.technologyService.getTechnology().subscribe(data=>{
      this.technology = data.articles;
      this.count = this.technology.length;
      this.currentItemsToShow = this.technology;
    })
    
    
  }
  onPageChange($event:any) {
    this.currentItemsToShow =  this.technology.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
  }
  readonly testForm = new FormGroup({
    testValue: new FormControl(``),
  });

  text:string ="";

}
