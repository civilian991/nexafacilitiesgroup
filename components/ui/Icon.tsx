import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

const iconPaths: Record<string, string> = {
  building: 'M3 21h18M3 7v14m18-14v14M5 7h14a1 1 0 0 1 1 1v12H4V8a1 1 0 0 1 1-1zm4 4v2m4-2v2m4-2v2m-8 4v2m4-2v2m4-2v2',
  wrench: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
  clock: 'M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zm0 0v10l5 3',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-1.5-8.5L9 12l3 3 6-6-1.5-1.5-4.5 4.5z',
  wind: 'M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2m7.6 11.4A2 2 0 1 0 11 16H2',
  snowflake: 'M12 2v20M17 7l-5 5-5-5m10 10l-5-5-5 5M2 12h20M7 7l5 5 5-5M7 17l5-5 5 5',
  zap: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  briefcase: 'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16m-6-7h20m-3 0v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5',
  pin: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zm-5 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0z',
  check: 'M20 6L9 17l-5-5',
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  mail: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2l8 5 8-5M4 6v12h16V6l-8 5z',
  settings: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  'shopping-cart': 'M9 2L7 6H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1m7-14h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H11M4 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm13 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  utensils: 'M3 2v7c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V2M7 2v20M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h1M16 22v-7',
  'building-2': 'M3 21h18M3 10h18M5 6h14v15H5zM9 21V10m6 11V10',
  warehouse: 'M3 21h18M3 7l9-4 9 4M5 21V10m14 11V10M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6',
  hotel: 'M2 20v-9m0 0V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16m-20-9h20M8 4v16m8-16v16M12 8h.01',
  'shield-check': 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-2-8l2 2 4-4',
  award: 'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.21 13.89L7 23l5-3 5 3-1.21-9.12',
  handshake: 'M9 11l3 3L22 4M3 11l3 3m0 0l3-3m-3 3v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8',
  target: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  'alert-circle': 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8v4m0 4h.01',
  'map-pin': 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zm-5 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0z',
};

export default function Icon({ name, className = '', size = 24, style }: IconProps) {
  const path = iconPaths[name];

  if (!path) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <path d={path} />
    </svg>
  );
}