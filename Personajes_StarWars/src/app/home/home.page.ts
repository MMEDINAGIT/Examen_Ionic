import { Component } from '@angular/core';
import { DescPerPage } from "../desc-per/desc-per.page"
import { PersonajePage } from "../Personaje/Personaje.page"
import { GeneralGrevousPage } from "../general-grevous/general-grevous.page"
import { PadmeAmdalaPage } from "../padme-amdala/padme-amdala.page"
import { YodaPage } from "../yoda/yoda.page"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  var1=DescPerPage;
  var2=PersonajePage;
  var3=GeneralGrevousPage;
  var4=PadmeAmdalaPage;
  var5=YodaPage;

  constructor(){

  }

}
