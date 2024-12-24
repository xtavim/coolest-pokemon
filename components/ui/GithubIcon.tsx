type IconlyIconProps = {
  size?: number;
  color?: string;
};

export const GithubIcon = ({
  size = 24,
  color = '#FFFFFF',
}: IconlyIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.62081 21.2226C5.55081 21.2226 4.58083 19.9926 3.89083 19.1126C3.51083 18.6326 3.18081 18.2226 2.81081 18.1226C2.41081 18.0226 2.16082 17.6126 2.26082 17.2126C2.36082 16.8126 2.76082 16.5627 3.17082 16.6627C4.04082 16.8827 4.56081 17.5427 5.06081 18.1727C5.86081 19.1827 6.55082 20.0626 8.70082 19.5826V19.3526C8.66082 18.7326 8.78083 18.1027 9.05083 17.5227C6.45083 16.9827 3.63082 15.4626 3.63082 10.5126C3.63082 9.17265 4.08082 7.88262 4.92082 6.85261C4.59082 5.66261 4.67081 4.40264 5.16081 3.25264C5.25081 3.04264 5.42083 2.89259 5.64083 2.82259C5.87083 2.75259 7.11082 2.51261 9.60082 4.10261C11.6308 3.61261 13.7608 3.61261 15.7908 4.10261C18.2808 2.51261 19.5208 2.75259 19.7508 2.82259C19.9608 2.88259 20.1408 3.04264 20.2308 3.25264C20.7208 4.40264 20.8008 5.66261 20.4708 6.85261C21.3108 7.88262 21.7608 9.15262 21.7608 10.4826C21.7608 15.4926 18.9408 16.9926 16.3408 17.5126C16.6108 18.1026 16.7308 18.7527 16.6808 19.4127V20.1427C16.6808 20.5527 16.3508 20.8927 15.9308 20.8927C15.5108 20.8927 15.1808 20.5527 15.1808 20.1427V19.3526C15.2408 18.6226 14.9908 17.9626 14.5208 17.4726C14.3208 17.2626 14.2608 16.9626 14.3508 16.7026C14.4508 16.4326 14.6908 16.2426 14.9708 16.2126C17.7108 15.9026 20.2508 14.9926 20.2508 10.4926C20.2508 9.40263 19.8308 8.35269 19.0708 7.55269C18.8708 7.34269 18.8108 7.04266 18.9108 6.77266C19.2108 5.97266 19.2408 5.11269 19.0008 4.30269C18.5708 4.37269 17.7008 4.63269 16.3408 5.55269C16.1608 5.67269 15.9408 5.71266 15.7308 5.65266C13.7408 5.11266 11.6408 5.11266 9.66081 5.65266C9.45081 5.71266 9.23083 5.67269 9.05083 5.55269C7.70083 4.64269 6.83083 4.3827 6.39083 4.3127C6.16083 5.1227 6.19082 5.98267 6.48082 6.78267C6.58082 7.05267 6.52082 7.3527 6.32082 7.5627C5.55082 8.3627 5.14083 9.42267 5.14083 10.5327C5.14083 14.9827 7.6808 15.9126 10.4308 16.2526C10.7108 16.2826 10.9508 16.4826 11.0408 16.7426C11.1408 17.0126 11.0708 17.3126 10.8708 17.5126C10.4008 18.0026 10.1608 18.6626 10.2108 19.3226V20.1827C10.2108 20.5127 9.9908 20.8027 9.6808 20.9027C8.9008 21.1327 8.22082 21.2326 7.63082 21.2326L7.62081 21.2226Z'
        fill={color}
      ></path>
    </svg>
  );
};
