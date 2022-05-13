import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "https://i.redd.it/af1l8nnevhx81.jpg",
    caption: "What's with these comments!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "itachiuchiha25799",
        text: "True that!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "itachiuchiha25799",
        text: "True that!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "itachiuchiha25799",
        text: "True that!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "itachiuchiha25799",
        text: "True that!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
