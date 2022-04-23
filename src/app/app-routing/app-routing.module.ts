import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainSiteComponent} from "../main-site/main-site.component";
import {LostAndFoundComponent} from "../lost-and-found/lost-and-found.component";

const routes: Routes = [
  {path: '', component: MainSiteComponent},
  {path: 'LostAndFound', component: LostAndFoundComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
