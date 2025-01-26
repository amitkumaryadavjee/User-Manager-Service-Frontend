
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { connect } from "react-redux";
import { createUserRequest } from "../redux/actions/userActions";
import React, { Component } from "react";
import { createUser } from "../services/userService";
import { User } from "../interfaces/UserInterfaces";
import UserForm from "./UserForm";

interface State {
  user: User;
  redirect: boolean;
}

interface StateProps {
  user: User | null;
  loading: boolean;
}

interface DispatchProps {
  createUser: (user:User) => void;
}
type Props = StateProps & DispatchProps;

class CreateUser extends Component<Props, State> {
//class CreateUser extends Component<{}, State> {
  state: State = {
    user: {
      id: 0,
      firstName: "",
      lastName: "",
      maidenName: "",
      age: 0,
      gender: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      birthDate: "",
      image: "",
      bloodGroup: "",
      height: 0,
      weight: 0,
      eyeColor: "",
      ip: "",
      macAddress: "",
      university: "",
      ein: "",
      ssn: "",
      userAgent: "",
      role: "",
      hair: { id: null, color: "", type: "" },
      address: {
        id: null,
        address: "",
        city: "",
        state: "",
        stateCode: "",
        postalCode: "",
        country: "",
        coordinates: { lat: 0, lng: 0 },
      },
      bank: { id: null, cardExpire: "", cardNumber: "", cardType: "", currency: "", iban: "" },
      company: {
        id: null,
        name: "",
        department: "",
        title: "",
        address: {
          id: null,
          address: "",
          city: "",
          state: "",
          stateCode: "",
          postalCode: "",
          country: "",
          coordinates: { lat: 0, lng: 0 },
        },
      },
      crypto: { id: null, coin: "", wallet: "", network: "" },
    },
    redirect: false,
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      user: { ...prevState.user, [name]: value },
    }));
  };

  handleNestedChange = <K extends keyof User>(
    section: K,
    key: keyof User[K],
    value: any
  ) => {
    if (typeof this.state.user[section] === "object" && this.state.user[section] !== null) {
      this.setState((prevState) => ({
        user: {
          ...prevState.user,
          [section]: {
            ...(prevState.user[section] as Record<string, any>),
            [key]: value,
          },
        },
      }));
    } else {
      console.error(`Section ${section} is not an object.`);
    }
  };
  

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    this.props.createUser(this.state.user);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }

    return (
      <div className="create-user">
        <h2>Create User</h2>
        <UserForm
          user={this.state.user}
          onChange={this.handleChange}
          onNestedChange={this.handleNestedChange}
          onSubmit={this.handleSubmit}
          buttonText="Create"
        />
      </div>
    );
  }
}


const mapStateToProps = (state: RootState): StateProps => ({
  user: state.userReducer.user, 
  loading: state.userReducer.loading, 
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  createUser: (user:User) => dispatch(createUserRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);


