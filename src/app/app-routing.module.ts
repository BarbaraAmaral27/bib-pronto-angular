import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadernoCreateComponent } from './components/caderno/create/caderno-create.component';
import { CadernoEditComponent } from './components/caderno/edit/caderno-edit.component';
import { CadernoIndexComponent } from './components/caderno/index/caderno-index.component';
import { DoceCreateComponent } from './components/doce/create/doce-create.component';
import { DoceEditComponent } from './components/doce/edit/doce-edit.component';
import { DoceIndexComponent } from './components/doce/index/doce-index.component';
import { GibiCreateComponent } from './components/gibi/create/gibi-create.component';
import { GibiEditComponent } from './components/gibi/edit/gibi-edit.component';
import { GibiIndexComponent } from './components/gibi/index/gibi-index.component';
const routes: Routes = [
  { path: 'caderno-index', component: CadernoIndexComponent },
  { path: 'caderno-create', component: CadernoCreateComponent },
  { path: 'caderno-edit/:id', component: CadernoEditComponent },
  { path: 'doce-index', component: DoceIndexComponent },
  { path: 'doce-create', component: DoceCreateComponent},
  { path: 'doce-edit/:id', component: DoceEditComponent},
  { path: 'gibi-index', component: GibiIndexComponent },
  { path: 'gibi-create', component: GibiCreateComponent},
  { path: 'gibi-edit/:id', component: GibiEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
