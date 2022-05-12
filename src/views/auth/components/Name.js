import { Input, Label, NameContainer } from "../styles";

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
