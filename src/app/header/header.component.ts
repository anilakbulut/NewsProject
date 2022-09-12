import { Component, Inject, OnInit } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(    
    @Inject(TuiAlertService)
    private readonly alertService: TuiAlertService,) { }

  ngOnInit(): void {
  }

}
