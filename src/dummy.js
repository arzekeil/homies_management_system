export const dummyPayments = [
  {
    id: 1,
    amount: 11.11,
    title: "eggs",
    date: "2022-11-19",
    payees: [
      {
        amount: 2.0,
        id: 2,
        paid: true,
      },
    ],
    payer: 1,
    complete: true,
  },
  {
    id: 2,
    amount: 22.22,
    date: "2022-11-19",
    title: "lasgna",
    payees: [
      {
        amount: 3.0,
        id: 1,
        paid: false,
      },
      {
        amount: 5.5,
        id: 3,
        paid: false,
      },
    ],
    payer: 2,
    complete: false,
  },
];
export const dummyUsers = [
  null,
  {
    firstName: "arzekeil",
    lastName: "deleon",
    icon: "battery-alert",
    color: "turquoise",
    description: "i like lifting da weights and playing vball :D",
  },
  {
    firstName: "angela",
    lastName: "wang",
    icon: "bedtime",
    color: "salmon",
  },
  {
    firstName: "owo bot",
    lastName: "qwq",
    icon: "brush",
    color: "purple",
  },
  {
    firstName: "testing",
    lastName: "again",
    icon: "bug-report",
    color: "magenta",
  },
];

export const dummyTasks = [
  {
    owner: 1,
    date: "2022-11-19",
    title: "garbage",
    done: false,
  },
  {
    owner: 2,
    date: "2022-11-19",
    title: "run errands",
    done: true,
  },
  {
    owner: 2,
    date: "2022-11-19",
    title: "do stuff",
    done: false,
  },
];

export const dummyPosts = [
  {
    id: 1,
    title: "Should we get a house pet?? OwO",
    date: "2022-11-19",
    authorId: 2,
    description: "I think we should get a cat :3",
    tags: ["discussion"],
  },
  {
    id: 2,
    title: "Should we buy an Xbox Series X and a brand new 4K TV :DDDD",
    date: "2022-11-19",
    authorId: 1,
    description: "arzekul wanna knock some ppl over o.o",
    tags: ["gaming", "xbox"],
  },
  {
    id: 3,
    title: "We go jim",
    date: "2022-11-18",
    authorId: 1,
    description: "we need to go get big right now",
    tags: [],
  },
];
