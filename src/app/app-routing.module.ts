import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FleetsComponent } from './features/fleets/fleets.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: FleetsComponent
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
