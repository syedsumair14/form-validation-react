import React from "react";

let initState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.state = initState;
  }

  Validation() {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    if (!this.state.email.includes("@") && !this.state.email.includes('.')) {
      emailError = "Invalid Email";
    }
    if (this.state.name.length < 3) {
      nameError = "Not a Valid Name";
    }
    if (!this.state.password.includes("#")) {
      passwordError = "Must Include #";
    }
    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return 0;
    }
    return 1;
  }

  submit = () => {
    console.log(this.state);
    const isValid = this.Validation();
    if (isValid) {
      console.log(this.state);
      this.setState(initState);
      alert("Submitted");
    } else {
      //    alert("Not valid")
    }
  };

  render() {
    return (
      <React.Fragment>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <fieldset
            className="offset-5 mt-5"
            style={{ paddingLeft: "20px", border: "1px solid", width: "250px" }}
          >
            <legend style={{ marginLeft: "20px", width: "150px" }}>
              Form Details
            </legend>
            <label htmlFor="name">Name: </label>
            <br />
            <input
              type="name"
              placeholder="Enter Name"
              value={this.state.name}
              ref={this.name}
              onChange={() => {
                this.setState({ name: this.name.current.value });
              }}
            />
            <span style={{ fontSize: 12, color: "red" }}>
              {this.state.nameError}
            </span>
            <br />
            <label htmlFor="email">Email: </label>
            <br />
            <input
              type="text"
              placeholder="Enter Email"
              value={this.state.email}
              ref={this.email}
              onChange={() => {
                this.setState({ email: this.email.current.value });
              }}
            />
            <span style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </span>
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              value={this.state.password}
              ref={this.password}
              onChange={() => {
                this.setState({ password: this.password.current.value });
              }}
            />
            <span style={{ fontSize: 12, color: "red" }}>
              {this.state.passwordError}
            </span>
            <input
              type="submit"
              value="submit"
              className="btn btn-success offset-3"
              onClick={this.submit}
            />
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}
