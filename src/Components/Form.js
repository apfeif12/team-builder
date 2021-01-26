import React from "react";

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={onChange}
          value={values.name}
          placeholder="Type your name..."
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          onChange={onChange}
          value={values.email}
          placeholder="Type your email..."
        />
      </label>
      <label>
        Role
        <select name="role" value={values.role} onChange={onChange}>
          <option value="">Select Role</option>
          <option value="Backend">Backend</option>
          <option value="Frontend">Frontend</option>
          <option value="Designer">Designer</option>
        </select>
      </label>

      <div className="submit">
        <button disabled={!values.name || !values.email || !values.role}>
          Submit
        </button>
      </div>
    </form>
  );
}
