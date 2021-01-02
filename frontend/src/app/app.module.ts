import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './ng-material.module';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ContactInfoComponent,
    FooterComponent,
    ContactDialogComponent
  ],
  entryComponents: [
    ContactDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
