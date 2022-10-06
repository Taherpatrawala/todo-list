  // Model
      // If localstorage has a todos array, then use it
      // Otherwise use the default array.
      let todos;
      // Retrieve localStorage
         const savetodos=JSON.parse(localStorage.getItem('todokey'));
         if(Array.isArray(savetodos)) {
           todos=savetodos;
         }
         else{
     
         todos=[{
         title:"Hey,Taher here..",
         dueDate:'6-10-2022',
         id:'h1'
            },
           {title:'Enter whatever you want to log',
            dueDate:'12-10-2022',
            id:'h2'},
           { title: 'Your entered to-do list would be saved in the browser cookies',
           dueDate:'05-11-2022',
           id:'h3'}];
     
     render();
      }
       
         //Model
        function push(title, dueDate){
         const id =''+ new Date().getTime(); //converting id number into a string using blank space
         todos.push({title:title,
         dueDate:dueDate,
          id:id});
         
         savetodo();
        }
         function deletefunction(deleteid){
           todos= todos.filter(function(todo){
         if(todo.id===deleteid)
          return false;
     
          else
          return true;
          
       });
       savetodo();
         }
      function savetodo(){
        localStorage.setItem('todokey',JSON.stringify(todos));
      }
      //Controller
       function boxtodo(){
       const td=document.getElementById('todo-title');
       let title=td.value;
       const datepicker= document.getElementById('date-picker');
       const dueDate= datepicker.value;
       
       push(title, dueDate);
       render();
       }
     
       
     
       function deltodo(event){
         const deletebutton=event.target;
         const deleteid=deletebutton.id;
        
        deletefunction(deleteid);
       render();
       }
      
     //VIEW
     function render(){
        document.getElementById('todo-div').innerHTML ='';
        todos.forEach(function(todo){
        const element=document.createElement('div')
        element.innerHTML=todo.title + ' '+todo.dueDate;
        element.style="position:relative;margin-bottom:6px;"
        
        const divtodo= document.getElementById('todo-div');
        divtodo.appendChild(element);
        const delbutton=document.createElement('button');
       delbutton.innerText='Delete';
       element.appendChild(delbutton);
       delbutton.style="font-family: 'Ubuntu', sans-serif;margin-left:20px; border-radius:10px;background-image:linear-gradient(to right,  lightpink, pink); box-shadow: 1px 1px 7px rgb(148,148,148); border:none;color:white;font-weight:bold;cursor:pointer"       //delbutton.onclick=delfunction;
       delbutton.id= todo.id;
       delbutton.onclick=deltodo;
       });
       
      }
     render();
     // function addTodo(todoList) {
        
        
       //  let element= document.createElement('div');
       //  element.innerHTML=todoList;
        // document.body.appendChild(element);
     
       
     //}
     //addTodo('sup nigga');
     //addTodo('wassup boi');
     console.log('HEY there'.toUpperCase());
    
