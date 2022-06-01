import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useUserProfiles from "../../hooks/useUserProfiles";
import { updateFollowing } from "../../redux/authSlice";
import { followService } from "../../services/FollowService";
import { medium } from "../../styles/responsive";

export const HomeRight = () => {
  const currentUser = useSelector((state) => state?.auth?.user);
  const { userData } = useUserProfiles({ _id: currentUser?._id });
  const dispatch = useDispatch();

  const handleFollowers = async (data) => {
    const res = await followService(data);
    dispatch(updateFollowing(res));
  };

  return (
    <ContainerRight>
      <Title>People you may know</Title>
      {userData?.map?.((user) => (
        <Card key={user?._id}>
          <Link to={`/profile/${user?.username}`}>
            <UserAvatar src={user?.avatar} />
          </Link>
          <Fullname>
            {user?.firstname} {user?.lastname}
            {currentUser?.following?.includes(user?._id) ? (
              <FollowingButton
                onClick={() =>
                  handleFollowers({
                    userId: user?._id,
                    _id: currentUser?._id,
                    type: "unfollow",
                  })
                }
              >
                Following
              </FollowingButton>
            ) : (
              <FollowButton
                onClick={() =>
                  handleFollowers({
                    userId: user?._id,
                    _id: currentUser?._id,
                    type: "follow",
                  })
                }
              >
                Follow
              </FollowButton>
            )}
          </Fullname>
        </Card>
      ))}
    </ContainerRight>
  );
};

const ContainerRight = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  overflow-wrap: break-word;
  position: sticky;
  top: 4rem;
  height: calc(100vh - 8rem);
  border-left: 1px solid ${({ theme }) => theme.borderColor};
  display: none;
  ${medium({ display: "block" })}
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 1rem;
  color: inherit;
  text-decoration: none;
  background-color: ${({ theme }) => theme.bgThird};
`;

const UserAvatar = styled.img`
  border-radius: 50%;
  width: 50px;
  object-fit: cover;
`;

const Fullname = styled.p`
  font-size: 1rem;
  width: 100%;
  margin: 0;
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

const FollowButton = styled.button`
  display: block;
  margin: 0.5rem 0 0 auto;
  cursor: pointer;
  border-radius: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  color: ${({ theme }) => theme.bgPrimary};
  background-color: ${({ theme }) => theme.colorPrimary};
`;

const FollowingButton = styled(FollowButton)`
  color: ${({ theme }) => theme.colorPrimary};
  background-color: ${({ theme }) => theme.bgPrimary};
`;
