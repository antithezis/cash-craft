import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private htpp = inject(HttpClient);

  getAlbums() {
    return this.htpp.get('https://jsonplaceholder.typicode.com/albums');
  }

  registerUser(user: any) {
    return this.htpp.post('https://jsonplaceholder.typicode.com/users', user);
  }

}
