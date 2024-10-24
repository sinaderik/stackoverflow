import { Questions, SidebarLink, Tags } from "@/types";

export const questions:Questions[]=[
  {id:"1",value:"How to Ensure Unique User Profile with ON CONFLICT in PostgreSQL Using Drizzle ORM?"},
  {id:"2",value:"What are the benefits and trade-offs of using Server-Side Rendering (SSR) in Next.js?"},
  {id:"3",value:"How to center a div?"},
  {id:"4",value:"Node.js res.json() and res.send(), not working but still able to change status code"},
  {id:"5",value:"ReactJs or NextJs for begginers i ask for advice"},
]
export const tags:Tags[]=[
  {id:"1",value:"React",count:76},
  {id:"2",value:"Javascript",count:45},
  {id:"3",value:"Nextjs",count:24},
  {id:"4",value:"Typescript",count:32},
]
export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks:SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};