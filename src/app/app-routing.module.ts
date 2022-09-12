import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { GeneralComponent } from './general/general.component';
import { HealthComponent } from './health/health.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ScienceComponent } from './science/science.component';
import { SportComponent } from './sport/sport.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: 'homepage', component: HomePageComponent },
  { path: 'sports', component: SportComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'health', component: HealthComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'technology', component: TechnologyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
