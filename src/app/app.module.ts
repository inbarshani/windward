import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FleetsComponent } from './features/fleets/fleets.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

@NgModule({
    declarations: [AppComponent, FleetsComponent, PageNotFoundComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
