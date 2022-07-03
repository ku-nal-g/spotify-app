import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsListService {

  songsListUrl:string = "assets/songs-list.json"; 

  artistsListUrl:string = 'assets/artists-list.json';

  songsApiUrl:string = "http://localhost:83/api/Spotify/Top10Songs";

  artistsApiUrl:string = 'http://localhost:83/api/Spotify/Top10Artist';

  addSongApiUrl:string = 'http://localhost:83/api/Spotify/AddSong';

  addArtistApiUrl:string = 'http://localhost:83/api/Spotify/AddArtist';

  constructor(private http:HttpClient) { }

  // get top 10 songs api

  getTopSongs():Observable<any>{
    return this.http.get(this.songsApiUrl);
  }

  //get top artists api 
  getArtists():Observable<any>{
    return this.http.get(this.artistsApiUrl);
  }

  // add songs api url
  postSongs(reqObj:any):Observable<any>{
    return this.http.post(this.addSongApiUrl,reqObj);
  }
  
  //add artists api url
  postArtists(reqObj:any):Observable<any>{
    return this.http.post(this.addArtistApiUrl,reqObj);
  }

}
