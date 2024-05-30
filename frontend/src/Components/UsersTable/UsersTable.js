import React, { useEffect } from "react";

const UsersTable = ({usersData, setEditUserId, setError, setDeleteUserId }) => {

    const handleEdit = (id) => {
    setEditUserId(id);
  };
  
    const handleDelete = (id) => {
      setDeleteUserId(id);
    };
    
  return (
    <main class="py-6 bg-surface-secondary">
      <div class="container-fluid">
        <div class="card shadow border-0 mb-7">
          <div class="card-header">
            <h5 class="mb-0">Users</h5>
          </div>
          <div class="table-responsive">
            <table class="table table-hover table-nowrap">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Create Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {usersData &&
                  usersData.length &&
                  usersData.map((item) => {
                    return (
                      <tr>
                        <td>{item.id}</td>
                        <td>
                          <img
                            alt="..."
                            src={`https://robohash.org/${item.email}`}
                            class="avatar avatar-sm rounded-circle me-2"
                          />
                          <a class="text-heading font-semibold" href="#">
                            {item.name}
                          </a>
                        </td>

                        <td>{item.email}</td>
                        <td>{item.createdAt}</td>
                        <td>
                          <a
                            onClick={() => handleEdit(item.id)}
                            href="#"
                            class="btn btn-sm btn-neutral"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdropEdit"
                          >
                            Edit
                          </a>
                          <button
                            onClick={() => handleDelete(item.id)}
                            type="button"
                            class="btn btn-sm btn-square btn-neutral text-danger-hover"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdropDelete"
                          >
                            <i class="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div class="card-footer border-0 py-5">
            <span class="text-muted text-sm">
              Showing {usersData.length} items
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UsersTable;
