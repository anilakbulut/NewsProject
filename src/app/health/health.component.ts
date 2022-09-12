import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HealthService } from '../service/health.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  health : any[];
  currentNewsToShow: any[];
  count:number;
  constructor(private healthService: HealthService) { }

  ngOnInit(): void {
    this.healthService.getHealth().subscribe(data=>{
      this.health = data.articles;
      this.count = this.health.length;
      this.currentNewsToShow = this.health;
    })
  }
  onPageChange($event:any) {
    this.currentNewsToShow =  this.health.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
  }

  readonly testForm = new FormGroup({
    testValue: new FormControl(``),
  });

  text:string ="";

}
