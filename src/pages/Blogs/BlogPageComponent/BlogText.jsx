import React from "react";
import styles from "./BlogText.module.css";

const BlogText = ({ blogDetails }) => {
  return (
    <div>
      {blogDetails?.content?.map((block, index) => {
        switch (block.type) {
          case "heading-1":
            return (
              <h1 className={styles.heading1} key={index}>
                {block.text}
              </h1>
            );
          case "heading-2":
            return (
              <h2 className={styles.heading2} key={index}>
                {block.text}
              </h2>
            );
          case "heading-3":
            return (
              <h3 className={styles.heading3} key={index}>
                {block.text}
              </h3>
            );
          case "heading-4":
            return (
              <h4 className={styles.heading4} key={index}>
                {block.text}
              </h4>
            );
          // case "paragraph":
          //   return (
          //     <p className={styles.paragraph} key={index}>
          //       {block.text}
          //     </p>
          //   );
          case "paragraph":
            const textParts = block.text.split(":");
            return (
              <p className={styles.paragraph} key={index}>
                {textParts.length > 1 ? (
                  <>
                    <strong>{textParts[0]} :</strong>
                    {textParts.slice(1).join(":")}
                  </>
                ) : (
                  block.text
                )}
              </p>
            );
          case "image":
            return (
              <img
                src={block.img}
                alt={block.title}
                className={styles.imageBlock}
                key={index}
              />
            );
          case "bullet":
            return (
              <ul key={index} className={styles.bulletList}>
                {block?.items.map((item, idx) => (
                  <li key={idx} className={styles.bulletItem}>
                    {item}
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlogText;
