import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  private banner=[0,1,2,3]; //
  // 电影数据
  private movies=[];
  // options
  private slideOpts={
    initialSlide: 0, //首个显示
    speed: 400 //速度
  };
  // 轮播对象 - ng核心装饰器 视图子元素
  // 参数(选择器|类型,是否静态)
  @ViewChild(IonSlides,{static:true}) 
  private mySlides:IonSlides;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    // let url=`http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10`;
    let url=`https://triangle.applinzi.com/movies`;
    this.http.get(url).subscribe((res:any)=>{
      // console.log(res.data);
      this.movies=res.data;
      // 轮播autoplay
      this.mySlides.startAutoplay();
    });
  }
}
