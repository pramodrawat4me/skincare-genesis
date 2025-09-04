import React from "react";
interface BookAppointmentProps {
  ba_onoff?: boolean;
  ba_title?: string;
  ba_button?: string;
  book_appointment_image?: string;
}
export default function BookAppointment({
  ba_onoff,
  ba_title,
  ba_button,
  book_appointment_image,
}: BookAppointmentProps) {
  return (
    <>
      {ba_onoff && (
        <section
          className="discount-scn d-flex"
          style={{ backgroundImage: `url(${book_appointment_image})` }}
        >
          <div className="container">
            <div className="order-now-inner">
              {book_appointment_image && (
                <h2 dangerouslySetInnerHTML={{ __html: ba_title || "" }} />
              )}
              {book_appointment_image && (
                <a href={ba_button.url} className="cmn-btn">
                  {ba_button.title}
                </a>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
