import React from "react";
function ItemDisplay({members, deleteItem }) {
    return (
        <div className="container">
            <div className="row">
                <h4>Detail information </h4>
            </div>
            <div className="row mt-3">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {members.map((item, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index}</th>     
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td><button className="btn btn-danger" onClick={() => deleteItem(item)}>
                                        Delete
                                        </button>
                                    </td>
                               </tr>
                            )
                        
                        })}    
                    </tbody>
                </table>
            </div>
        </div>    



    )



}


export default ItemDisplay;
