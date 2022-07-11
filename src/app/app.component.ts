import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devups';
  constructor(private metaTagService: Meta) {}
  ngOnInit() {
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content: 'D,devups,article,articulo,select, post, angular',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Devups' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
  }
}
