import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PremierExempleComponent } from "./signal/premier-exemple/premier-exemple.component";
import { ChangeDetectionComponent } from "./changeDetection/change-detection/change-detection.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
    standalone: true,
    imports: [NavbarComponent, RouterOutlet, PremierExempleComponent, ChangeDetectionComponent]
})
export class AppComponent {
  title = "ng17ModuleToConvert";
}
