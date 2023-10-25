"use client";
import React, { useState } from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api'

export const Map = ({ lat, lng }) => {

  const [map, setMap] = useState(null)

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: lat,
    lng: lng
  };

  const zoom = 15;

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY

  return (
    <div className='w-full h-[400px]'>
      <iframe className='w-full h-[100%]' loading="lazy" src="https://maps.google.com/maps?q=D%C3%BCsseldorfer%20Landstra%C3%9Fe%20237%20A%2C%20Huckingen%2C%2047259%20Duisburg%2C%20&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near" title="Düsseldorfer Landstraße 237 A, Huckingen, 47259 Duisburg, " aria-label="Düsseldorfer Landstraße 237 A, Huckingen, 47259 Duisburg, "></iframe>
    </div>
    // <LoadScript googleMapsApiKey={apiKey}>
    //   <GoogleMap
    //     mapContainerStyle={containerStyle}
    //     center={center}
    //     zoom={zoom}
    //     onLoad={(map) => setMap(map)}
    //   >
    //     <MarkerF
    //       position={center}
    //     />
    //   </GoogleMap>
    // </LoadScript>
  )
}
