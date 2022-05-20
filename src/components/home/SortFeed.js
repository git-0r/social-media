import { useDispatch } from "react-redux";
import styled from "styled-components";
import { sortFeed } from "../../redux/feedSlice";

const SortFeed = () => {
  const dispatch = useDispatch();
  const sortPosts = (e) => {
    dispatch(sortFeed({ by: e.target.value }));
  };
  return (
    <Select onChange={sortPosts}>
      <Option value="Recent">Recent</Option>
      <Option value="Trending">Trending</Option>
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
