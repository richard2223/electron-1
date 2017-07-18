import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: 'about.component.html'
})
export class AboutComponent {

    private message = "";

    helloAbout(value) {
        this.message = value;
    }
}


