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
        paid: true,
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
    lastName: "d",
    icon: "battery-alert",
    color: "turquoise",
  },
  {
    firstName: "angela",
    lastName: "w",
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
