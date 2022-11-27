import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroListarComponent } from './carro-listar/carro-listar.component';
import { MasterpageComponent } from './layout/masterpage/masterpage.component';

const routes: Routes = [
  {path:"carros",component: MasterpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
