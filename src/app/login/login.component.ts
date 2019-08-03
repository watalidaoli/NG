import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // 是否显示登录界面
  private toLog = true;
  // 是否能使用登录按钮
  private disa1 = false;
  private disa2 = false;
  private disa = (this.disa1 && this.disa2) ? true : false;
  // 用户数据
  private uname = "watalidaoli";
  private upwd = "123456";
  // 
  constructor(private http: HttpClient) {}
  // 
  ngOnInit() {}
  // 验证
  check1() {
    if (this.uname.trim() == "") {
      this.disa1 = false;
    } else {
      this.disa1 = true;
    }
  }
  check2() {
    if (this.upwd.trim() == "") {
      this.disa2 = false;
    } else {
      this.disa2 = true;
    }
  }
  // 登录
  log() {
    let url = `https://triangle.applinzi.com/login`;
    let params = {
      "uname": this.uname,
      "upwd": this.upwd //
    };
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    // 
    this.http.post(url, params, httpOptions).subscribe((res: any) => {
      // console.log(params);
      // console.log(res);
      this.toLog = false;
    });
  }
}