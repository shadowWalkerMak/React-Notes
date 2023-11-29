# React-Notes
Notes to show the basic of react<br/>
1)bootstrap tips<br/>
Install bootstrap:<br/>
  Go to vscode terminal > npm add Bootstrap react-Bootstrap<br/>
Import bootstrap<br/>
  Under index.js > import 'bootstrap/dist/css/bootstrap.min.css'<br/>
Layout:<br/>
Container: div className="container">div className="row mt-3" div className="col-sm-2"/div /div /div><br/>
Button Size:<br/>
  <button className="col-4 btn btn-primary"</button><br/>
2)Call Back function -> pass information from children component to parent using function <br/>
  AddItems.js(children)->props.addNewItem({name:name,age:age})<br/>
  App.js(parent)-><AddItem addNewItem={addItemToDate}/> addNewItem contain all information from child, and addItemToDate is the function to get the data.<br/>
  Under addItemToDate(item){} item is allthe data get from children. <br/>
3)State:<br/>
  App.js> const[data,setData] = useState({itemList:[]})<br/>
  this make a itemList array object and save as data<br/>
  to get the list, we need to use data.itemList<br/>
4)JSON Server<br/>
  i)Install JSON Server<br/>
  npm install -g json-server<br/>
  ii) create a json dabase under src -> db.json<br/>
  iii) create object under db.json -> "items":[]<br/>
  iv) Run the json server<br/>
    npx json-server --watch db.json<br/>
    you can see the data under http://localhost:3000/db<br/>
  v)Re-run the react-app > npm start<br/>
5)Push Data to JSON Server<br/>
  Under App.js<br/>
  i)create requestOptions<br/>
    const requestOptions={<br/>
      method:"POST",//request type<br/>
      header:{<br/>
        "Content-Type":"application/json",<br/>
      },<br/>
      body:JSON.stringify(item) //use to convert string format to JSON format<br/>
    }<br/>
  ii)Send data to json Server<br/>
     fetch("http://localhost:3000/items", requestOptions)<br/>
      //then -> wait for the response from json server<br/>
      .then((response) => response.json())<br/>
      //get the data from json server feedback,include id number generate by JSON API<br/>
      .then((data) => {<br/>
        //push the data from json server to itemList<br/>
        itemList.push(data);<br/>
        //change the state of data<br/>
        setData({itemList})<br/>
      });<br/>
       
Delete Item <br/>

App.js<br/>
1) create a deleteItem function with input of item,get from itemDisplay.js<br/>
2) create a requestOptions with Delete request method <br/>
3) fetch to json server with item.id and requestOptions<br/>
4) wait for response from json server<br/>
5) get the index of item<br/>
6) delete the item from itemList<br/>
7) setData ({itemList:itemList}) -this will refresh the data display table<br/>

itemDisplay.js<br/>
create a button with onClick arrow function ={()=>deleteItem(item)}> <br/>

  
  







