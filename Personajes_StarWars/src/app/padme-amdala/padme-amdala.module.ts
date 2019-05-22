import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PadmeAmdalaPage } from './padme-amdala.page';

const routes: Routes = [
  {
    path: '',
    component: PadmeAmdalaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PadmeAmdalaPage]
})
export class PadmeAmdalaPageModule {}
