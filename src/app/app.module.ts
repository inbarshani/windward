import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

import { TableModule } from 'primeng/table';
import { FleetsTableComponent } from './features/fleets/fleets-table/fleets-table.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { FleetComponent } from './features/fleets/fleet/fleet.component';

@NgModule({
    declarations: [AppComponent, PageNotFoundComponent, FleetsTableComponent, FleetComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, TableModule, InputTextModule, ButtonModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
