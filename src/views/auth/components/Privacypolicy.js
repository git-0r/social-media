import { CheckboxContainer, CheckboxInput, Label } from "../styles";

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
