import React, { useState } from "react";
import Contact from "../img/contact-us.png";
import "./Contacts.css";

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextArea] = useState("");

  //handle form
  function nameHandler(event) {
    setName(event.target.value);
  }
  function emailHandler(event) {
    setEmail(event.target.value);
  }
  function textAreaHandler(event) {
    setTextArea(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    alert(" submit is ok");
  }

  return (
    <div className="container-contact">
      <form className="contact-form" onSubmit={submitHandler}>
        <h1>با ما در تماس باشید</h1>
        <input
          type="text"
          placeholder="نام خود را وارد کنید"
          value={name}
          onChange={nameHandler}
        />
        <input
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          value={email}
          onChange={emailHandler}
        />
        <textarea
          type="text"
          placeholder="نظرات خود را وارد کنید"
          value={textarea}
          onChange={textAreaHandler}
        />
        <button type="submit">ارسال</button>
      </form>
      <div className="contact-img">
        <img src={Contact} alt="img-contact" />
      </div>
    </div>
  );
}

export default Contacts;
