import React from "react";
function ItemDisplay(props) {
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
                        </tr>
                    </thead>
                    <tbody>
                        
                        {props.members.map((item, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index}</th>     
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
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
