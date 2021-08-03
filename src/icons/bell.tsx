import React from 'react';

type BellIconProps = {
  id: string;
};

const BellIcon: React.FC<BellIconProps> = ({ id }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id={id || 'bell-mask'} fill="white">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 15.5C9.10457 15.5 10 14.6046 10 13.5H6C6 14.6046 6.89543 15.5 8 15.5Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15.5C9.10457 15.5 10 14.6046 10 13.5H6C6 14.6046 6.89543 15.5 8 15.5Z"
      fill="#807e98"
    />
    <path
      d="M10 13.5H11V12.5H10V13.5ZM6 13.5V12.5H5V13.5H6ZM9 13.5C9 14.0523 8.55228 14.5 8 14.5V16.5C9.65685 16.5 11 15.1569 11 13.5H9ZM10 12.5H6V14.5H10V12.5ZM8 14.5C7.44772 14.5 7 14.0523 7 13.5H5C5 15.1569 6.34315 16.5 8 16.5V14.5Z"
      fill="#807e98"
      mask={`url(#${id || 'bell-mask'})`}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.53082 2H7.46918C5.97623 2 4.71047 3.09779 4.49933 4.57573L4.02203 7.91687C3.97979 8.21252 3.87189 8.49495 3.70623 8.74343L1.86852 11.5H14.1315L12.2938 8.74343C12.1281 8.49495 12.0202 8.21252 11.978 7.91687L11.5007 4.57574C11.2895 3.09779 10.0238 2 8.53082 2ZM7.46918 1C5.47858 1 3.7909 2.46372 3.50939 4.43431L3.03208 7.77545C3.01096 7.92327 2.95701 8.06449 2.87418 8.18873L1.03647 10.9453C0.593431 11.6099 1.06982 12.5 1.86852 12.5H14.1315C14.9302 12.5 15.4066 11.6099 14.9635 10.9453L13.1258 8.18873C13.043 8.06449 12.989 7.92327 12.9679 7.77545L12.4906 4.43431C12.2091 2.46372 10.5214 1 8.53082 1H7.46918Z"
      fill="#807e98"
    />
  </svg>
);

export default BellIcon;
