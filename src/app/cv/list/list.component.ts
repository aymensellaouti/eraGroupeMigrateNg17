import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Cv } from "../model/cv";
import { ItemComponent } from "../item/item.component";
import { NgClass } from "@angular/common";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"],
    standalone: true,
    imports: [
    NgClass,
    ItemComponent
],
})
export class ListComponent {
  @Input()
  cvs: Cv[] = [];
}
