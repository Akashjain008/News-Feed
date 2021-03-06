import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { NewsFeedComponent } from "./news_feed/newsFeed.component";

@NgModule({
    declarations: [
        AppComponent,
        NewsFeedComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}