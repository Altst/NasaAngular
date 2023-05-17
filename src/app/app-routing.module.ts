import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApodComponent } from './apod/apod.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { EarthComponent } from './earth/earth.component';
import { EpicComponent } from './epic/epic.component';
import { MarsComponent } from './mars/mars.component';

const routes: Routes = [
  { path: 'apod-component', component: ApodComponent },
  { path: 'asteroids-component', component: AsteroidsComponent },
  { path: 'earth-component', component: EarthComponent },
  { path: 'epic-component', component: EpicComponent },
  { path: 'mars-component', component: MarsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
