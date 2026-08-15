import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Github } from 'lucide-react';

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
        {
          ...data,
          to_email: 't.s.vinoth27@gmail.com',
          reply_to: data.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatusMessage('✅ Message sent successfully!');
      reset();
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setStatusMessage('❌ Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-eyebrow mb-4">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mt-4">
            Looking to collaborate or discuss a new idea? Let's connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Social Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-foreground">Let's Connect</h3>
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
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-5 rounded-xl card-surface hover:border-primary/40 transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary-light">
                    <contact.icon size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{contact.label}</div>
                    <div className="text-sm text-muted">{contact.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="card-surface rounded-2xl p-8 space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-muted mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-muted/60 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition"
                />
                {errors.name && <p className="text-sm text-red-400 mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-muted mb-2">Email</label>
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
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-muted/60 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition"
                />
                {errors.email && <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-muted mb-2">Message</label>
                <textarea
                  rows="6"
                  placeholder="Tell me about your project or just say hello!"
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-muted/60 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition resize-none"
                />
                {errors.message && <p className="text-sm text-red-400 mt-1">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary to-accent cursor-pointer text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {statusMessage && (
                <p className="text-center mt-4 text-sm font-medium text-primary-light">{statusMessage}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
