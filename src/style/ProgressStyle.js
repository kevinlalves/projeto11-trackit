import styled from "styled-components";

const ProgressStyle = styled.div`
  position: relative;
  height: 91px;
  width: 91px;
  margin-bottom: 40px;
  p {
    position: absolute;
    top: 35px;
    left: 25px;
    color: ${props => props.theme.color.secondary};
  }
`;

export default ProgressStyle;
