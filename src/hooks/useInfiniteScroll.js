import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeed } from "../redux/feedSlice";

export const useInfiniteScroll = () => {
  const { _id } = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();

  let bottomBoundryRef = useRef(null);
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            dispatch(fetchFeed({ userId: _id, type: "nextpage" }));
          }
        });
      }).observe(node);
    },
    [dispatch, _id]
  );

  useEffect(() => {
    if (bottomBoundryRef.current) {
      scrollObserver(bottomBoundryRef.current);
    }
  }, [scrollObserver, bottomBoundryRef]);

  return { bottomBoundryRef };
};
