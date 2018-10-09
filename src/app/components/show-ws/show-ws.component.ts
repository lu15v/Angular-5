import { Component, OnInit } from '@angular/core';
import {GitService} from '../../services/git-service.service';

@Component({
  selector: 'app-show-ws',
  templateUrl: './show-ws.component.html',
  styleUrls: ['./show-ws.component.css']
})
export class ShowWsComponent implements OnInit {
  response: any;
  username: string;
  constructor(public ws: GitService) { }

  ngOnInit() {
  }
  consultingUserProfile(){
    this.ws.getProfile(this.username).subscribe(
      (data) => {
        this.response = data;
        console.log(this.response);
      });
  }

}
