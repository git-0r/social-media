import styled from "styled-components";

export const Email = () => {
  return (
    <>
      <Label htmlFor="email">Email</Label>
      <EmailInput
        id="email"
        name="email"
        type="email"
        required
        placeholder="bisque@gmail.com"
      ></EmailInput>
    </>
  );
};

const Label = styled.label`
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
`;

const EmailInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-family: inherit;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.borderColor};

  &:valid:not(:placeholder-shown) {
    outline: 1px solid ${({ theme }) => theme.greencolor};
    border: none;
  }
  &:invalid:not(:placeholder-shown) {
    outline: 1px solid ${({ theme }) => theme.redColor};
    border: none;
  }
`;
