import React from "react";
interface MapSectionProps {
  map_onoff?: boolean;
  map_code?: string;
}
export default function MapSection({ map_onoff, map_code }: MapSectionProps) {
  return (
    <>
      {map_onoff && (
        <section className="map-scn">
          <iframe
            src={map_code}
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      )}
    </>
  );
}
