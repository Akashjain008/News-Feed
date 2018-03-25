import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import * as io from 'socket.io-client';
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class NewsFeedService {
    private url = 'http://localhost:3000';
    private socket;
    getNewsFeed() {
        let observable = new Observable(observer => {
            this.socket = io(this.url);
            this.socket.on('news', (data) => {
              observer.next(data);    
            });
            return () => {
              this.socket.disconnect();
            };  
          })     
          return observable;
    }

};