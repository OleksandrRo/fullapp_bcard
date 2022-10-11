import { ButtonStyled } from "../App.styled";

export const ClickButton = (props) => {
    return <ButtonStyled type="button" onClick={props.fetchData}>Click</ButtonStyled>

};