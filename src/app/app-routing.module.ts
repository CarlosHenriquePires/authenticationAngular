import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';


const routes: Routes = [
{path: '', pathMatch: 'full', component: CadastrarComponent},
{path: 'cadastrar', component: CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
