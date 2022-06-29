import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SongsListService } from 'src/app/services/songs-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  songsList:any = [];

  artistsList:any = [];

  isAddSongs:boolean = true;

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  selected: string = ''

  constructor(private songs:SongsListService) { }

  ngOnInit(): void {
    this.songs.get().subscribe((res)=>{
      this.songsList = res;
    })
    this.songs.getData().subscribe((res)=>{
      this.artistsList = res;
      console.log(res);
    })
  }

  addSongs(){
    this.isAddSongs = !this.isAddSongs;
  }
  cancel(){
    this.addSongs();
  }
  save(){
    this.addSongs();
  }

}
