import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FishingLogComponent } from '../fishing-log/fishing-log.component';
import { FishingLogEditComponent } from '../fishing-log-edit/fishing-log-edit.component';
import { FishingLogDetailComponent } from '../fishing-log-detail/fishing-log-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/logs', pathMatch: 'full'},
  {
    path: 'logs',
    component: FishingLogComponent,
    children: [
      {path: 'new', component: FishingLogEditComponent},
      {path: ':id', component: FishingLogDetailComponent},
      {path: ':id/edit', component: FishingLogEditComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
