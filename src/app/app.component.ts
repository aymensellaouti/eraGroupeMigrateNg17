import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PremierExempleComponent } from "./signal/premier-exemple/premier-exemple.component";
import { ChangeDetectionComponent } from "./changeDetection/change-detection/change-detection.component";
import { FormsModule } from "@angular/forms";
import { IsEvenComponent } from "./signal/is-even/is-even.component";
import { HugeComponent } from "./defer/huge/huge.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
    standalone: true,
    imports: [NavbarComponent, RouterOutlet, PremierExempleComponent, ChangeDetectionComponent, FormsModule, IsEvenComponent]
})
export class AppComponent {
  title = "ng17ModuleToConvert";

  nbre = 0;
}
