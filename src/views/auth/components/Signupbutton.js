import { SignupButton } from "../styles";

export const Signupbutton = ({ isLoading }) => {
  return (
    <SignupButton disabled={isLoading}>
      {isLoading ? (
        <ion-icon name="flash-outline"></ion-icon>
      ) : (
        <>
          Create <ion-icon name="arrow-forward"></ion-icon>
        </>
      )}
    </SignupButton>
  );
};
