import { Component, Signal, computed, effect, signal } from "@angular/core";
import { Cv } from "../model/cv";
import { registerLocaleData, AsyncPipe, TitleCasePipe, DatePipe } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../service/cv.service";
import { Observable, catchError, distinctUntilChanged, of } from "rxjs";
import { EmbaucheComponent } from "../embauche/embauche.component";
import { DetailCardComponent } from "../detail-card/detail-card.component";
import { ListComponent } from "../list/list.component";
import { HugeComponent } from "../../defer/huge/huge.component";
registerLocaleData(localeFr, "fr");
@Component({
    selector: "app-cv",
    templateUrl: "./cv.component.html",
    styleUrls: ["./cv.component.css"],
    standalone: true,
    imports: [
        ListComponent,
        DetailCardComponent,
        EmbaucheComponent,
        AsyncPipe,
        TitleCasePipe,
        DatePipe,
        HugeComponent
    ]
})
export class CvComponent {
  today = new Date();
  cvs: Cv[] = [];
  $selectedCv: Signal <Cv | null>;
  nbre = 0;
  cvs$: Observable<Cv[]>;
  constructor(private toastr: ToastrService, private cvService: CvService) {
    this.$selectedCv = this.cvService.$selectedCv;
    effect(
      () => {
        if (this.$selectedCv()) this.nbre++;
      }
    )
    this.toastr.info("Bonjorur :D");
    this.cvs$ = this.cvService.getCvs().pipe(
      distinctUntilChanged(),
      catchError((e) => {
        this.toastr.error(`Les données sont fake, merci de contatcer l'admin`);
        return of(this.cvService.getFakeCvs());
      })
    );
  }
}
