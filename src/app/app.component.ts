
import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { map, scan } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'app';
  $users: Observable<User[]>;
  constructor(apollo: Apollo) {
    this.$users = apollo.query<any>({
      query: gql`
            {
              users {
                      id
                      username
                      email
              }
            }
`})
      .pipe(
        map(res => res.data.users),
        scan(users => console.log)
      )

  }
}

interface User {
  id: String,
  username: String,
  email: String
}
