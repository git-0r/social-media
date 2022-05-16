import styled from "styled-components";

export const Rememberme = () => {
  return (
    <CheckboxContainer>
      <CheckboxInput name="rememberme" type="checkbox" id="rememberme" />
      <Label htmlFor="rememberme">Remember me</Label>
    </CheckboxContainer>
  );
};

const Label = styled.label`
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.8rem;
  align-items: center;
`;
export const CheckboxInput = styled.input`
  width: 1rem;
  height: 1rem;
`;
