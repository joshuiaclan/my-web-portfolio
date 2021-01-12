import { Component, OnInit, HostListener } from '@angular/core';
import { whatIDo } from '../../data/skills';
import {
    faHtml5,
    faCss3,
    faSass,
    faBootstrap,
    faPython,
    faJsSquare,
    faNpm,
    faNode,
    faAngular,
    faReact,
    faPhp,
    faWordpress,
    faJoomla,
    faGit,
    faGithub,
    faGitlab,
    faLinux,
    faWindows,
    faApple
} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
    iconSize = '"5x"';
    whatIDo = whatIDo;
    techStacks = [
        faHtml5,
        faCss3,
        faSass,
        faBootstrap,
        faPython,
        faJsSquare,
        faNpm,
        faNode,
        faAngular,
        faReact,
        faPhp,
        faWordpress,
        faJoomla,
        faGit,
        faGithub,
        faGitlab,
        faLinux,
        faWindows,
        faApple
    ];
    progLangOnView = false;
    whatIDoOnView = false;
    constructor() {
    }

    ngOnInit(): void {
    }
    
    @HostListener('document:scroll')
    windowOnScroll() {
        const screenPxValue: number = 770;
        if (document.documentElement.scrollTop > screenPxValue) { 
            this.whatIDoOnView = true;
        }
        if (document.documentElement.scrollTop > screenPxValue + 150) { 
            this.progLangOnView = true;
        }
    }

}
