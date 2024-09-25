import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private api: ApiService) { }

getUser(): Observable<any>{
  return this.api.getRequest("loginregisterlogin.php?email=despitegfx@gmail.com&password=Gi3909/24")
}
}
