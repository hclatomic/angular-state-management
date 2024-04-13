// Angular
import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
// app
import { StoreService } from './store.service';
import { User } from '../classes/app-state.class';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public store: StoreService
  ) { }

  login(username: string, password: string): Observable<User> {

    //Stackblitz denies calls to a server that should be run this way:
    //return this.http.post('https://myserver/...', {user: username, pass: password});

    // Instead we mock the behavior of a server returning
    // an observable after a 500ms delay to make it asynchronous:
    return of(
      {
        identified: true,
        username: username,
        firstname: 'John',
        lastname: 'Doe',
        age: 32,
        address: {
          street: '',
          city: ''
        },
        orders: []
      }
    ).pipe(delay(500));
  }

  getCatalog() {
    //Stackblitz denies calls to a server that should be run this way:
    //return this.http.post('https://myserver/...', {...});

    // Instead we mock the behavior of a server returning
    // an observable after a 500ms delay to make it asynchronous:
    return of([
      { "id": 1, "label": "justo morbi ut odio cras", "description": "convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in", "price": 1423.99 },
      { "id": 2, "label": "tortor duis mattis egestas", "description": "mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum", "price": 100 },
      { "id": 3, "label": "eleifend luctus ultricies eu nibh", "description": "tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse", "price": 731.25 },
      { "id": 4, "label": "vitae quam suspendisse", "description": "convallis nulla neque libero convallis eget eleifend luctus ultricies eu", "price": 1885.66 },
      { "id": 5, "label": "nullam sit amet turpis elementum", "description": "luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit", "price": 927.5 },
      { "id": 6, "label": "eleifend pede libero quis orci", "description": "sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus", "price": 900.54 },
      { "id": 7, "label": "sed magna", "description": "lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit", "price": 1884.84 },
      { "id": 8, "label": "orci mauris lacinia sapien", "description": "integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc", "price": 1403.84 },
      { "id": 9, "label": "luctus cum sociis", "description": "fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed", "price": 531.82 },
      { "id": 10, "label": "montes nascetur ridiculus mus vivamus", "description": "non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit", "price": 344.53 },
      { "id": 11, "label": "curabitur at", "description": "tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet", "price": 729.0 },
      { "id": 12, "label": "vel dapibus at diam nam", "description": "pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut", "price": 917.81 }
    ]).pipe(delay(500));

  }

}
