import "./App.css";
import React, { useState } from "react";
import Form from "./Components/Form.js";
import Member from "./Components/Member.js";

function App() {
  const initialFormValues = {
    name: "",
    email: "",
    role: "",
  };

  const [member, setMember] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };
  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!newMember.name || !newMember.email || !newMember.role) return;
    setMember([newMember, ...member]);
    setFormValues(initialFormValues);
  };

  return (
    <div className="App">
      <div className="form">
        <Form values={formValues} update={updateForm} submit={submitForm} />
      </div>
      <div className="member">
        {member.map((member) => {
          return <Member data={member} />;
        })}
      </div>
    </div>
  );
}

export default App;
