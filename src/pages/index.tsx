import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { FaGithub } from "react-icons/fa";
import styles from "./index.module.css";
import { BiBookReader } from "react-icons/bi";
import CodeWithImage from "../components/CodeWithImage";
import { ImNpm } from "react-icons/im";
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header dir="rtl" className={clsx(" ", styles.heroBanner)}>
      <div className="container">
        <img
          src="/img/rubika.png"
          alt="لوگوی Rubjs"
          style={{ width: 120, height: 120, marginTop: 80, marginBottom: 20 }}
        />

        <Heading
          as="h1"
          className="hero__title"
          style={{ fontFamily: "Vazir", letterSpacing: 2, lineHeight: 0.6 }}
        >
          Rubjs
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.icons
            )}
            to="/docs/intro"
          >
            <BiBookReader />
            یادگیری
          </Link>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.icons
            )}
            to="https://github.com/hadi-rostami/rubjs"
          >
            GitHub
            <FaGithub />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`داکیومنت ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main dir="rtl">
        <HomepageFeatures />
        <CodeWithImage
          title="راه اندازی سریع"
          description="RubJS یک فریمورک مدرن، زیبا و غیرهمزمان است که به شما امکان می‌دهد به‌راحتی با API اصلی روبیکا از طریق یک حساب کاربری (کلاینت سفارشی) با استفاده از جاوا اسکریپت تعامل داشته باشید."
          code={`const { Client, Utils, Filters } = require("rubjs");

const bot = new Client("bot");

const object_guid = "object_guid";

const customFilter = (msg) => msg.object_guid === object_guid;

bot.onMessageUpdates([customFilter, Filters.isText], async (message) => {
  await message.reply(\`Hello \${Utils.Italic("from")} \${Utils.Bold("RubJS")}! \`);
});

bot.run();`}
        />
        <div className="">
          <h2 className={styles.home_title}> برو به ؟...</h2>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--secondary button--lg",
                styles.icons
              )}
              to="/docs/intro"
            >
              Document
              <BiBookReader />
            </Link>
            <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.icons
            )}
            to="https://github.com/hadi-rostami/rubjs"
          >
            GitHub
            <FaGithub />
          </Link>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.icons
            )}
            to="https://www.npmjs.com/package/rubjs"
          >
            npm
            <ImNpm />
          </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
