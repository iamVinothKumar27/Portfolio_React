import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const ContactSection = () => {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatusMessage('✅ Message sent successfully!');
      reset();
    } catch (error) {
      setStatusMessage('❌ Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-blue-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-blue-900 text-xl max-w-2xl mx-auto mt-4">
          Looking to collaborate or discuss a new idea? Let’s connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Social Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-blue-700">Let's Connect</h3>
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 't.s.vinoth27@gmail.com',
                  href: 'mailto:t.s.vinoth27@gmail.com',
                },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  value: '/in/vinothkumarts',
                  href: 'https://www.linkedin.com/in/vinothkumarts/',
                },
                {
                  icon: Github,
                  label: 'GitHub',
                  value: '/iamVinothKumar27',
                  href: 'https://github.com/iamVinothKumar27',
                },
                {
                  icon: Instagram,
                  label: 'Instagram',
                  value: '@vk._.27.0',
                  href: 'https://www.instagram.com/vk._.27.05/',
                },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-5 rounded-xl border border-blue-200 bg-white/80 shadow hover:shadow-md transition-shadow"
                >
                  <contact.icon className="text-blue-600" size={24} />
                  <div>
                    <div className="font-semibold text-lg text-gray-800">{contact.label}</div>
                    <div className="text-sm text-gray-600">{contact.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white/80 border border-blue-200 rounded-2xl p-8 space-y-6 shadow-xl"
            >
              <div>
                <label className="block text-lg font-medium text-gray-800 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-5 py-3 border border-blue-100 rounded-lg text-black outline-none focus:ring-2 focus:ring-blue-200"
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-800 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: 'Invalid email format',
                    },
                  })}
                  className="w-full px-5 py-3 border border-blue-100 rounded-lg text-black outline-none focus:ring-2 focus:ring-blue-200"
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-800 mb-2">Message</label>
                <textarea
                  rows="6"
                  placeholder="Tell me about your project or just say hello!"
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-5 py-3 border border-blue-100 rounded-lg text-black outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                />
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 cursor-pointer text-white px-8 py-3 rounded-full font-medium shadow-md hover:opacity-90 transition disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>


              {statusMessage && (
                <p className="text-center mt-4 text-sm font-medium text-green-600">{statusMessage}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
