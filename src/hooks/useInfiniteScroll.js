import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExploreFeed } from "../redux/exploreFeedSlice";
import { fetchFeed } from "../redux/feedSlice";

export const useInfiniteScroll = (page) => {
  const { _id } = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();

  let bottomBoundryRef = useRef(null);
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            if (page === "home") {
              dispatch(fetchFeed({ userId: _id, type: "nextpage" }));
            } else if (page === "explore") {
              dispatch(fetchExploreFeed({ userId: _id, type: "nextpage" }));
            }
          }
        });
      }).observe(node);
    },
    [dispatch, _id, page]
  );

  useEffect(() => {
    if (bottomBoundryRef.current) {
      scrollObserver(bottomBoundryRef.current);
    }
  }, [scrollObserver, bottomBoundryRef]);

  return { bottomBoundryRef };
};
