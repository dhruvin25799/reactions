import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Dhruvin",
    lastName: "Mehta",
    username: "itachiuchiha25799@gmail.com",
    password: "1234567890",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
