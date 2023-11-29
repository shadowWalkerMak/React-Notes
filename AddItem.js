import React from "react";
import { useState } from "react";

function AddItem(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    function addItemButtonPressed() {
        props.addNewItem({
            name: name,
            age:age
        });
    }

    return (
        <div className="container">
            <div className="row">
                <h2>Add Item Here</h2>
            </div>
            <div className="row mt-3">
                <div className="col-sm-2"></div>
                <div className="col-sm-1">   
                    <label htmlFor="name-field">Name:</label>
                </div>
                <div className="col-sm-7">
                    <input 
                            className="form-control"
                            id="name-field"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="col-sm-2"></div>
            </div>
            <div className="row mt-3">
                <div className="col-sm-2"></div>
                <div className="col-sm-1">   
                    <label htmlFor="name-field">Age:</label>
                </div>
                <div className="col-sm-7">
                    <input 
                            className="form-control"
                            id="age-field"
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div className="col-sm-2"></div>
            </div>
            <div className="row mt-3">
                <div className="col-4"/>
                <button 
                    type="button"
                    className="col-4 btn btn-primary"
                    onClick ={addItemButtonPressed}
                >
                Add Item
                </button>
            </div>
        </div>
    )


}

export default AddItem;