import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GitService{

  constructor(public http: HttpClient) { }

  getProfile(username: string){
   return this.http.get("https://api.github.com/users/" + username);
  }
}
