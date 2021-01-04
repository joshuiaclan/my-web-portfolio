import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {
	faInstagram,
	faTwitter,
	faGithub,
	faFacebook,
	faDev,
	faLinkedin,
	faAngular,
	faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { socialMediaAccounts } from '../../data/contact-info'; 
@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	socialMedias = socialMediaAccounts;
	instagram = faInstagram;
	twitter = faTwitter;
	github = faGithub;
	facebook = faFacebook;
	linkedin = faLinkedin;
	youtube = faYoutube;
	angular  =faAngular;
	dev = faDev;
	socialMediaIcons = [ 
		{
			name: "facebook",
			icon: this.facebook
		},
		{
			name: "twitter",
			icon: this.twitter
		},
		{
			name: "github",
			icon: this.github
		},
		{
			name: "linkedin",
			icon: this.linkedin
		},
		{
			name: "youtube",
			icon: this.youtube
		},
		{
			name: "dev",
			icon: this.dev
		} 
	]
	testIcon = this.socialMediaIcons[0].icon;
	constructor() {
		console.log(this.socialMediaIcons[0].icon)
	}

	ngOnInit(): void {
	}

	getIcon(socialMediaName: any) {
		let iconValue = this.socialMediaIcons.filter( data => data.name == socialMediaName )
		if (iconValue === undefined || iconValue.length <= 0) {
			return this.angular
		}
		return iconValue[0].icon;
	}

}
