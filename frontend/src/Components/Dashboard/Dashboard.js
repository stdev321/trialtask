import React, { useState, useEffect} from "react";
import AddUser from "../Modals/AddUser";
import UsersTable from "../UsersTable/UsersTable";
import EditUser from "../Modals/EditUser";
import DeleteUser from "../Modals/DeleteUser";
import userRequest from "../../Services/UserRequest";

const Dashboard = () => {
    const [editUserId, setEditUserId] = useState(0)
    const [deleteUserId, setDeleteUserId] = useState(0)
    const [showError, setError] = useState(false);
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        if (usersData.length === 0) {
          setData();
        }
      }, [usersData]);
    
      const setData = async () => {
        const ApiResData = await userRequest.getAllUsers();
        if (ApiResData.error) {
          setError(true);
        } else {
          setUsersData(ApiResData.data);
        }
      };
  return (
    <>
      <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        {/* <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
            id="navbarVertical">
            <div class="container-fluid"> 
                <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
                </a>
                <div class="navbar-user d-lg-none">
                    <div class="dropdown">
                        <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <div class="avatar-parent-child">
                                <img alt="Image Placeholder"
                                    src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                    class="avatar avatar- rounded-circle" />
                                <span class="avatar-child avatar-badge bg-success"></span>
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                            <a href="#" class="dropdown-item">Profile</a>
                            <a href="#" class="dropdown-item">Settings</a>
                            <a href="#" class="dropdown-item">Billing</a>
                            <hr class="dropdown-divider" />
                            <a href="#" class="dropdown-item">Logout</a>
                        </div>
                    </div>
                </div>
                <div class="collapse navbar-collapse" id="sidebarCollapse">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="bi bi-house"></i> Dashboard
                            </a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="bi bi-people"></i> Users
                            </a>
                        </li>
                    </ul>
                    <hr class="navbar-divider my-5 opacity-20" />
                    <div class="mt-auto"></div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="bi bi-box-arrow-left"></i> Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}
        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          <header class="bg-surface-primary border-bottom pt-6">
            <div class="container-fluid">
              <div class="mb-npx">
                <div class="row align-items-center">
                  <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                    <h1 class="h2 mb-0 ls-tight">Trial Test</h1>
                  </div>
                  <div class="col-sm-6 col-12 text-sm-end">
                    <div class="mx-n1">
                      <button
                        href="#"
                        class="btn d-inline-flex btn-sm btn-primary mx-1"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <span class=" pe-2">
                          <i class="bi bi-plus"></i>
                        </span>
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="nav nav-tabs mt-4 overflow-x border-0"></ul>
            </div>
          </header>

        <UsersTable usersData={usersData} setEditUserId={setEditUserId} setError= {setError} setDeleteUserId={setDeleteUserId} />

          <AddUser setError={setError} setUsersData={setUsersData} />

          <EditUser editUserId={editUserId} setEditUserId={setEditUserId} setError={setError} setUsersData={setUsersData} />

          <DeleteUser deleteUserId={deleteUserId} setDeleteUserId={setDeleteUserId} setError={setError} setUsersData={setUsersData}/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
