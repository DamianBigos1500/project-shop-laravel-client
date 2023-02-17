import React from 'react';

export default function PageLayout({ children, className }: any) {
  return <div className={`app-container ${className}`}>{children}</div>;
}
