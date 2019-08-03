import {
  Component,
  OnInit
} from '@angular/core';
import {
  NavController
} from '@ionic/angular';
import {
  HttpClient
} from '@angular/common/http';
import {
  ActivatedRoute,
  Router,
  Route
} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  movieItem = []; //数据
  cinemas=[]; //影院
  // 声明依赖注入
  constructor(
    private nav: NavController,
    private http: HttpClient,
    private route: ActivatedRoute //
  ) {};
  // 初始化时
  ngOnInit() {
    this.route.params.subscribe(res => {
      // console.log(res);
      let mid = res.mid;
      let url = `https://triangle.applinzi.com/moviesItem?mid=${mid}`;
      this.http.get(url).subscribe((res: any) => {
        this.movieItem = res.data; //
        // console.log(this.movieItem);
      });
    });
    // cinema
    let url=`https://triangle.applinzi.com/cinema`;
    this.http.get(url).subscribe((res: any) => {
      this.cinemas = res.data; //
    });
  }
  // 跳转回上一个页面 
  goBack() {
    this.nav.back(); //ionic提供
  }
}