// import React, { Component } from "react";
// import { getUserById, updateUser } from "../services/userService";
// import { User } from "../interfaces/UserInterfaces";
// import UserForm from "./UserForm";

// interface State {
//   title: string;
//   author: string;
//   redirect: boolean;
// }

// class EditUser extends Component<{ id: string }, State> {
//   state: State = {
//     title: "",
//     author: "",
//     redirect: false,
//   };

//   async componentDidMount() {
//     const user = await getUserById(this.props.id);
//     this.setState({ title: user.title, author: user.author });
//   }
//   handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     } as unknown as Pick<State, keyof State>);
//   };

//   handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const { title, author } = this.state;
//     await updateUser({ id: this.props.id, title, author });
//     this.setState({ redirect: true });
//   };

//   render() {
//     if (this.state.redirect) {
//       return <Navigate to="/" />;
//     }

//     return (
//       <div className="edit-user">
//         <h2>Edit User</h2>
//         <UserForm
//           title={this.state.title}
//           author={this.state.author}
//           onChange={this.handleChange}
//           onSubmit={this.handleSubmit}
//           buttonText="Update"
//         />
//         {/* <form onSubmit={this.handleSubmit}>
//           <label>Title:</label>
//           <input type="text" name="title" value={this.state.title} onChange={this.handleChange} required />
//           <label>Author:</label>
//           <input type="text" name="author" value={this.state.author} onChange={this.handleChange} required />
//           <button type="submit">Update</button>
//         </form> */}
//       </div>
//     );
//   }
// }

// export default (props: any) => {
//   const { id } = useParams<{ id: string }>();
//   return <EditUser id={id || ""} />;
// };

import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { getUserById, updateUser } from "../services/userService";
import { User } from "../interfaces/UserInterfaces";
import UserForm from "./UserForm";
//import { withRouter, RouteComponentProps } from "../utils/withRouter"; // Custom HOC for routing


interface State {
  user: User;
  redirect: boolean;
}

class EditUser extends Component<{ id: string }, State> {
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

  async componentDidMount() {
   // const { id } = useParams(); 
   // Get the id from URL params
    const userId = Number(this.props.id);
    //const userId = Number(this.props.id); // Convert id to a number
    if (isNaN(userId)) {
      console.error("Invalid user ID");
      return;
    }
  
    const user = await getUserById(userId);
    this.setState({ user });

    // const user = await getUserById(this.props.id);
    // this.setState({ user });
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
    e.preventDefault();
    await updateUser(this.state.user);
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


// export default (props: any) => {
//   const { id } = useParams<{ id: string }>();
//   return <EditUser id={id || ""} />;
// };

export default EditUser;

// const EditUserWrapper: React.FC = () => {
//   const { id } = useParams<{ id: string }>();  // Get the 'id' from URL parameters
//   return id ? <EditUser id={id} /> : <p>Invalid ID</p>;  // Pass 'id' as a prop to EditUser
// };

//export default withRouter(EditUser);