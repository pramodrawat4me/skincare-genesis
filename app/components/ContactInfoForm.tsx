import React from "react";
interface ContactInfoFormProps {
  cif_onoff?: boolean;
  cif_title?: string;
  cif_description?: string;
  contact_info_list?: ContactInfoList[];
  form_title?: string;
  form_description?: string;
}
interface ContactInfoList {
  icon_class?: string;
  title?: string;
  content?: string;
}
export default function ContactInfoForm({
  cif_onoff,
  cif_title,
  cif_description,
  contact_info_list,
  form_title,
  form_description,
}: ContactInfoFormProps) {
  return (
    <>
      {cif_onoff && (
        <section className="contact-form-scn contact-scn section-p-no">
          <div className="container">
            <div className="contact-inner">
              <div className="contact-left">
                <div className="contact-cont">
                  <h3 dangerouslySetInnerHTML={{ __html: cif_title || "" }} />
                  <p
                    dangerouslySetInnerHTML={{ __html: cif_description || "" }}
                  />
                </div>

                <div className="contact-list">
                  {contact_info_list?.map((item, index) => (
                    <div key={index} className="contact-item">
                      <span className={`${item.icon_class}-icon`}></span>
                      <div className="contact-item-inner">
                        <div className="contact-text">{item.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="contact-right">
                <div className="contact-form">
                  <h3 dangerouslySetInnerHTML={{ __html: form_title || "" }} />
                  <p
                    dangerouslySetInnerHTML={{ __html: form_description || "" }}
                  />
                  <div className="input-group input-name input-g-half">
                    <input
                      className="input-field"
                      type="text"
                      placeholder="Name*"
                      required
                    />
                  </div>
                  <div className="input-group input-email input-g-half">
                    <input
                      className="input-field"
                      type="email"
                      placeholder="Email*"
                      required
                    />
                  </div>
                  <div className="input-group input-mobile ">
                    <input
                      className="input-field"
                      type="tel"
                      placeholder="Mobile Number*"
                      required
                    />
                  </div>

                  <div className="input-group">
                    <textarea
                      className="input-field"
                      type="text"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="input-send-btn">
                    <button className="cmn-btn send-btn">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
