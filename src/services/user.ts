import { Injectable } from "@angular/core";
@Injectable()
export class UserService {
  currentUser;
  categories:String[] = ["Entertainment" ,"Food", "Lifestyle","Sports"];
  defaultCategory = "Entertainment";
  numberOfItemToDisplay = [4, 8, 12, 16];
  postLimit = 5;
  constructor() {}
  setCurrentUser(user) {
    this.currentUser = user;
  }
}
