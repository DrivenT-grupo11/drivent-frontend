import React from 'react';
import GithubIcon from "mdi-react/GithubIcon";
import styled from 'styled-components';

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
        <Button onClick={this.redirectToGitHub}><GithubIcon/><p>Login with GitHub</p></Button>
      );
    }
  }
  
  export default GitButton;

  const Button = styled.button`
  margin-top: 5px;
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center
`;