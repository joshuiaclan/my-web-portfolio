import { Component, OnInit, HostListener } from '@angular/core';
import { workExperience } from '../../data/work-exp';
@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  workExperience = workExperience;
  jobsOnView = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:scroll')
  windowOnScroll() {
      const screenPxValue: number = 2000;
      if (document.documentElement.scrollTop > screenPxValue) { 
          this.jobsOnView = true;
      }
  }

}
