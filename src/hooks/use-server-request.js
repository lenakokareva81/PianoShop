import { useSelector } from "react-redux";
import { useCallback } from "react";
import { selectUserSession } from "../selectors";
import { server } from "../bff";

export const useServerRequest = () => {
  const session = useSelector(selectUserSession);

  return useCallback(
    (operation, ...params) => {
      const request = ["register", "autodize", "fetchProduct"].includes(
        operation
      )
        ? params
        : [session, ...params];

      return server[operation](...request);
    },
    [session]
  );
};
