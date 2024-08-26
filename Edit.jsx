import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
    const [name, setname] = useState("");
    const [city, setcity] = useState("");
    const [id, setid] = useState("");

let history = useNavigate();

let index = array.map(function (e) {
            return e.id;
        }).indexOf(id);

const handelSubmit = (e) => {
         e.preventDefault();
         if (name == "" || city == "") {
             alert("invalid input");
             return;
         }
       let a = array[index];
         a.Name = name;
         a.City = city;
       
        history("/");
     };
     useEffect(() => {
        setname(localStorage.getItem("Name"));
        setcity(localStorage.getItem("City"));
        setid(localStorage.getItem("id"));
    }, []);

    return (
        <div>
            <h5>Edit details</h5>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }} >
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Control value={name} onChange={(e) =>
                            setname(e.target.value)
                        }  type="text" placeholder="Enter Name" />
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword" >
                    <Form.Control value={city}  onChange={(e) =>
                            setcity(e.target.value)
                        } type="text" placeholder="City"/>
                </Form.Group>

               <Button onClick={(e) => handelSubmit(e)} variant="info"
                    type="submit"
                    size="lg"
                > Update </Button>
               
                <Link className="d-grid gap-2" to="/">
                    <Button variant="primary" size="lg"> Home</Button>
                </Link>
            </Form>
        </div>
    );
}
export default Edit;

