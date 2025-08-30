
'use client';

import { useState } from 'react';

interface CTAOverlayProps {
  show: boolean;
  onClose: () => void;
}

export default function CTAOverlay({ show, onClose }: CTAOverlayProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    preferredTime: '',
    sessionType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-sm flex items-center justify-center p-8">
      <div className="bg-gray-900 rounded-3xl p-12 max-w-4xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-amber-200 transition-colors"
        >
          <i className="ri-close-line text-2xl"></i>
        </button>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-6">Ready to Transform?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's explore how we can unlock your organization's potential together
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-300 text-sm mb-3">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-200 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-3">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-200 transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-3">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-200 transition-colors"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-300 text-sm mb-3">Session Type</label>
              <div className="relative">
                <select
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={(e) => setFormData({...formData, sessionType: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-200 transition-colors appearance-none pr-8"
                  required
                >
                  <option value="">Select session type</option>
                  <option value="strategy">Strategy Consultation</option>
                  <option value="assessment">Organization Assessment</option>
                  <option value="workshop">Leadership Workshop</option>
                  <option value="discovery">Discovery Call</option>
                </select>
                <i className="ri-arrow-down-s-line absolute right-4 top-4 text-gray-400"></i>
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-3">Preferred Time</label>
              <div className="relative">
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-200 transition-colors appearance-none pr-8"
                  required
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 5PM)</option>
                  <option value="evening">Evening (5PM - 8PM)</option>
                  <option value="flexible">Flexible</option>
                </select>
                <i className="ri-arrow-down-s-line absolute right-4 top-4 text-gray-400"></i>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-3">Tell us about your challenge</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              maxLength={500}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-200 transition-colors resize-none"
              placeholder="What transformation are you looking to achieve?"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-amber-200 text-gray-900 px-12 py-4 rounded-xl font-medium hover:bg-amber-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Book Your Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
