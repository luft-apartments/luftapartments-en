import React from 'react'
import { AllApartmentsBlockSlider } from './AllApartmentsBlockSlider';
import { getApartmentsPages } from 'utils/getApartmentsPages'

export const AllApartmentsBlock = async ({ apartments }) => {
  const data = await getApartmentsPages(apartments);
  // console.log(data);

  return <AllApartmentsBlockSlider data={data} />
}
