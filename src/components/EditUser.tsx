

import React, { Component } from "react";
import { Navigate } from "react-router-dom";
//import { getUserById, updateUser } from "../services/userService";
import { User } from "../interfaces/UserInterfaces";
import UserForm from "./UserForm";
import { withRouter, RouteComponentProps } from "../utils/withRouter"; // Custom HOC for routing
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import { updateUserRequest} from "../redux/actions/userActions";
interface MatchParams {
  id: number;
}

interface EditUserProps extends StateProps, DispatchProps{
  users: User[];
  params: MatchParams;
}

interface State {
  user: User ;
  redirect: boolean;
}

interface StateProps {
  users: User[];
}

interface DispatchProps {
  updateUser: (user:User) => void;
}

class EditUser extends Component<EditUserProps, State> {
  constructor(props: EditUserProps) {
    super(props);
    this.state = {
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
}

  async componentDidMount() {
    const { id } = this.props.params;
    const { users, params } = this.props;
    const userId = Number(id);
    if (users) {
      const user = users.find((u) => u.id === userId) || this.state.user;
      this.setState({ user, redirect: false });

    }
  
  }

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
    this.props.updateUser(this.state.user);
    e.preventDefault();
    // await updateUser(this.state.user);
    
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }

    return (
      <div className="edit-user">
        <h2>Edit User</h2>
        <UserForm
          user={this.state.user}
          onChange={this.handleChange}
          onNestedChange={this.handleNestedChange}
          onSubmit={this.handleSubmit}
          buttonText="Update"
        />
      </div>
    );
  }
}


const mapStateToProps = (state: RootState): StateProps => ({
  users: state.userReducer.users,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  updateUser: (user:User) => dispatch(updateUserRequest(user)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditUser));

