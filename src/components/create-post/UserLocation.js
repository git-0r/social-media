import styled from "styled-components";

const UserLocation = ({ getLocation }) => {
  return (
    <LocationIconWrapper onClick={getLocation}>
      <ion-icon name="location-outline" size="large"></ion-icon>
    </LocationIconWrapper>
  );
};

export default UserLocation;

const LocationIconWrapper = styled.div`
  &:hover {
    color: ${({ theme }) => theme.blueColor};
  }
`;
