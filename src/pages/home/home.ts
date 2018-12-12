import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { RedictService } from "../../services/redict";
import { UserService } from "../../services/user";
import { ViewDetailsPage } from "../view-details/view-details";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  categories: String[];
  selectedCategory = this.reddictService.defaultCategory;
  postLimit: Number;
  posts = [];
  constructor(
    public navCtrl: NavController,
    private reddictService: RedictService,
    private userService: UserService
  ) {}
  ionViewWillEnter() {
    this.categories = this.userService.categories;
    this.postLimit = this.userService.postLimit;
    this.getData();
  }

  getData() {
    this.reddictService.getSubRedict(this.selectedCategory).subscribe(res => {
      this.posts = res.data.children;
    });
  }
  onCategorySelect() {
    this.getData();
  }
  onClickView(post) {
    this.navCtrl.push(ViewDetailsPage, { post: post });
  }
}
