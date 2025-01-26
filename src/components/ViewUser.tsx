// import React, { Component } from "react";
// import { User } from "../interfaces/Users";
// import { getUserById } from "../services/userService";
// import { Link } from "react-router-dom";
// import { withRouter, RouteComponentProps } from "../utils/withRouter"; // Custom HOC for routing

// interface MatchParams {
//   id: string;
// }

// interface ViewUserProps extends RouteComponentProps<MatchParams> {}

// interface ViewUserState {
//   user: User | null;
//   loading: boolean;
//   error: string | null;
// }

// class ViewUser extends Component<ViewUserProps, ViewUserState> {
//   constructor(props: ViewUserProps) {
//     super(props);
//     this.state = {
//       user: null,
//       loading: true,
//       error: null,
//     };
//   }

//   componentDidMount() {
//     const { id } = this.props.params; // Extract 'id' from the params
//     this.fetchUserDetails(id);
//   }

//   async fetchUserDetails(id: string) {
//     try {
//       const user = await getUserById(id);
//       this.setState({ user, loading: false });
//     } catch (error: any) {
//       this.setState({
//         error: error.message || "Failed to fetch user details",
//         loading: false,
//       });
//     }
//   }

//   render() {
//     const { user, loading, error } = this.state;

//     if (loading) {
//       return <div>Loading user details...</div>;
//     }

//     if (error) {
//       return <div>Error: {error}</div>;
//     }

//     if (!user) {
//       return <div>User not found.</div>;
//     }

//     return (
//       <div className="view-user">
//         <h2>View User</h2>
//         <div>
//           <strong>Title:</strong> {user.title}
//         </div>
//         <div>
//           <strong>Author:</strong> {user.author}
//         </div>
//         <div>
//           <Link to="/">Back to User List</Link>
//         </div>
//       </div>
//     );
//   }
// }

// export default withRouter(ViewUser);

import React, { Component } from "react";
import { User } from "../interfaces/UserInterfaces"; // Updated User
import { getUserById } from "../services/userService";
import { Link } from "react-router-dom";
import { withRouter, RouteComponentProps } from "../utils/withRouter"; // Custom HOC for routing

interface MatchParams {
  id: number;
}

interface ViewUserProps extends RouteComponentProps<MatchParams> {}

interface ViewUserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

class ViewUser extends Component<ViewUserProps, ViewUserState> {
  constructor(props: ViewUserProps) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    console.log("id:",id);
    this.fetchUserDetails(id);
  }

  async fetchUserDetails(id: number) {
    try {
      const user = await getUserById(id);
      this.setState({ user, loading: false });
    } catch (error: any) {
      this.setState({
        error: error.message || "Failed to fetch user details",
        loading: false,
      });
    }
  }

  render() {
    const { user, loading, error } = this.state;

    if (loading) {
      return <div>Loading user details...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!user) {
      return <div>User not found.</div>;
    }

    return (
      <div className="view-user">
        <h2>View User</h2>
        <div>
          <strong>ID:</strong> {user.id}
        </div>
        <div>
          <strong>First Name:</strong> {user.firstName}
        </div>
        <div>
          <strong>Last Name:</strong> {user.lastName}
        </div>
        <div>
          <strong>Maiden Name:</strong> {user.maidenName}
        </div>
        <div>
          <strong>Age:</strong> {user.age}
        </div>
        <div>
          <strong>Gender:</strong> {user.gender}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        <div>
          <strong>Phone:</strong> {user.phone}
        </div>
        <div>
          <strong>Username:</strong> {user.username}
        </div>
        <div>
          <strong>Password:</strong> {user.password}
        </div>
        <div>
          <strong>Birth Date:</strong> {user.birthDate}
        </div>
        <div>
          <strong>Image:</strong> <img src={user.image} alt={user.firstName} />
        </div>
        <div>
          <strong>Blood Group:</strong> {user.bloodGroup}
        </div>
        <div>
          <strong>Height:</strong> {user.height} cm
        </div>
        <div>
          <strong>Weight:</strong> {user.weight} kg
        </div>
        <div>
          <strong>Eye Color:</strong> {user.eyeColor}
        </div>
        <div>
          <strong>IP:</strong> {user.ip}
        </div>
        <div>
          <strong>MAC Address:</strong> {user.macAddress}
        </div>
        <div>
          <strong>University:</strong> {user.university}
        </div>
        <div>
          <strong>EIN:</strong> {user.ein}
        </div>
        <div>
          <strong>SSN:</strong> {user.ssn}
        </div>
        <div>
          <strong>User Agent:</strong> {user.userAgent}
        </div>
        <div>
          <strong>Role:</strong> {user.role}
        </div>
        <div>
          <strong>Hair:</strong> {user.hair.color}, {user.hair.type}
        </div>
        <div>
          <strong>Address:</strong> {user.address.address}, {user.address.city}, {user.address.state} ({user.address.stateCode}), {user.address.postalCode}, {user.address.country}
        </div>
        <div>
          <strong>Coordinates:</strong> Latitude {user.address.coordinates.lat}, Longitude {user.address.coordinates.lng}
        </div>
        <div>
          <strong>Bank:</strong> Card {user.bank.cardType} ending in {user.bank.cardNumber.slice(-4)}, Expiry {user.bank.cardExpire}, Currency {user.bank.currency}, IBAN {user.bank.iban}
        </div>
        <div>
          <strong>Company:</strong> {user.company.name}, {user.company.title} in {user.company.department}
        </div>
        <div>
          <strong>Company Address:</strong> {user.company.address.address}, {user.company.address.city}, {user.company.address.state} ({user.company.address.stateCode}), {user.company.address.postalCode}, {user.company.address.country}
        </div>
        <div>
          <strong>Company Coordinates:</strong> Latitude {user.company.address.coordinates.lat}, Longitude {user.company.address.coordinates.lng}
        </div>
        <div>
          <strong>Crypto:</strong> {user.crypto.coin}, Wallet {user.crypto.wallet}, Network {user.crypto.network}
        </div>
        <div>
          <Link to="/">Back to User List</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(ViewUser);
