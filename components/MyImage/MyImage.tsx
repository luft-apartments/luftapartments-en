// MyImage.js
import { ImageProps } from "next/image";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./MyImage.module.scss"; // Add your styles if needed

const MyImage = (props: ImageProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`${styles.imageWrapper} ${loading ? styles.loading : ""}`}>
      {loading && (
        <div className={styles.loaderContainer}>
          {/* Replace the loader content with your image */}
          <Image
            unoptimized
            src="/images/loader.png"
            alt="Loading..."
            width={2000}
            height={800}
            className={styles.loaderImage}
          />
        </div>
      )}
      <Image
        {...props}
        alt={props.alt}
        onLoad={() => setLoading(false)}
        loader={({ src, width: w, quality }) => {
          const q = quality || 75;
          return `/api/custom-loader?url=${encodeURIComponent(src)}?w=${w}&q=${q}`;
        }}
      />
    </div>
  );
};

export default MyImage;
