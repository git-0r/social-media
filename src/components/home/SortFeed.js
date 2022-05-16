import styled from "styled-components";

const SortFeed = () => {
  return (
    <Select>
      <Option>Recent</Option>
      <Option>Trending</Option>
    </Select>
  );
};

export default SortFeed;

const Select = styled.select`
  font-size: 1.2rem;
  display: block;
  margin-left: auto;
  padding: 0.5rem 1rem;
  color: inherit;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.bgPrimary};
`;

const Option = styled.option`
  font-size: 1rem;
  background-color: ${({ theme }) => theme.bgPrimary};
`;
