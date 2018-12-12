import { Http } from "@angular/http";
import { Injectable, DoCheck } from "@angular/core";
import "rxjs/add/operator/map";
import { UserService } from "./user";

@Injectable()
export class RedictService implements DoCheck {
  categories: String[];
  defaultCategory: String;
  data = [];
  constructor(public http: Http, private userService: UserService) {
    this.categories = this.userService.categories;
    this.defaultCategory = this.userService.defaultCategory;
  }

  ngDoCheck() {
    this.categories = this.userService.categories;
    this.defaultCategory = this.userService.defaultCategory;
  }
  getSubRedict(category) {
    return this.http
      .get(
        `https://www.reddit.com/r/${category}/top.json?limit=${
          this.userService.postLimit
        }`
      )
      .map(res => res.json());
  }
}
