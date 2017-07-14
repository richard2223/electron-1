import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `<h1>Hello, I'm an Home module!</h1>
<input placeholder="Type hello home !" (keyup)="helloHome(input.value)" #input>{{message}}`
})
export class HomeComponent {

    private message = "";

    helloHome(value) {
        this.message = value;
    }
}
