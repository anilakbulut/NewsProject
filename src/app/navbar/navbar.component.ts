import {style, state, animate, transition, trigger, query} from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiAlertService } from '@taiga-ui/core';
import { GeneralService } from '../service/general.service';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('newsAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [style({ opacity: 0 })],
          { optional: true }
        ),
        query(
          ':leave',
           [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ])
    
      ] // register the animations
})
export class NavbarComponent implements OnInit {

  constructor(
    @Inject(TuiAlertService)
    private readonly alertService: TuiAlertService,
    private generalService: GeneralService
) {}


  index = 0;

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  onClick(result: string): void {
    this.alertService.open(result).subscribe();
  }

  general : any[];
  currentItemsToShow: any[];
  count:number;

  ngOnInit(): void {
    this.generalService.getGeneral().subscribe(data=>{
      this.general = data.articles;
      this.count = this.general.length;
    })
  }



}
