import React, { useRef } from "react";

const Modal = React.forwardRef((props, ref) => (
  <>
    <div className="modal" ref={ref}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={props.onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
        </div>
      </div>
    </div>
  </>
));

export default Modal;
