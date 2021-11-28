import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/user';
import loginUser from '../strapi/loginUser';
import registerUser from '../strapi/registerUser';

const Login = () => {
  const history = useHistory();
  const { userLogin, alert, showAlert } = useContext(UserContext);
  const [username, setUsername] = useState('default');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMember, setIsMember] = useState(true);

  let isEmpty = !email || !password || !username || alert.show;

  const toggleMember = () => {
    setIsMember(prevMember => {
      let isMember = !prevMember;
      isMember ? setUsername('default') : setUsername('');
      return isMember;
    });
  };

  const handleSubmit = async event => {
    showAlert({ msg: 'accessing user data.please wait...' })
    event.preventDefault();
    let response;
    if (isMember) {
      response = await loginUser({ email, password });
    } else {
      response = await registerUser({ username, email, password });
    }
    if (response) {
      const { jwt: token, user: { username } } = response.data;
      const newUser = { token, username };
      userLogin(newUser);
      showAlert({ msg: `you are logged in : ${username}. shop away my friend` });
      history.push("/products");
    } else {
      showAlert({ msg: 'there was an error.please try again...', type: "danger" });
    }
  }

  return (
    <div>
      <section className="form section">
        <h2 className="section-title">
          {isMember ? 'sign in' : 'register'}
        </h2>
        <form className="login-form">
          {!isMember && (
            <div className="form-control">
              <label htmlFor="username">username</label>
              <input type="text" id="username" value={username}
                onChange={(event) => setUsername(event.target.value)} />
            </div>
          )
          }
          <div className="form-control">
            <label htmlFor="email">email</label>
            <input type="email" id="email" value={email}
              onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="form-control">
            <label htmlFor="password">password</label>
            <input type="password" id="password" value={password}
              onChange={(event) => setPassword(event.target.value)} />
          </div>
          {isEmpty && (
            <p className="form-empty"> please fill out all form fields</p>
          )}
          {!isEmpty && <button type="button" className="btn btn-block btn-primary"
            onClick={handleSubmit}>
            submit
            </button>}
          <p className="register-link">
            {isMember ? 'need to register' : 'already a member'}
            <button type="button" onClick={toggleMember}>click here</button>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Login;