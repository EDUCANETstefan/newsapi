import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api';

  private search = "coronavirus";

  atricles = [];


  change(event) {
    this.search = event.target.value;
    this.reload();
  }

  constructor(private httpClient: HttpClient) {
    this.reload();
  }

  public reload() {
    this.httpClient
      .get('https://newsapi.org/v2/everything?q=' + this.search + '&from=2020-01-13&sortBy=publishedAt&apiKey=2e212b6bd4e6403db3869b64f8ff1a48')
      .subscribe(
        (data) => {
          // @ts-ignore
          this.articles = data.articles;
        }, (error) => {
          console.log(error);

        }
      );
  }

}


