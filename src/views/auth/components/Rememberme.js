import { CheckboxContainer, CheckboxInput, Label } from "../styles";

export const Rememberme = () => {
  return (
    <CheckboxContainer>
      <CheckboxInput name="rememberme" type="checkbox" id="rememberme" />
      <Label htmlFor="rememberme">Remember me</Label>
    </CheckboxContainer>
  );
};
