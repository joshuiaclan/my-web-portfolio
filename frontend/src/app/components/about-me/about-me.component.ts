import { Component, OnInit } from '@angular/core';
import { aboutMe } from '../../data/about-me';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  aboutMeData = aboutMe;
 
  constructor() {
   
   }

  ngOnInit(): void {
    
    console.log(aboutMe);
  }
}
