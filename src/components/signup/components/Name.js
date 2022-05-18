import styled from "styled-components";

export const Name = () => {
  return (
    <>
      <Label htmlFor="lastname">Name</Label>
      <NameContainer>
        <Input
          id="firstname"
          name="firstname"
          type="text"
          minLength={3}
          required
          placeholder="First name"
        ></Input>
        <Input
          id="lastname"
          name="lastname"
          type="text"
          placeholder="Last name"
        ></Input>
      </NameContainer>
    </>
  );
};

const Label = styled.label`
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
`;

const NameContainer = styled.div`
  display: flex;
  gap: 1rem;
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
