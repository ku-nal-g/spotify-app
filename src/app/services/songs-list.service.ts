import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsListService {

  songsListUrl:string = "assets/songs-list.json"; 

  artistsListUrl:string = 'assets/artists-list.json';

  constructor(private http:HttpClient) { }

  get():Observable<any>{
    return this.http.get(this.songsListUrl);
  }

  getData():Observable<any>{
    return this.http.get(this.artistsListUrl);
  }
}
