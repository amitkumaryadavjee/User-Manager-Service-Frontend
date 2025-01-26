
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserRequest , deleteUserRequest} from "../redux/actions/userActions";
import { User } from "../interfaces/UserInterfaces";
import { RootState } from "../redux/store";
import { getUsers, deleteUser } from "../services/userService";

interface StateProps {
  users: User[];
  loading: boolean;
}

interface DispatchProps {
  fetchUsers: () => [];
  deleteUser: (id:number) => void;
}

type Props = StateProps & DispatchProps;

interface State {
  users: User[];
  loading: boolean;
}

class UserList extends Component<Props, State> {
  state: State = {
    users: [],
    loading: true,
  };

  componentDidMount() {
    this.props.fetchUsers();
  }
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
   
      //const users = await getUsers();
      if(this.props.users !== prevProps.users){
        try {
      let users = this.props.users;
      console.log("Backend users", users);
      this.setState({ users, loading: false });
    
    } catch (error) {
      console.error("Error fetching users:", error);
      this.setState({ loading: false });
    }}
  }

  handleDelete = async (id: number) => {
    try {
      //await deleteUser(id);
      this.props.deleteUser(id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  render() {
    const { users, loading } = this.state;


    return (
      <div className="user-list">
        <h2>User List</h2>
        {loading ? (
          <p>Loading...</p>
        ) : users.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Role</th>
                <th>address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.firstName} {user.maidenName} {user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.age}</td>
                  <td>{user.role}</td>
                  <td>{user.address.address}, {user.address.city}, {user.address.state}, {user.address.country}</td>
                  <td>
                    <Link to={`/view/${user.id}`}>View</Link> |{" "}
                    {/* <Link to={`/edit/${user.id}`}>Edit</Link> |{" "} */}
                    <button onClick={() => this.handleDelete(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users available.</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  users: state.userReducer.users,
  loading: state.userReducer.loading,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  fetchUsers: () => dispatch(fetchUserRequest()),
  deleteUser :(id) => dispatch(deleteUserRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
