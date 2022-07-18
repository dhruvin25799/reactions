import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Hello World, welcome to my Social Media Website! You can create account, follow your friends, like their posts, comment on them and even save your favourite ones.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "e64d1dff-691a-4003-951c-db7c5ba0bb55",
          firstName: "Manan",
          lastName: "Jain",
          username: "manan.jain@gmail.com",
          password: "mynameispasha",
          createdAt: "2022-05-01T15:24:08+05:30",
          updatedAt: "2022-05-01T15:24:08+05:30",
          followers: [],
          following: [],
          bookmarks: [],
          id: "3",
        },
        {
          _id: "77346aa3-f035-40ac-b1af-c6ff6a178131",
          firstName: "Maharshi",
          lastName: "Maniar",
          username: "maharshi.maniar@gmail.com",
          password: "thisissocialmedia",
          createdAt: "2022-05-01T15:24:08+05:30",
          updatedAt: "2022-05-01T15:24:08+05:30",
          followers: [],
          following: [],
          bookmarks: [],
          id: "2",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "manan.jain@gmail.com",
        text: "Nice work Dhruvin!!!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "maharshi.maniar@gmail.com",
        text: "Wow, looks great! Bookmarked this post in case this blows up!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "dhruvin.mehta25799@gmail.com",
    createdAt: "2022-05-01T15:24:08+05:30",
    updatedAt: "2022-05-01T15:24:08+05:30",
  },
  {
    _id: uuid(),
    content:
      "This is the day you will always remember as the day you almost caught Captain Jack Sparrow, Online.",
    likes: {
      likeCount: 0,
      likedBy: [
        {
          _id: "00bf5091-2b24-4628-b38a-903ef30d6cb7",
          firstName: "Naruto",
          lastName: "Uzumaki",
          username: "naruto.uzumaki@hokage.com",
          password: "INeverGiveUp",
          createdAt: "2022-05-15T15:24:08+05:30",
          updatedAt: "2022-05-15T15:24:08+05:30",
          followers: [],
          following: [],
          bookmarks: [],
          id: "7",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "naruto.uzumaki@konoha.com",
        text: "Dattebayo",
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
    content:
      "Psychologically speaking, vengeance rarely brings the catharsis we hope for.",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "f71bac6f-c1d9-416a-ad43-70108005ed15",
          firstName: "Jennie",
          lastName: "Kim",
          username: "jennie.kim@blackpink.com",
          password: "BlackpinkIsTheBest",
          createdAt: "2022-05-16T15:24:08+05:30",
          updatedAt: "2022-05-16T15:24:08+05:30",
          followers: [],
          following: [],
          bookmarks: [],
          id: "8",
        },
        {
          _id: "f225d53e-187b-4463-bc76-8d1519f4819a",
          firstName: "Gojo",
          lastName: "Satoru",
          username: "gojo.satoru@jujutsu.com",
          password: "IAmTheStrongest",
          createdAt: "2022-05-16T15:24:08+05:30",
          updatedAt: "2022-05-16T15:24:08+05:30",
          followers: [],
          following: [],
          bookmarks: [],
          id: "9",
        },
        {
          _id: "49214b87-727f-44cc-a64c-ee367e8fcd13",
          firstName: "Tony",
          lastName: "Stark",
          username: "tony.stark@avengers.com",
          password: "IAmIronMan",
          createdAt: "2022-05-16T15:24:08+05:30",
          updatedAt: "2022-05-16T15:24:08+05:30",
          followers: [],
          following: [],
          bookmarks: [],
          id: "6",
        },
        {
          _id: "b6eacb04-be81-4c5f-a567-d83af52e47f8",
          firstName: "Jack",
          lastName: "Sparrow",
          username: "jack.sparrow@pirates.com",
          password: "whereIsTheTreasure",
          createdAt: "2022-05-16T15:24:08+05:30",
          updatedAt: "2022-05-16T15:24:08+05:30",
          followers: [],
          following: [],
          bookmarks: [],
          id: "5",
        },
        {
          _id: "493f52c0-8951-4a76-ba35-bea58162d1ba",
          firstName: "Mahimn",
          lastName: "Dhiver",
          username: "mahimn.dhiver@gmail.com",
          password: "REACTionsIsBest",
          createdAt: "2022-05-16T15:24:08+05:30",
          updatedAt: "2022-05-16T15:24:08+05:30",
          followers: [],
          following: [],
          bookmarks: [],
          id: "4",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "harley.quinn@gotham.com",
    createdAt: "2022-05-16T15:24:08+05:30",
    updatedAt: "2022-05-16T15:24:08+05:30",
  },
];
