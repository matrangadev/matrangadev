interface Service {
  name: string;
  iconName: string;
  description: string;
}

export const services: Service[] = [
  {
    name: "Software Development",
    iconName: "ant-design:tool-filled",
    description:
      "We can create a custom application to manage your data, keep track of customers, aid in fundraising, or serve any business need. We create these uniquely for you, instead of trying to retrofit existing software.",
  },
  {
    name: "Mobile App Development",
    iconName: "bi:phone-fill",
    description:
      "We can create a custom phone app for your organization in the Android or iOS App Store. We'll ensure these are interactive and user-friendly. These can be for yourself and your associates, and/or your customers.",
  },
  {
    name: "Information Technology Consulting",
    iconName: "mdi:account-help",
    description:
      "We can advise you for any technology choices you need to make for your organization. We can simply make suggestions or take a more active role in helping you implement whatever you need. Think Salesforce, Shopify, Wordpress, Stripe, etc.",
  },
];
