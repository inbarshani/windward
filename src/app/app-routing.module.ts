import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FleetComponent } from './features/fleets/fleet/fleet.component';
import { FleetsTableComponent } from './features/fleets/fleets-table/fleets-table.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/fleets',
        pathMatch: 'full'
    },
    {
        path: 'fleets',
        component: FleetsTableComponent
    },
    {
        path: 'fleet/:id',
        component: FleetComponent
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
