// import { useState } from 'react';
import { contact} from '../../data/portfolioData';
import { Reveal } from './Reveal';

export function Contact({ onSubmitSuccess }) {
  // const [sending, setSending] = useState(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const form = event.currentTarget;

  //   setSending(true);

  //   window.setTimeout(() => {
  //     form.reset();
  //     setSending(false);
  //     onSubmitSuccess?.();
  //   }, toastConfig.simulateDelayMs);
  // };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">
          {contact.sectionTitle.line} <span>{contact.sectionTitle.highlight}</span>
        </h2>
        <div className="contact-wrapper">
        <Reveal className="contact-form">
          {contact.infoItems.map((item) => (
              <div className="contact-item" key={item.title}>
                <i className={item.iconClass} aria-hidden />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
