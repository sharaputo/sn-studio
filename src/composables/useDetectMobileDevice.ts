export default (): boolean => {
  let isMobile = false;

  const mobileRes = window.matchMedia('(max-width: 767px)');
  const touchPointer = window.matchMedia('(pointer: coarse)');

  if (mobileRes.matches && touchPointer.matches) {
    isMobile = true;
  } else {
    isMobile = false;
  }

  return isMobile;
};
