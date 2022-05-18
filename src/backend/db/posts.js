import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "https://i.imgflip.com/4gxt33.jpg",
    caption: "Wait, is it still Monday?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "naruto.uzumaki@konoha.com",
        text: "Let's go for Ramen this weekend!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "barry.allen@starlabs.com",
        text: "Maybe I should just time travel to the weekend again?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "jack.sparrow@pirates.com",
    createdAt: "2022-05-15T15:24:08+05:30",
    updatedAt: "2022-05-15T15:24:08+05:30",
  },
  {
    _id: uuid(),
    content: "https://i.imgflip.com/4fcoen.jpg",
    caption: "Even the voices in my head have gone silent!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "light.yagami@shinigami.com",
        text: "I should try writing COVID in my Death Note!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "gojo.satoru@jujutsu.com",
        text: "Domain expansion FTW! No COVID in my domain!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "jack.sparrow@pirates.com",
        text: "Drink up me hearties, yo-ho!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "harley.quinn@gotham.com",
    createdAt: "2022-05-16T15:24:08+05:30",
    updatedAt: "2022-05-16T15:24:08+05:30",
  },
  {
    _id: uuid(),
    content: "https://i.redd.it/af1l8nnevhx81.jpg",
    caption: "Sometimes I find code in my bugs. Oh wait!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "itachiuchiha25799@gmail.com",
        text: "True that!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "maharshi.maniar@gmail.com",
        text: "Hahahahaha!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "adarsh.balika@gmail.com",
    createdAt: "2022-05-12T15:24:08+05:30",
    updatedAt: "2022-05-12T15:24:08+05:30",
  },
];
