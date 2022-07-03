import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SongsListService } from 'src/app/services/songs-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  songsList: any = [];

  artistsList: any = [];

  isAddSongs: boolean = true;

  songsApiData: string = '';

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  selected: string = ''

  constructor(private songs: SongsListService) { }

  ngOnInit(): void {
    this.songs.getTopSongs().subscribe((res) => {
      this.songsList = res;
    },
      (error) => {
        console.log("error occured from api")
      })
    this.songs.getArtists().subscribe((res) => {
      this.artistsList = res;
    },
      (error) => {
        console.log("error occcured from api");
      })
  }

  addSongsGroup = new FormControl({
    name: (''),
    date: (''),
    image: (''),
    artists: (''),
  })

  addArtistsGroup = new FormControl({
    name: (''),
    dob: (''),
    bio: ('')
  })

  addSongs() {
    this.isAddSongs = !this.isAddSongs;
  }

  cancel() {
    this.addSongs();
  }

  save() {
    this.addSongs();
    let reqObj = {
      name: this.addSongsGroup.value?.name,
      date: this.addSongsGroup.value?.date,
      image: this.addSongsGroup.value?.image,
      artists: this.addSongsGroup.value?.artists,
    }
    this.songs.postSongs(reqObj).subscribe((res) => {
      alert("Songs added successfully");
    },
      (error) => {
        console.log("error occured from api");
      })
  }
  addArtistTODb() {
    let reqObj = {
      name: this.addArtistsGroup.value?.name,
      dob: this.addArtistsGroup.value?.dob,
      bio: this.addArtistsGroup.value?.bio,
    }
    this.songs.postArtists(reqObj).subscribe((res) => {
      alert("Artists added successfully");
    },
      (error) => {
        console.log("Error occured From api");
      })
  }

}
