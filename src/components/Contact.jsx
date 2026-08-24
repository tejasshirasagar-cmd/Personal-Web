import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-info animate-on-scroll">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle" style={{ marginBottom: 32 }}>
            Feel free to reach out for collaborations or opportunities.
          </p>

          <div className="contact-info-item">
            <div className="contact-info-icon">✉</div>
            <div>
              <p className="contact-info-label">Email</p>
              <p className="contact-info-value">tejasshirasagar@gmail.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">📞</div>
            <div>
              <p className="contact-info-label">Phone</p>
              <p className="contact-info-value">8088632395</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">📍</div>
            <div>
              <p className="contact-info-label">Location</p>
              <p className="contact-info-value">Vijayapura, Karnataka</p>
            </div>
          </div>
        </div>

        <div className="animate-on-scroll">
          <div className="contact-form">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">✅</div>
                <h3 className="form-success-title">Thank you for contacting me!</h3>
                <p className="form-success-text">
                  I'll get back to you as soon as possible.
                </p>
                <button
                  className="btn-secondary"
                  style={{ marginTop: 20 }}
                  onClick={() => setSubmitted(false)}
                  aria-label="Send another message"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-required="true"
                  />
                  {errors.name && <p className="form-error">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-required="true"
                  />
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    aria-required="true"
                  />
                  {errors.message && <p className="form-error">{errors.message}</p>}
                </div>

                <button type="submit" className="form-submit" aria-label="Send message">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
