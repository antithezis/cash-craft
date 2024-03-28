import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  private http = inject(HttpClient)

  validateUser(data: any) {
    return this.http.get('/src/assets/mydata.json');
  }

}
