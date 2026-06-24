import { MapPin, Phone, Clock, Mail, ExternalLink, AlertCircle } from 'lucide-react';
import useInView from '../hooks/useInView';
import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Address',
    lines: ['Gurudwara Sri Guru Singh Sabha', 'J-Block, Rajouri Garden', 'New Delhi - 110027'],
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone',
    lines: ['+91-11-2541-XXXX', '+91-11-2542-XXXX'],
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    lines: ['info@gurudwararajourigarden.org', 'seva@gurudwararajourigarden.org'],
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Timings',
    lines: ['Open 24 Hours', 'Darshan: 3:00 AM — 10:00 PM', 'Langar: 8 AM, 12 PM, 7 PM'],
  },
];

const VALIDATORS = {
  name: (v) => {
    if (!v.trim()) return 'Full name is required.';
    if (v.trim().length < 2) return 'Name must be at least 2 characters.';
    if (!/^[a-zA-Z\s'.'-]+$/.test(v.trim())) return 'Name contains invalid characters.';
    return '';
  },
  category: (v) => (!v ? 'Please select a category.' : ''),
  email: (v) => {
    if (!v.trim()) return 'Email address is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) return 'Enter a valid email address.';
    return '';
  },
  phone: (v) => {
    if (!v.trim()) return '';
    if (!/^[+]?[\d\s\-()]{7,15}$/.test(v.trim())) return 'Enter a valid phone number.';
    return '';
  },
  message: (v) => {
    if (!v.trim()) return 'Message is required.';
    if (v.trim().length < 10) return 'Message must be at least 10 characters.';
    if (v.trim().length > 1000) return 'Message must be under 1000 characters.';
    return '';
  },
};

function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-red-500 text-xs font-medium">
      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
      {msg}
    </p>
  );
}

function inputCls(error) {
  return `w-full px-4 py-3 border rounded-xl outline-none transition-all text-gray-900 ${
    error
      ? 'border-red-400 focus:ring-2 focus:ring-red-300 bg-red-50'
      : 'border-gray-200 focus:ring-2 focus:ring-saffron-400 focus:border-saffron-400'
  }`;
}

export default function Contact() {
  const { ref, isInView } = useInView();

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: '', category: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const validateField = (name, value) => {
    const validator = VALIDATORS[name];
    return validator ? validator(value) : '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = Object.keys(VALIDATORS).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);
    const newErrors = Object.keys(VALIDATORS).reduce((acc, key) => {
      acc[key] = validateField(key, formData[key] ?? '');
      return acc;
    }, {});
    setErrors(newErrors);

    const hasFieldErrors = Object.values(newErrors).some(Boolean);
    if (!captchaVerified) {
      alert('Please complete CAPTCHA verification.');
      return;
    }
    if (hasFieldErrors) return;
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      // ✅ FIX 1: py-17 is not a valid Tailwind class → use py-16 md:py-20
      className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            // ✅ FIX 2: Add sm breakpoint so the jump from mobile→desktop isn't so abrupt
            className="mt-3 text-2xl sm:text-4xl md:text-5xl font-bold text-[#00003c]"
          >
            Contact <span className="text-saffron-600">Us</span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-saffron-500 mx-auto rounded-full" />
        </div>

        {/* ✅ FIX 3: Tighten gap on smaller screens */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Contact Info + Map */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg border border-gray-100 transition-shadow group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-saffron-100 text-saffron-600 rounded-lg flex items-center justify-center group-hover:bg-saffron-500 group-hover:text-white transition-colors flex-shrink-0">
                      {info.icon}
                    </div>
                    <h3 className="font-bold text-gray-900">{info.title}</h3>
                  </div>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-gray-600 text-sm leading-relaxed break-words">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5583!2d77.1172!3d28.6482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzUzLjUiTiA3N8KwMDcnMDIuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gurudwara Location"
              />
            </div>

            {/* ✅ FIX 4: Larger tap target for mobile */}
            <a
              href="https://maps.google.com/?q=Gurudwara+Sri+Guru+Singh+Sabha+Rajouri+Garden+New+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 py-2 text-saffron-600 font-semibold hover:text-saffron-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* ✅ FIX 5: p-4 on mobile, scale up to p-8 on md */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Write To Us</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🙏</div>
                  <h4 className="text-xl font-bold text-saffron-600 mb-2">
                    Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh!
                  </h4>
                  <p className="text-gray-600">
                    Your message has been received. We will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputCls(touched.name && errors.name)}
                      placeholder="Your full name"
                    />
                    <FieldError msg={touched.name && errors.name} />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputCls(touched.category && errors.category)} bg-white`}
                    >
                      <option disabled value="">Select Category</option>
                      <option value="Complaint">Complaint</option>
                      <option value="Suggestion">Suggestion</option>
                      <option value="Review">Review</option>
                    </select>
                    <FieldError msg={touched.category && errors.category} />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputCls(touched.email && errors.email)}
                        placeholder="your@email.com"
                      />
                      <FieldError msg={touched.email && errors.email} />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Phone <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputCls(touched.phone && errors.phone)}
                        placeholder="+91 XXXXX XXXXX"
                      />
                      <FieldError msg={touched.phone && errors.phone} />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputCls(touched.message && errors.message)} resize-none`}
                      placeholder="How can we help you?"
                    />
                    <div className="flex items-center justify-between mt-1">
                      <FieldError msg={touched.message && errors.message} />
                      <span
                        className={`text-xs ml-auto ${
                          formData.message.length > 900 ? 'text-red-400' : 'text-gray-400'
                        }`}
                      >
                        {formData.message.length}/1000
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400">
                    Fields marked <span className="text-red-500">*</span> are required.
                  </p>

                  {/*
                    ✅ FIX 6: Stack Turnstile above the button on all screen sizes.
                    Turnstile has a fixed width (~300px) so putting it in a flex-row
                    with the button causes overflow on narrow phones.
                    flex-col keeps them stacked, button stays full-width.
                  */}
                  <div className="flex flex-col gap-3">
                    <Turnstile
                      siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                      onSuccess={() => setCaptchaVerified(true)}
                      onExpire={() => setCaptchaVerified(false)}
                      onError={() => setCaptchaVerified(false)}
                    />

                    {/* ✅ FIX 7: h-15 is invalid → use py-3.5; add disabled styles */}
                    <button
                      type="submit"
                      disabled={!captchaVerified}
                      className={`w-full px-6 py-3.5 rounded-xl font-bold text-lg transition-all duration-300 shadow-md
                        ${captchaVerified
                          ? 'bg-saffron-500 text-white hover:bg-saffron-600 cursor-pointer'
                          : 'bg-saffron-300 text-white cursor-not-allowed opacity-60'
                        }`}
                    >
                      Submit
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}