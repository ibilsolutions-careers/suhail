import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  inputValue: string= '';
  todoList:any[]=[
    {id:1,value:'Demo'}
  ];


  onSubmit(): void{
    if(this.inputValue == ''){
      alert('Please add any value');
      return;
    }else{
      const idValue = (Math.max(...this.todoList.map(value => value.id))) + 1;
      const obj = {
        id:idValue ?? 1,
        value:this.inputValue
      }
      this.todoList.push(obj);
    }
  }
  deleteData(data:any):void{
    const index = this.todoList.findIndex((element)=>element.id == data.id);
    if(index != -1){
      this.todoList.splice(1,index);
      alert("Deleted successfully");
    }
  }
}
