const theme = {
  pxToRem(value: number){
    const transformsPxToRem = value / 16;
    return `${transformsPxToRem}rem`;
  },
}

export default theme