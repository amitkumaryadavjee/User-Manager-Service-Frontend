import React, { Component } from "react";
import { User } from "../interfaces/UserInterfaces";

interface UserFormProps {
  user: User;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onNestedChange: <K extends keyof User>(section: K, key: keyof User[K], value: any) => void;
  onSubmit: (e: React.FormEvent) => void;
  buttonText: string;
}

class UserForm extends Component<UserFormProps> {
  render() {
    const { user, onChange, onNestedChange, onSubmit, buttonText } = this.props;

    return (
      <form onSubmit={onSubmit} className="container mt-5">
        <h3 className="mb-4">User Information</h3>

        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">First Name:</label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={user.firstName}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">Last Name:</label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={user.lastName}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">Email:</label>
          <div className="col-md-9">
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={onChange}
              required
            />
          </div>
        </div>

    
        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">Phone:</label>
          <div className="col-md-9">
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={user.phone}
              onChange={onChange}
              required
            />
          </div>
        </div>


        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">Age:</label>
          <div className="col-md-9">
            <input
              type="age"
              className="form-control"
              name="age"
              value={user.age}
              onChange={onChange}
              required
            />
          </div>
        </div>



        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">Gender:</label>
          <div className="col-md-9">
            <input
              type="gender"
              className="form-control"
              name="gender"
              value={user.gender}
              onChange={onChange}
              required
            />
          </div>
        </div>


        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">Blood Group:</label>
          <div className="col-md-9">
            <input
              type="bloodGroup"
              className="form-control"
              name="bloodGroup"
              value={user.bloodGroup}
              onChange={onChange}
              required
            />
          </div>
        </div>


        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">Role:</label>
          <div className="col-md-9">
            <input
              type="role"
              className="form-control"
              name="role"
              value={user.role}
              onChange={onChange}
              required
            />
          </div>
        </div>


        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">username:</label>
          <div className="col-md-9">
            <input
              type="username"
              className="form-control"
              name="username"
              value={user.username}
              onChange={onChange}
              required
            />
          </div>
        </div>


        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">password:</label>
          <div className="col-md-9">
            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              onChange={onChange}
              required
            />
          </div>
        </div>
        


        <h3 className="mb-4">Address</h3>

        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">address:</label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              value={user.address.address}
              onChange={(e) => onNestedChange("address", "address", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">City:</label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              value={user.address.city}
              onChange={(e) => onNestedChange("address", "city", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">State:</label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              value={user.address.state}
              onChange={(e) => onNestedChange("address", "state", e.target.value)}
              required
            />
          </div>
        </div>

 
        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">Country:</label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              value={user.address.country}
              onChange={(e) => onNestedChange("address", "country", e.target.value)}
              required
            />
          </div>
        </div>

        <h3 className="mb-4">Hair Details</h3>

      
        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">Hair Color:</label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              value={user.hair.color}
              onChange={(e) => onNestedChange("hair", "color", e.target.value)}
            />
          </div>
        </div>

      
        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">Hair Type:</label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              value={user.hair.type}
              onChange={(e) => onNestedChange("hair", "type", e.target.value)}
            />
          </div>
        </div>


        <h3 className="mb-4">Bank Details</h3>


        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">Card Number:</label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              value={user.bank.cardNumber}
              onChange={(e) => onNestedChange("bank", "cardNumber", e.target.value)}
            />
          </div>
        </div>


        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">Card Expire:</label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              value={user.bank.cardExpire}
              onChange={(e) => onNestedChange("bank", "cardExpire", e.target.value)}
            />
          </div>
        </div>


        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">Card Type:</label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              value={user.bank.cardType}
              onChange={(e) => onNestedChange("bank", "cardType", e.target.value)}
            />
          </div>
        </div>



        <h3 className="mb-4">Company Details</h3>
      
        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">Company Name:</label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              value={user.company.name}
              onChange={(e) => onNestedChange("company", "name", e.target.value)}
            />
          </div>
        </div>

      
        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">department:</label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              value={user.company.department}
              onChange={(e) => onNestedChange("company", "department", e.target.value)}
            />
          </div>
        </div>

        
        <div className="mb-3 d-flex align-items-center">
          <label className="col-md-3 col-form-label">title:</label>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              value={user.company.title}
              onChange={(e) => onNestedChange("company", "title", e.target.value)}
            />
          </div>
        </div>


        <div className="mb-3">
          <button type="submit" className="btn btn-primary w-100">
            {buttonText}
          </button>
        </div>
      </form>
    );
  }
}

export default UserForm;
