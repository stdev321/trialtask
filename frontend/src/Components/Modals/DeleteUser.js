import React, {useRef} from "react";
import userRequest from "../../Services/UserRequest";

const DeleteUser = ({ deleteUserId, setUsersData, setError, setDeleteUserId }) => {
  const buttonRef = useRef(null);

  const handleDelete = async () => {
    const ApiResData = await userRequest.delUser(deleteUserId);
    if (ApiResData.error) {
      setError(true);
    } else {
      setUsersData([])
      setDeleteUserId(0);
      buttonRef.current.click();
    }
  };

  const handleNo = () => { 
    setDeleteUserId(0);
    buttonRef.current.click();
  }
  return (
    <div
      class="modal fade"
      id="staticBackdropDelete"
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
              Delete User
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
            {/* <svg height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.146 192.146">
                                <g>
                                    <g>
                                        <g>
                                            <path style="fill:#e11d48;" d="M108.186,144.372c0,7.054-4.729,12.32-12.037,12.32h-0.254c-7.054,0-11.92-5.266-11.92-12.32
				c0-7.298,5.012-12.31,12.174-12.31C103.311,132.062,108.059,137.054,108.186,144.372z M88.44,125.301h15.447l2.951-61.298H85.46
				L88.44,125.301z M190.372,177.034c-2.237,3.664-6.214,5.921-10.493,5.921H12.282c-4.426,0-8.51-2.384-10.698-6.233
				c-2.159-3.849-2.11-8.549,0.147-12.349l84.111-149.22c2.208-3.722,6.204-5.96,10.522-5.96h0.332
				c4.445,0.107,8.441,2.618,10.513,6.546l83.515,149.229C192.717,168.768,192.629,173.331,190.372,177.034z M179.879,170.634
				L96.354,21.454L12.292,170.634H179.879z" />
                                        </g>
                                    </g>
                                </g>
                            </svg> */}
            <span class="ms-3">Are sure you want to delete this user?</span>
          </div>
          <div class="modal-footer">
            <button
              onClick={() => handleNo()}
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              No
            </button>
            <button onClick={() => handleDelete()} type="button" class="btn btn-primary">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
