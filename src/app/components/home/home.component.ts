import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { sideText } from 'src/core/interfaces/text';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lists : any;
  public title: string = "Nuestros Artículos"
  public sides = sideText;

  constructor(public articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleList();
  }

  articleList() {
    this.articleService.articleList()
    .subscribe(data => {
      this.lists = data;
    })

  }

  searchArticle(name:string) {
    this.articleService.articleFilter(name).subscribe((res: any) => {
      this.lists = res;
      if (this.lists.length === 0) {
        this.articleList();
      }
    })
  }



}
