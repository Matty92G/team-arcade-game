import { signOutWithGoogle } from '../../data/Firebase';

const SignOut = () => {
  if (localStorage.getItem('token')) {
    return (
      <div className="SignOut">
        <div className="option-container">
          <div className="option-trigger">
            <img src={localStorage.getItem('profilePic')}></img>
          </div>
          <div className="option-menu">
            <div className="option-menu-trigger">
              {localStorage.getItem('nickname')}
            </div>
            <button
              className="login-with-google-btn"
              onClick={signOutWithGoogle}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default SignOut;
