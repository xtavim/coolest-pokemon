type IconlyIconProps = {
  size?: number;
  color?: string;
}

export const AboutIcon = ({ size = 24, color = "#FFFFFF" }: IconlyIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12C3 16.9699 7.02908 21 12 21C16.9709 21 21 16.9699 21 12C21 7.02908 16.9709 3 12 3C7.02908 3 3 7.02908 3 12Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M12.0057 15.6932V11.3936M12 8.35426V8.29102" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  )
}