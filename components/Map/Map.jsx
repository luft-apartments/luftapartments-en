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
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={(map) => setMap(map)}
      >
        <MarkerF
          position={center}
        />
      </GoogleMap>
    </LoadScript>
  )
}
