interface Service {
  name: string;
  iconName: string;
  description: string;
}

export const services: Service[] = [
  {
    name: "Website Development",
    iconName: "ic:round-web",
    description:
      "We can create a straightforward informational website for your organization. We'll ensure these are fast, secure, and accessible.",
  },
  {
    name: "Mobile App Development",
    iconName: "bi:phone-fill",
    description:
      "We can create a custom phone app for your organization in the Android or iOS App Store. We'll ensure these are interactive and user-friendly.",
  },
  {
    name: "Custom Software Development",
    iconName: "ant-design:tool-filled",
    description:
      "We can create a custom web or desktop application to manage your data, keep track of customers, aid in fundraising, etc.",
  },
];
