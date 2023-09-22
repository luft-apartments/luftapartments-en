import { getOverlayColor, getOverlayOpacity, getMarginBottom } from "utils/layout"
import Image from "next/image"

export const Cover = ({ children, background, overlayColor, overlayOpacity, minHeight, marginBottom }) => {

  return (
    <div
      className="h-screen text-white bg-black bg-opacity-50 relative min-h[400px] flex justify-center items-center"
      style={{ height: minHeight, marginBottom: getMarginBottom(marginBottom) }}
    >
      <Image
        alt="Cover"
        src={background}
        fill
        className="mix-blend-soft-light object-cover"
        style={{ opacity: getOverlayOpacity(overlayOpacity), backgroundColor: getOverlayColor(overlayColor) }}

      />
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  )
}