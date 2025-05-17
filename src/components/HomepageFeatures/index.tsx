import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { IconType } from "react-icons";
import { MdRocketLaunch } from "react-icons/md";
import { FiTarget } from "react-icons/fi";
import { HiOutlinePuzzle } from "react-icons/hi";
import React from "react";

type FeatureItem = {
  title: string;
  icon: IconType;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "راه‌اندازی سریع",
    icon: MdRocketLaunch,
    description: (
      <>
        بدون نیاز به تنظیمات پیچیده، تنها با چند خط کد ربات خود را فعال کنید و
        شروع به ساخت کنید.
      </>
    ),
  },
  {
    title: "تمرکز روی منطق ربات",
    icon: FiTarget,
    description: (
      <>
        دیگر درگیر کارهای تکراری نشوید. فقط منطق ربات را بنویسید، بقیه کارها را
        ابزار برایتان انجام می‌دهد.
      </>
    ),
  },
  {
    title: "قابل توسعه با ts",
    icon: HiOutlinePuzzle,
    description: (
      <>
        از ساختار ماژولار لذت ببرید. ربات‌هایی بسازید که به‌راحتی قابل گسترش،
        نگهداری و بروزرسانی باشند.
      </>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {React.createElement(icon, { className: styles.featureSvg })}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" style={{ fontFamily: "Vazir" }}>
          {title}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section style={{backgroundColor: "transparent"}} className={styles.features}>
      <div className="container" >
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
