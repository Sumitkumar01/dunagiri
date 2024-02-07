import React from "react";

function Image({
  src,
  dataSrc,
  className,
  alt,
  src855w,
  src300w,
  src768w,
  src600w,
  srcSet855w,
  srcSet300w,
  srcSet768w,
  srcSet600w,
  height,
  width
}) {
  return (
    <>
      <img
        loading="lazy"
        decoding="async"
        width={width}
        height={height}
        src={src}
        data-src={dataSrc}
        className={className}
        alt={alt}
        // data-srcset={`${src855w} 855w,${src300w} 300w,${src768w}768w,${src600w}600w`}
        // data-sizes="(max-width: 855px) 100vw, 855px"
        // data-ll-status="loaded"
        // sizes="(max-width: 855px) 100vw, 855px"
        // srcSet={`${srcSet855w}855w,${srcSet300w}300w,${srcSet768w} 768w,${srcSet600w}600w`}
      />
    </>
  );
}

export default Image;
