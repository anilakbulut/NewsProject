import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GeneralService } from '../service/general.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  general : any[];
  currentNewsToShow: any[];
  count:number;
  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
    this.generalService.getGeneral().subscribe(data=>{
      this.general = data.articles;
      this.count = this.general.length;
      this.currentNewsToShow = this.general;
    })
  }
  onPageChange($event:any) {
    this.currentNewsToShow =  this.general.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
  }
  readonly testForm = new FormGroup({
    testValue: new FormControl(``),
  });
  text:string ="";

}
