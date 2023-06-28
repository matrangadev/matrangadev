export type Topic = {
  name: string;
};

export type Price = {
  name: string;
  dollarsPerHour: number;
};

export const educationPrivatePrices: Price[] = [
  {
    name: "Below Middle School",
    dollarsPerHour: 50,
  },
  {
    name: "Middle School",
    dollarsPerHour: 60,
  },
  {
    name: "High School and above",
    dollarsPerHour: 70,
  },
];

export const topicRows: Topic[][] = [
  [
    {
      name: "Intro to Programming",
    },
    {
      name: "Data Structures & Algorithms",
    },
  ],
  [
    {
      name: "Cybersecurity",
    },
    {
      name: "Web Design & Development",
    },
  ],
  [
    {
      name: "Game Development",
    },
    {
      name: "Student Driven",
    },
  ],
];
