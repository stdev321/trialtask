import React, { useEffect, useState, useRef } from "react";
import userRequest from "../../Services/UserRequest";

const EditUser = ({ setUsersData, setEditUserId, editUserId, setError }) => {
  const [editData, setEditData] = useState({});
  const buttonRef = useRef(null);

  useEffect(() => {
    if (editUserId !== 0) {
      getEditUserData();
    }
  }, [editUserId]);

  const getEditUserData = async () => {
    const ApiResData = await userRequest.getUserById(editUserId);
    if (ApiResData.error) {
      setError(true);
    } else {
      setEditData(ApiResData.data);
    }
  };

  const handleEditSub = async () => {
    const EditApiRes = await userRequest.editUser(editData, editUserId);
    if (EditApiRes.error) {
      setError(true);
    } else {
      setUsersData([]);
      setEditUserId(0);
      buttonRef.current.click();
    }
  };
  return (
    <div
      class="modal fade"
      id="staticBackdropEdit"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Edit User
            </h5>
            <button
              ref={buttonRef}
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body text-start">
            <div class="mb-3">
              <label for="exampleInputName1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputName1"
                value={editData.name}
                onChange={(e) => {
                  setEditData({ ...editData, name: e.target.value });
                }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                value={editData.email}
                onChange={(e) => {
                  setEditData({ ...editData, email: e.target.value });
                }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                onChange={(e) => {
                  setEditData({ ...editData, password: e.target.value });
                }}
              />
            </div>

            <button
              onClick={() => handleEditSub()}
              type="submit"
              class="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
