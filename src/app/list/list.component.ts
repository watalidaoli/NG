import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list=[]; //
  num=0; //
  mlist=[]; //
  @ViewChild(IonInfiniteScroll,{static:true}) 
  private myScroll:IonInfiniteScroll;
  // 声明依赖注入
  constructor(
    private nav: NavController,
    private http:HttpClient
  ) { }
  // 初始化
  ngOnInit() {
    let url=`https://triangle.applinzi.com/movies`;
    this.http.get(url).subscribe((res:any)=>{
      this.list=res.data;
      this.mlist=this.list.slice(this.num,this.num+10); //10个
    });
  }
  // 跳转回上一个页面 
  goBack(){
    this.nav.back(); //ionic提供
  }
  // 加载更多
  loadMore(){
    // console.log(this.list.length,this.mlist.length);
    if(this.list.length!=this.mlist.length){ //当没加载完全部
      setTimeout(()=>{
        this.num+=10;
        this.mlist=this.mlist
        .concat(this.list.slice(this.num,this.num+10)); //10个
        this.myScroll.complete();
      },200)
      // console.log(this.num); 
    }else{
      this.myScroll.complete();
      return;
    }
  }
}
