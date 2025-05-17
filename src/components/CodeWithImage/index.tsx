import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import CodeBlock from "@theme/CodeBlock";

type CodeWithImageProps = {
  title: string;
  description: string;
  code: string;
};

const CodeWithImage: React.FC<CodeWithImageProps> = ({
  title,
  description,
  code,
}) => {
  return (
    <section style={{ marginTop: "40px" }}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>

      <div className={styles.container_codes}>

        <CodeBlock
          title="حساب‌ غیرهمزمان"
          showLineNumbers={true}
          language="javascript"
          className={styles.code_container}
        >
          {code}
        </CodeBlock>
      </div>
    </section>
  );
};

export default CodeWithImage;
