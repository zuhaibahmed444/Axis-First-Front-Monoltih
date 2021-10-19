import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  
  constructor(private http: HttpClient,private login:LoginService) { }
  //delete profile pic

  public deleteProfilePic(username:any){
    return this.http.post(`${baseUrl}/file/deleteimage`,username,{responseType: 'text'});
  }
  public updateProfilePic(uploadImageData:any){
    return this.http.post(`${baseUrl}/file/upload`,uploadImageData,{responseType: 'text'});
  }

  public verifyImage(uploadImageData:any){
    return this.http.post(`${baseUrl}/file/verifyimage`,uploadImageData,{responseType: 'text'});
  }

  public onUpdate(){
    this.login.getCurrentUser().subscribe((data:any)=>{
      console.log(data)
      this.login.setUser(data);
      location.reload
    })
  }

}
