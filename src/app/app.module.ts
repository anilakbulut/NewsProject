import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SportComponent } from './sport/sport.component';
import { NavbarComponent } from './navbar/navbar.component';

import {TuiButtonModule} from '@taiga-ui/core';
import {TuiCarouselModule} from '@taiga-ui/kit';
import {TuiIslandModule} from '@taiga-ui/kit';
import {TuiPaginationModule} from '@taiga-ui/kit';
import {TuiActionModule} from '@taiga-ui/kit';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { GeneralComponent } from './general/general.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { TechnologyComponent } from './technology/technology.component';
import { CommonModule } from "@angular/common";
import {TuiFilterByInputPipeModule} from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import { NewsFilterPipe } from './pipe/news-filter.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SportComponent,
    NavbarComponent,
    BusinessComponent,
    EntertainmentComponent,
    GeneralComponent,
    HealthComponent,
    ScienceComponent,
    TechnologyComponent,
    NewsFilterPipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiCarouselModule,
    TuiIslandModule,
    TuiPaginationModule,
    TuiActionModule,
    MatPaginatorModule,
    CommonModule,
    TuiFilterByInputPipeModule,
    FormsModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule
 
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
