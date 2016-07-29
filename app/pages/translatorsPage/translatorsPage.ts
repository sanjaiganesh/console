import {Page, NavController} from "ionic-angular";
import {OnInit} from "@angular/core";
import {TranslatorsDataService} from "../../providers/translatorsDataService";
import {AddTranslatorPage} from "./addTranslatorPage";
import {OpenT2TBridgeService} from "../../providers/opent2tBridgeService";
import {doAlert} from "../../model/utils";

@Page({
    templateUrl: "build/pages/translatorsPage/translatorsPage.html",
})
export class TranslatorsPage implements OnInit {
    translators: string[] = ['Thermostats'];

    // ctor
    constructor(
        private nav: NavController,
        private opent2tBridgeService: OpenT2TBridgeService,
        public translatorsDataService: TranslatorsDataService) {
        this.translators = [];
    }

    // handles page init.
    ngOnInit() {
        this.translatorsDataService.initiateGetSchemasList()
            .then((translators) => {
                this.translators = translators;
            }).catch((err) => {
                // there was an error. display it on screen.
                console.log(JSON.stringify(err));
                doAlert(JSON.stringify(err));
            });
    }

    // connect to a translator 
    connect(item: string) {
        this.nav.push(AddTranslatorPage, { name: item });
    }
}
