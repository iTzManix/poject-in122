import React from "react";
import "./Form.css";
import Navbar from "./Navbar";

function Form() {
  return (
    <>
      <div className="page-form">
        <Navbar />
        <h1>Tell me which character would you like us to talk about?</h1>
        <form>
          <div className="form-div">
            <div>
              <label>Name</label>
              <input type="text" id="nombre" placeholder="Name" required />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                id="apellido"
                placeholder="Last Name"
                required
              />
            </div>
            <div>
              <label>Mail</label>
              <input type="email" id="correo" placeholder="Mail" required />
            </div>
            <div>
              <label>Suggest</label>
              <input type="text" id="sugest" placeholder="Suggest" required />
            </div>
            <div>
              <input type="submit" value="Enviar" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
