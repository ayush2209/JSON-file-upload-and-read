import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file-upload';
  errorMsg:boolean = false;
  selectedFile: any;
  onFileChanged(event:any) {
    this.errorMsg = false;
    this.selectedFile = event.files[0];
    const fileReader:any = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
     console.log(JSON.stringify(fileReader.result));
    }
  }
}
