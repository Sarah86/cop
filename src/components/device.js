const size = {
  upXS: "",
  upSM: "576px",
  underMD: "767.58px",
  upMD: "768px",
  upLG: "992px",
  upXL: "1200px",
}

export const device = {
  // Extra small devices (portrait phones, less than 576px)
  mobile: `(min-width: ${size.upXS})`,
  // Small devices (landscape phones, 576px and up)
  bigMobile: `(min-width: ${size.upSM})`,
  landscapeMobile: `(max-width: ${size.underMD}) and (orientation: landscape)`,
  // Medium devices (tablets, 768px and up)
  tablet: `(min-width: ${size.upMD})`,
  // Large devices (desktops, 992px and up)
  desktop: `(min-width: ${size.upLG})`,
  // Extra large devices (large desktops, 1200px and up)
  largeDesktop: `(min-width: ${size.upXL})`,
}
