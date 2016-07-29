import {Page, NavParams} from "ionic-angular";
import {OnInit} from "@angular/core";
import {OnboardingDataService} from "../../../providers/onboardingDataService";
import {doAlert} from "../../../model/utils";

@Page({
  templateUrl: "build/pages/browser/onboardingFileContentPage/onboardingFileContentPage.html"
})
export class OnboardingFileContentPage implements OnInit {
  name: string;
  path: string;
  content: string;

  constructor(private navParams: NavParams,
              private onboardingDataService: OnboardingDataService) {
    this.name = navParams.get("name");
    this.path = navParams.get("path");
  }

  ngOnInit() {
    this.onboardingDataService.initiateGetFileContent(this.path)
            .then((content) => {
                this.content = content;  // things include the schema file name as well
            }).catch((err) => {
                // there was an error. display it on screen.
                console.log(JSON.stringify(err));
                doAlert(JSON.stringify(err));
            });
  }
}