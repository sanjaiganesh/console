import {Page} from "ionic-angular";
import {TranslatorsPage} from "../translatorsPage/translatorsPage";
import {SettingsPage} from "../settingsPage/settingsPage";


@Page({
  templateUrl: "build/pages/tabs/tabs.html"
})
export class TabsPage {

  private translatorsRoot: any;
  private settingsRoot: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab"s root Page
    this.translatorsRoot = TranslatorsPage;
    this.settingsRoot = SettingsPage;
  }
}
