import { sessions } from "../sessions";
import { getRoles } from "../api";
import { ROLE } from "../constans";

export const fetchRoles = async (hash) => {
  const accessRoles = [ROLE.ADMIN];
  const acsess = await sessions.access(hash, accessRoles);

  if (!acsess) {
    return {
      error: "доступ запрещен",
      res: null,
    };
  }

  const roles = await getRoles();

  return {
    error: null,
    res: roles,
  };
};
