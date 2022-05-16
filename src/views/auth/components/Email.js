import { EmailInput, Label } from "../styles";

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
