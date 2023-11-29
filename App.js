import './App.css';
import Display from './Heading';
import AddItem from './AddItem';
import ItemDisplay from './ItemDisplay';
import { useState,useEffect } from "react";


function App() {
  const [data, setData] = useState({ itemList: []});
  //set the useEffect to ComponentDidMount() ,only run when first appear
  useEffect(() => {
    //send an get request to json server
    fetch("http://localhost:3000/items")
      //wait for response from json server
      .then((response) => response.json())
      //use the data to update the itemList
      .then((data) => setData({itemList:data}));
  }, [])
  
  const deleteItem = (item) => {
    //make a copy of itemList
    const itemList = data["itemList"];
    //create a request with method = Delete
    const requestOptions = {
      method: "DELETE",
    }
    //pass the delete item id to jason server
    //we need to convert json to string by using `` and ${item.id}
    fetch(`http://localhost:3000/items/${item.id}`, requestOptions).then
      //wait for response ,
      ((response) => {
        if (response.ok) {
          //if response is OK then we need to get the index of the deleted item from the itemList array
          const idx = itemList.indexOf(item);
          //delete one item from the itemList with index number equal to idx
          itemList.splice(idx, 1)
          setData({itemList:itemList})

        }

       }
    );

  }


  function addItemToDate(item) {
    //make a copy of data list
    let itemList = data.itemList;

    //create a request Options for Json API
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item)
    };

    //send data to jason server first
    fetch("http://localhost:3000/items", requestOptions)
      //then -> wait for the response from json server
      .then((response) => response.json())
      //get the data from json server feedback,include id number generate by JSON API
      .then((data) => {
        //push the data from json server to itemList
        itemList.push(data);
        //change the state of data
        setData({itemList})
      });
     
  }
  

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-3">
          <Display name={"Member Information "} detail={"all paid member for 2023"} />
        </div>
        <div className="row mt-3">
          <ItemDisplay members={data.itemList} deleteItem={deleteItem} />
        </div>
        <div className="row mt-3">
          <AddItem addNewItem={addItemToDate} />
        </div>
        <br/>
        <br/>
        
      </div>
    </div>
  );
}

export default App;
