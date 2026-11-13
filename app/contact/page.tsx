export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
      
      {/* Contact Info */}
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Let&apos;s Create.</h1>
          <p className="text-lg text-neutral-500 font-medium">
            Ready to elevate your brand? Reach out to book a session or discuss a custom project.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-brand-gold tracking-widest uppercase">Email Us</span>
            <a href="mailto:moahamedyaser38@gmail.com" className="text-xl font-bold hover:text-brand-gold transition-colors">
              moahamedyaser38@gmail.com
            </a>
          </div>
          
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-brand-gold tracking-widest uppercase">Call / WhatsApp</span>
            <a href="tel:01212236219" className="text-xl font-bold hover:text-brand-gold transition-colors">
              012 1223 6219
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-brand-gold tracking-widest uppercase">Location</span>
            <span className="text-xl font-bold">Content Lab Studio, Egypt</span>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form className="flex flex-col gap-6 p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-neutral-700">Name</label>
          <input type="text" placeholder="Your Name" className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-neutral-700">Email</label>
          <input type="email" placeholder="your@email.com" className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-neutral-700">Message</label>
          <textarea placeholder="Tell us about your project..." rows={4} className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all resize-none"></textarea>
        </div>
        <button type="button" className="w-full rounded-xl bg-brand-charcoal text-white font-bold py-4 hover:bg-brand-charcoal/90 transition-colors mt-2">
          Send Message
        </button>
      </form>

    </div>
  );
}