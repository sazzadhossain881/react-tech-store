import React, { useContext } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { UserContext } from '../context/user';
import '../index.css';

const Alert = () => {
  const { alert, hideAlert } = useContext(UserContext);

  let css = 'alert-container';
  if (alert.show) {
    css = css + "alert-show";
    if (alert.type === "danger") {
      css = css + "alert-danger";
    }
  }
  return (
    <div className={css}>
      {/* {alert.show ? "alert-show" : null && alert.type === "danger" ? "alert-danger" : null} */}
      <div className="alert">
        <p style={{ textAlign: "center", fontSize: "25px" }} onClick={hideAlert}>
          {alert.show && alert.msg}
          <FaWindowClose></FaWindowClose>
        </p>
      </div>
    </div>
  );
};

export default Alert;