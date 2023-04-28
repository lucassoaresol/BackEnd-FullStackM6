import { IQuery } from "../../interfaces";
import prisma from "../../prisma";

const filterPrice = (min: string, max: string) => {};

export const listAnnouncementService = async (query: IQuery) => {
  const announcements = await prisma.announcement.findMany({
    include: { user: true },
  });

  const {
    brand,
    color,
    fuel,
    manufacture_year,
    model,
    mileageMin,
    mileageMax,
    priceMax,
    priceMin,
  } = query;

  const brandFilter = brand
    ? announcements.filter((item) => item.brand.includes(brand))
    : announcements;

  const colorFilter = color
    ? brandFilter.filter((item) => item.color.includes(color))
    : brandFilter;

  const fuelFilter = fuel
    ? colorFilter.filter((item) => item.fuel.includes(fuel))
    : colorFilter;

  const manufacture_yearFilter = manufacture_year
    ? fuelFilter.filter((item) =>
        item.manufacture_year.includes(manufacture_year)
      )
    : fuelFilter;

  const modelFilter = model
    ? manufacture_yearFilter.filter((item) => item.model.includes(model))
    : manufacture_yearFilter;

  const mileageFilter =
    mileageMin && mileageMax
      ? modelFilter.filter(
          (item) => item.mileage > +mileageMin && item.mileage < +mileageMax
        )
      : mileageMax
      ? modelFilter.filter((item) => item.mileage < +mileageMax)
      : mileageMin
      ? modelFilter.filter((item) => item.mileage > +mileageMin)
      : modelFilter;

  const priceFilter =
    priceMax && priceMin
      ? mileageFilter.filter(
          (item) => +item.price > +priceMin && +item.price < +priceMax
        )
      : priceMax
      ? mileageFilter.filter((item) => +item.price < +priceMax)
      : priceMin
      ? mileageFilter.filter((item) => +item.price > +priceMin)
      : mileageFilter;

  return priceFilter;
};
