import { Input, Label } from "../styles";

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
