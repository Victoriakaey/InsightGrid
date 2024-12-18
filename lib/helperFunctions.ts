import { faker } from "@faker-js/faker";

export const generateFakeChartData = () => {
  const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
  const values = months.map(() =>
    faker.number.int({ min: 20000, max: 100000 })
  );
  return { months, values };
};
