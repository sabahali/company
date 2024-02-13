import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "description to add",
  image: benefitOneImg,
  bullets: [
    {
      title: "title",
      desc: "Description",
      icon: <FaceSmileIcon />,
    },
    // {
    //   title: "Improve acquisition",
    //   desc: "Here you can add the next benefit point.",
    //   icon: <ChartBarSquareIcon />,
    // },
    // {
    //   title: "Drive customer retention",
    //   desc: "This will be your last bullet point in this section.",
    //   icon: <CursorArrowRaysIcon />,
    // },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "description to add ",
  image: benefitTwoImg,
  bullets: [
    {
      title: "title",
      desc: "Description",
      icon: <FaceSmileIcon />,
    },
    // {
    //   title: "Mobile Responsive Template",
    //   desc: "Nextly is designed as a mobile first responsive template.",
    //   icon: <DevicePhoneMobileIcon />,
    // },
    // {
    //   title: "Powered by Next.js & TailwindCSS",
    //   desc: "This template is powered by latest technologies and tools.",
    //   icon: <AdjustmentsHorizontalIcon />,
    // },
    // {
    //   title: "Dark & Light Mode",
    //   desc: "Nextly comes with a zero-config light & dark mode. ",
    //   icon: <SunIcon />,
    // },
  ],
};


export {benefitOne, benefitTwo};
