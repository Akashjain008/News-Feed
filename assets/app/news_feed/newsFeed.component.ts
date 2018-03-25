import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { NewsFeedService } from "./newsFeed.service";

@Component({
    selector: "news-feed",
    templateUrl: "./newsFeed.component.html",
    providers: [NewsFeedService],
    styles: [`
    .author {
        display: inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%;
    }
    .config {
        display: inline-block;
        text-align: right;
        font-size: 12px;
        width: 19%;
    }
`]
})

export class NewsFeedComponent implements OnInit, OnDestroy {
    constructor(private newsFeedService: NewsFeedService) { }
    newsFeeds = [];
    connection;
    ngOnInit() {
        this.connection = this.newsFeedService.getNewsFeed().subscribe(newsObj => {
            if (newsObj.news) {
                this.newsFeeds.push(newsObj.news);
            }
        });
    }
    ngOnDestroy() {
        this.connection.unsubscribe();
    }
};

