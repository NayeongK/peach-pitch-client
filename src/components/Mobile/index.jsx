import styled from "styled-components";
import phone from "../../assets/phone.svg";

function Mobile() {
  return (
    <Container>
      <Phone src={phone} alt="phone is not available" />
      <Message>모바일 기기에서 지원되지 않습니다</Message>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Phone = styled.img`
  width: 250px;
  height: 250px;
  margin-bottom: 25px;
`;

const Message = styled.div`
  font-size: 17.5px;
`;

export default Mobile;
