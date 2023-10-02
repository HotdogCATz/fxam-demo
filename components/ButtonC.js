import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Button = ({ buttonText, href,width, height, textColor, bgColor, borderColor }) => {
  const router = useRouter();

  const isActive = router.asPath === href;

  const buttonStyles = {
    width: width || '100px',
    height: height || '39px',
    color: textColor || '#efefef',
    fontWeight: 'normal',
    fontSize: '14px',
    borderRadius: '9999px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.5s ease',
    backgroundColor: isActive ? '#022859' : bgColor || 'transparent',
    border: `1px solid ${borderColor || 'transparent'}`,
  };

  const hoverStyles = {
    backgroundColor: isActive ? '#041832' : '#022859',
    color: '#fff',
  };

  return (
    <Link href={href} passHref>
      <button
        style={buttonStyles}
        className={`button ${isActive ? 'active' : ''}`}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = hoverStyles.backgroundColor;
          e.target.style.color = hoverStyles.color;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = buttonStyles.backgroundColor;
          e.target.style.color = buttonStyles.color;
        }}
      >
        {buttonText}
      </button>
    </Link>
  );
};

export default Button;
