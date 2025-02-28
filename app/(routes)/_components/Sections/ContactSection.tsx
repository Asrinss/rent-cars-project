'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { FaClock } from "react-icons/fa"
import { toast } from 'sonner'
import { z } from 'zod'

// Form doğrulama şeması tanımı
const contactFormSchema = z.object({
  fullName: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces'),
  email: z.string().email('Invalid email address'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters')
})

type ContactFormData = z.infer<typeof contactFormSchema>

// İletişim bilgisi bileşeni
const ContactInfo = ({ icon, text, href }: { icon: React.ReactNode, text: string, href?: string }) => (
  <div className='group flex items-center space-x-4 p-4 hover:bg-white/10 rounded-lg'>
    <span className="text-white p-3 bg-white/20 rounded-full group-hover:scale-110 transition">
      {icon}
    </span>
    {href ? (
      <a href={href} className="text-lg" target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    ) : (
      <p className="text-lg">{text}</p>
    )}
  </div>
);

// Form bileşeni
const ContactForm = () => {
  const [formData, setFormData] = React.useState<ContactFormData>({
    fullName: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [errors, setErrors] = React.useState<Partial<Record<keyof ContactFormData, string>>>({})

  React.useEffect(() => {
    const result = contactFormSchema.safeParse(formData)
    setErrors(result.success ? {} : 
      Object.fromEntries(result.error.errors.map(err => [err.path[0], err.message]))
    )
  }, [formData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setIsSubmitted(false)

    try {
      contactFormSchema.parse(formData)
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast.success('Message sent successfully!')
      setFormData({ fullName: '', email: '', message: '' })
      setIsSubmitted(true)
    } catch (error) {
      toast.error(error instanceof z.ZodError ? error.errors[0].message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='grid md:grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow-lg'>
      <div>
        <label htmlFor="fullName" className='block text-sm font-medium text-gray-700'>
          Full Name <span className="text-red-500">*</span>
        </label>
        <Input
          id="fullName"
          value={formData.fullName}
          onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
          placeholder='Enter Your Name'
          className={errors.fullName ? 'border-red-500' : ''}
          aria-invalid={!!errors.fullName}
        />
        {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
      </div>

      <div>
        <label htmlFor="email" className='block text-sm font-medium text-gray-700'>
          Email <span className="text-red-500">*</span>
        </label>
        <Input
          type="email"
          id="email"
          value={formData.email}
          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
          placeholder='Enter Your Email'
          className={errors.email ? 'border-red-500' : ''}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </div>

      <div className='md:col-span-2'>
        <label htmlFor="message" className='block text-sm font-medium text-gray-700'>
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
          placeholder='Enter Your Message'
          className={errors.message ? 'border-red-500' : ''}
          maxLength={500}
        />
        {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
        <span className="text-sm text-gray-500">{formData.message.length}/500</span>
      </div>

      <div className='md:col-span-2 flex justify-between items-center'>
        <p className="text-sm text-gray-500">* Required fields</p>
        {isSubmitted && (
            <p className="text-sm text-green-600 font-medium">
              Your message has been sent successfully!
            </p>
        )}
        <Button 
          type='submit' 
          variant="mybutton"
          disabled={loading || Object.keys(errors).length > 0}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

// Ana bileşen
const ContactSection = () => {
  const contactInfo = [
    { icon: <Phone size={24} />, text: '+90 000 000 00 00', href: 'tel:+900000000000' },
    { icon: <Mail size={24} />, text: 'contact@example.com', href: 'mailto:contact@example.com' },
    { icon: <MapPin size={24} />, text: 'Istanbul / Turkey', href: 'https://maps.google.com/?q=Istanbul,Turkey' },
    { icon: <FaClock size={24} />, text: '09:00 AM - 06:00 PM' }
  ];

  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto grid md:grid-cols-2 gap-12 p-8'>
        <div className='bg-mysecondary text-white p-8 rounded-lg shadow-xl'>
          <h2 className='text-3xl font-semibold mb-8'>Contact Information</h2>
          <div className='space-y-6'>
            {contactInfo.map((item, index) => (
              <ContactInfo key={index} {...item} />
            ))}
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;