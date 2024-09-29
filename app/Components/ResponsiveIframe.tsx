import React from 'react';

interface ResponsiveIframeProps {
  src: string;
  title?: string;
}

const ResponsiveIframe: React.FC<ResponsiveIframeProps> = ({ src, title }) => {
  return (
    <div className="relative w-full h-0" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
      <iframe
        src={src}
        title={title}
        className="absolute top-0 left-0 w-full h-full border-0"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ResponsiveIframe;
