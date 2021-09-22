import styled from "styled-components";

export default function FormContainer(): JSX.Element {
  return (
    <Container>
      <Title>
        Let&apos;s plan your <strong>saving goal.</strong>
      </Title>
      <Body />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Title = styled.p`
  font-size: 20px;
  color: #1b31a8;
  margin-bottom: 10px;
`;

const Body = styled.div`
  width: 560px;
  height: 511px;
  background-color: #fff;
  border-radius: 8px;
`;
