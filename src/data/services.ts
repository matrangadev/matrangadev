type Service = {
  name: string;
  description: string;
  mediaAlt: string;
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
    description:
      "We can advise you on any technology choices you need to make for your organization. We can perform research and make suggestions or take a more active role in helping you implement whatever you need, e.g. Salesforce, Shopify, Wordpress, Stripe, etc.",
  },
  {
    name: "Software Development",
    imageURL: "/assets/phone_with_hand.svg",
    mediaAlt: "Smart phone held in a hand",
    description:
      "We can create a custom application to manage your data, keep track of customers, aid in fundraising, or serve any business need. We create these uniquely for you, instead of trying to retrofit existing software.",
  },
  {
    name: "Computer Science Education",
    videoURL: "/assets/person_typing.mp4",
    mediaAlt: "Smart phone held in a hand",
    description:
      "We can create a custom application to manage your data, keep track of customers, aid in fundraising, or serve any business need. We create these uniquely for you, instead of trying to retrofit existing software.",
  },
];
