import styled from "styled-components";

export const Privacypolicy = () => {
  return (
    <CheckboxContainer>
      <CheckboxInput
        name="privacypolicy"
        type="checkbox"
        id="privacypolicy"
        required
        defaultChecked
      />
      <Label htmlFor="privacypolicy">
        I've read privacy policy & agree to all t&c.
      </Label>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.8rem;
  align-items: center;
`;

const CheckboxInput = styled.input`
  width: 1rem;
  height: 1rem;
`;

export const Label = styled.label`
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
`;
