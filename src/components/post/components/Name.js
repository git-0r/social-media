import styled from "styled-components";

const Name = ({ firstname, lastname, username }) => {
  return (
    <NameWrapper>
      <FullName>
        {firstname} {lastname}
      </FullName>
      <Username>@{username}</Username>
    </NameWrapper>
  );
};

export default Name;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FullName = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 1.2rem;
`;
const Username = styled.p`
  display: inline-block;
  color: ${({ theme }) => theme.colorSecondary};
  margin: 0;
`;
