import React, { useState, useRef } from "react";
import userRequest from "../../Services/UserRequest";

const AddUser = ({ setError, setUsersData }) => {
  const [addData, setAddData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const buttonRef = useRef(null);

  const handleAddSub = async (e) => {
    e.preventDefault();

    // Validation check
    if (!addData.name || !addData.email || !addData.password) {
      setError(true);
      return;
    }

    const AddApiRes = await userRequest.addUser(addData);
    if (AddApiRes.error) {
      setError(true);
    } else {
      setUsersData([]);
      buttonRef.current.click();
    }
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Add User
            </h5>
            <button
              ref={buttonRef}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-start">
            <form onSubmit={handleAddSub}>
              <div className="mb-3">
                <label htmlFor="exampleInputName1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                  value={addData.name}
                  onChange={(e) => {
                    setAddData({ ...addData, name: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={addData.email}
                  onChange={(e) => {
                    setAddData({ ...addData, email: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={addData.password}
                  onChange={(e) => {
                    setAddData({ ...addData, password: e.target.value });
                  }}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
