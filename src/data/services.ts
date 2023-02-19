type Service = {
  name: string;
  mediaAlt: string;
  href: string;
} & (
  | {
      imageURL: string;
    }
  | {
      videoURL: string;
    }
);

export const services: Service[] = [
  {
    name: "Technology Consulting",
    imageURL: "/assets/man_with_questions.svg",
    mediaAlt: "Smart phone held in a hand",
    href: "/services/consulting",
  },
  {
    name: "Software Development",
    imageURL: "/assets/phone_with_hand.svg",
    mediaAlt: "Smart phone held in a hand",
    href: "/services/software",
  },
  {
    name: "Computer Science Education",
    videoURL: "/assets/person_typing.mp4",
    mediaAlt: "Smart phone held in a hand",
    href: "/services/education",
  },
];
