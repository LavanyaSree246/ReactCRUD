import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";

function Home() {
    let history = useNavigate();
    function setID(id, name,city) {
        localStorage.setItem("id", id);
        localStorage.setItem("Name", name);
        localStorage.setItem("City", city);
    }
function deleted(id) {
        let index = array.map(function (e) {
                return e.id;
            }).indexOf(id);

array.splice(index, 1);
history("/");
    }

    return (
        <div style={{ margin: "2rem" }}>
            <h1 className="text-center mb-4">User Details Management</h1>
            <Table >
                <thead className="thead-dark">
                    <tr>
                        <th>NAME</th>
                        <th>CITY</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                
                {array.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.Name}</td>
                                <td>{item.City}</td>
                                <td>
                                <Link to={`/edit`}>
                                        <Button onClick={() => setID(item.id, item.Name, item.City)}   variant="info" className="me-2" > Update </Button>
                                    </Link>
                                    <Button onClick={() => deleted(item.id)} variant="danger" >  Delete</Button>
                                </td>
                                </tr>
                        );
                    })}
                </tbody>
            </Table>
            <div className="d-grid gap-2 mt-4">
                <Link to="/create">
                    <Button variant="success" size="lg">
                        Create New User
                    </Button>
                </Link>
            </div>
        </div>
    );
}
export default Home;