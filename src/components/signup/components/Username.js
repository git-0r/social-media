import styled from "styled-components";

export const Username = () => {
  return (
    <>
      <Label>Username</Label>
      <Input
        type="text"
        id="username"
        name="username"
        required
        minLength={5}
        placeholder="Username"
      ></Input>
    </>
  );
};

const Label = styled.label`
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-family: inherit;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.borderColor};

  &:valid:not(:placeholder-shown) {
    outline: 1px solid ${({ theme }) => theme.greenColor};
    border: none;
  }
  &:invalid:not(:placeholder-shown) {
    outline: 1px solid ${({ theme }) => theme.redColor};
    border: none;
  }
`;
