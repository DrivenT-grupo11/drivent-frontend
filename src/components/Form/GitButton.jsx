import React from 'react';

  class GitButton extends React.Component {
    redirectToGitHub = () => {
        const url = "https://github.com/login/oauth/authorize";
        const CLIENT_ID = "989cdb9179f64ad5ec6e";
        const params = new URLSearchParams({
          reponse_type: "code",
          scope: 'user',
          client_id: CLIENT_ID,
          redirect_uri: "http://localhost:5173/enroll",
          state: 't10'
        })
        const authURL = `${url}?${params.toString()}`;
        window.location.href = authURL;
      }
  
    render() {
      return (
        <button onClick={this.redirectToGitHub}></button>
      );
    }
  }
  
  export default GitButton;