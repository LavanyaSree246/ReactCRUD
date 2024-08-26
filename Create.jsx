import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
    const [name, setname] = useState("");
    const [city, setcity] = useState("");
   let history = useNavigate();
   const handelSubmit = (e) => {
        e.preventDefault(); 
       const ids = uuid(); 
        let uni = ids.slice(0, 8); 
let a = name,
            b = city;
        if (name == "" || city == "") {
            alert("invalid input");
            return;
        }
        array.push({ id: uni, Name: a, City: b });
        history("/");
    };
return (
        <div>
            <h5>Add details</h5>

            <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
             <Form.Group className="mb-3"controlId="formBasicName">
            <Form.Control  onChange={(e) => setname(e.target.value)}
                type="text" placeholder="Enter Name"  required />
        </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Control onChange={(e) =>setcity(e.target.value)}
                type="text" placeholder="City"  required />
        </Form.Group>

         <Button onClick={(e) => handelSubmit(e)} variant="info" type="submit" >
             Submit </Button>

                
<Link className="d-grid gap-2" to="/">
    <Button variant="primary" size="lg"> Home</Button> </Link>
            </Form></div>
             );
            }
 export default Create;