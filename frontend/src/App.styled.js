import styled from '@emotion/styled'

export const ButtonStyled = styled.button`
  align-items: center;
  background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 4px;
  box-shadow: rgba(151, 65, 252, 0.6) 0px 0px 3px 2px;
  box-sizing: border-box;
  color: black;
  font-size: 20px;
  line-height: 1em;
  max-width: 100%;
  width: 100px;
  height: 33px;
  cursor: pointer;
  margin-left: 0.5vw;
  position: relative;
  top: 10vw;
  left: 45%;

  &:hover {
  
  box-shadow: rgba(151, 65, 252, 0.6) 0px 0px 10px 4px;
  box-sizing: border-box;
 }
`;

export const AboutMe = styled.div`
display:flex;
flex-direction: column;

`;

export const Item = styled.div`
position: relative;
left: 45%;
top: 10vh;
color: white;

`;

export const HomePage = styled.div`
background: black;
height: 100vh;
`;