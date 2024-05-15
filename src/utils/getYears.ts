export const getYears = () => {
  const currentYear = new Date().getFullYear();
  const earliestYear = 1970;
  const years = Array.from(
    { length: currentYear - earliestYear + 1 },
    (_, index) => currentYear - index
  );
  return years;
};
