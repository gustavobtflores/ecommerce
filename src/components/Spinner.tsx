import { SVGProps } from 'react';

const Spinner = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <radialGradient
      id="a9"
      cx={0.66}
      fx={0.66}
      cy={0.3125}
      fy={0.3125}
      gradientTransform="scale(1.5)"
    >
      <stop offset={0} stopColor="currentColor" />
      <stop offset={0.3} stopColor="currentColor" stopOpacity={0.9} />
      <stop offset={0.6} stopColor="currentColor" stopOpacity={0.6} />
      <stop offset={0.8} stopColor="currentColor" stopOpacity={0.3} />
      <stop offset={1} stopColor="currentColor" stopOpacity={0} />
    </radialGradient>
    <circle
      transform-origin="center"
      fill="none"
      stroke="url(#a9)"
      strokeWidth={15}
      strokeLinecap="round"
      strokeDasharray="200 1000"
      strokeDashoffset={0}
      cx={100}
      cy={100}
      r={70}
    >
      <animateTransform
        type="rotate"
        attributeName="transform"
        calcMode="spline"
        dur={2}
        values="360;0"
        keyTimes="0;1"
        keySplines="0 0 1 1"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      transform-origin="center"
      fill="none"
      opacity={0.2}
      stroke="currentColor"
      strokeWidth={15}
      strokeLinecap="round"
      cx={100}
      cy={100}
      r={70}
    />
  </svg>
);
export default Spinner;
