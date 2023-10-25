import React from 'react';

  class GitButton extends React.Component {
    redirectToGitHub = () => {
        const url = "https://github.com/login/oauth/authorize";
        const clientId = "989cdb9179f64ad5ec6e";
        const params = new URLSearchParams({
          reponse_type: "code",
          scope: 'user',
          clientId: clientId,
          redirect_uri: "http://localhost:5173/enroll"
          
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