// import React, { Component } from "react";
// import { createUser } from "../services/userService";
// import { User } from "../interfaces/UserInterfaces";
 import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { connect } from "react-redux";
import { createUserRequest } from "../redux/actions/userActions";
// import UserForm from "./UserForm";

// interface State {
//   title: string;
//   author: string;
//   redirect: boolean;
// }



// class CreateUser extends Component<Props, State> {
//   state: State = {
//     title: "",
//     author: "",
//     redirect: false,
//   };

//   handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     } as unknown as Pick<State, keyof State>);
//   };

  
//   handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("create user e",e)
//     const { title, author } = this.state;
//     const newUser: User = 
//     {
//         "id": 1,
//         "firstName": "Emily",
//         "lastName": "Johnson",
//         "maidenName": "Smith",
//         "age": 28,
//         "gender": "female",
//         "email": "emily.johnson@x.dummyjson.com",
//         "phone": "+81 965-431-3024",
//         "username": "emilys",
//         "password": "emilyspass",
//         "birthDate": "1996-5-30",
//         "image": "https://dummyjson.com/icon/emilys/128",
//         "bloodGroup": "O-",
//         "height": 193.24,
//         "weight": 63.16,
//         "eyeColor": "Green",
//         "ip": "42.48.100.32",
//         "macAddress": "47:fa:41:18:ec:eb",
//         "university": "University of Wisconsin--Madison",
//         "ein": "977-175",
//         "ssn": "900-590-289",
//         "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
//         "role": "admin",
//         "hair": {
//             "id": null,
//             "color": "Brown",
//             "type": "Curly"
//         },
//         "address": {
//             "id": null,
//             "address": "626 Main Street",
//             "city": "Phoenix",
//             "state": "Mississippi",
//             "stateCode": "MS",
//             "postalCode": "29112",
//             "country": "United States",
//             "coordinates": {
//                 "lat": -77.16213,
//                 "lng": -92.084824
//             }
//         },
//         "bank": {
//             "id": null,
//             "cardExpire": "03/26",
//             "cardNumber": "9289760655481815",
//             "cardType": "Elo",
//             "currency": "CNY",
//             "iban": "YPUXISOBI7TTHPK2BR3HAIXL"
//         },
//         "company": {
//             "id": null,
//             "name": "Dooley, Kozey and Cronin",
//             "department": "Engineering",
//             "title": "Sales Manager",
//             "address": {
//                 "id": null,
//                 "address": "263 Tenth Street",
//                 "city": "San Francisco",
//                 "state": "Wisconsin",
//                 "stateCode": "WI",
//                 "postalCode": "37657",
//                 "country": "United States",
//                 "coordinates": {
//                     "lat": 71.814525,
//                     "lng": -161.150263
//                 }
//             }
//         },
//         "crypto": {
//             "id": null,
//             "coin": "Bitcoin",
//             "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
//             "network": "Ethereum (ERC20)"
//         }
//     };
//    // this.props.createUser(newUser);
//     await createUser(newUser);
//     this.setState({ redirect: true });
//   };

//   render() {
//     if (this.state.redirect) {
//       return <Navigate to="/" />;
//     }

//     return (
//       <div className="create-user">
//         <h2>Create User</h2>
//         <UserForm
//           title={this.state.title}
//           author={this.state.author}
//           onChange={this.handleChange}
//           onSubmit={this.handleSubmit}
//           buttonText="Create"
//         />
//         {/* <form onSubmit={this.handleSubmit}>
//           <label>Title:</label>
//           <input type="text" name="title" value={this.state.title} onChange={this.handleChange} required />
//           <label>Author:</label>
//           <input type="text" name="author" value={this.state.author} onChange={this.handleChange} required />
//           <button type="submit">Create</button>
//         </form> */}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state: RootState): StateProps => ({
//   user: state.userReducer.user, 
//   loading: state.userReducer.loading, 
// });

// const mapDispatchToProps = (dispatch: any): DispatchProps => ({
//   createUser: (user:User) => dispatch(createUserRequest(user)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);


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


