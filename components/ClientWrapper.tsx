'use client'

import { useEffect } from 'react'

export default function ClientWrapper() {
  useEffect(() => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar') as HTMLElement | null
    function handleScroll() {
      if (window.scrollY > 50) {
        navbar?.classList.add('navbar-scrolled')
      } else {
        navbar?.classList.remove('navbar-scrolled')
      }
    }
    window.addEventListener('scroll', handleScroll)

    // Mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn') as HTMLElement | null
    const mobileNav = document.querySelector('.mobile-nav') as HTMLElement | null
    const mobileOverlay = document.querySelector('.mobile-overlay') as HTMLElement | null

    function toggleMobileMenu() {
      mobileNav?.classList.toggle('active')
      mobileOverlay?.classList.toggle('active')
      mobileMenuBtn?.classList.toggle('active')
      document.body.style.overflow = mobileNav?.classList.contains('active') ? 'hidden' : ''
    }

    function closeMobileMenu() {
      mobileNav?.classList.remove('active')
      mobileOverlay?.classList.remove('active')
      mobileMenuBtn?.classList.remove('active')
      document.body.style.overflow = ''
    }

    mobileMenuBtn?.addEventListener('click', toggleMobileMenu)
    mobileOverlay?.addEventListener('click', closeMobileMenu)

    const mobileNavClose = document.querySelector('.mobile-nav-close') as HTMLElement | null
    mobileNavClose?.addEventListener('click', closeMobileMenu)

    mobileNav?.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (mobileNav?.classList.contains('active')) closeMobileMenu()
      })
    })

    // Scroll reveal
    const revealElements = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    revealElements.forEach((el) => revealObserver.observe(el))

    // Scroll to top
    const scrollTopBtn = document.querySelector('.scroll-top') as HTMLElement | null
    function handleScrollTop() {
      if (window.scrollY > 600) {
        scrollTopBtn?.classList.add('visible')
      } else {
        scrollTopBtn?.classList.remove('visible')
      }
    }
    window.addEventListener('scroll', handleScrollTop)
    scrollTopBtn?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    // Lightbox
    const lightbox = document.querySelector('.lightbox') as HTMLElement | null
    const lightboxImg = lightbox?.querySelector('img') as HTMLImageElement | null
    const lightboxClose = lightbox?.querySelector('.lightbox-close') as HTMLElement | null

    function openLightbox(src: string) {
      if (lightboxImg) lightboxImg.src = src
      lightbox?.classList.add('active')
      document.body.style.overflow = 'hidden'
    }

    function closeLightbox() {
      lightbox?.classList.remove('active')
      document.body.style.overflow = ''
    }

    document.querySelectorAll('[data-lightbox]').forEach((item) => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img') as HTMLImageElement | null
        if (img) openLightbox(img.src)
      })
    })

    lightboxClose?.addEventListener('click', closeLightbox)
    lightbox?.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox()
    })

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item')
    faqItems.forEach((item) => {
      const question = item.querySelector('.faq-question') as HTMLElement | null
      question?.addEventListener('click', () => {
        const isActive = item.classList.contains('active')
        faqItems.forEach((i) => i.classList.remove('active'))
        if (!isActive) item.classList.add('active')
      })
    })

    // Contact form
    const contactForm = document.getElementById('contact-form') as HTMLFormElement | null
    contactForm?.addEventListener('submit', (e) => {
      e.preventDefault()
      alert('Thank you for your message! We will get back to you within 24 hours.')
      contactForm.reset()
    })

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href')
        if (href === '#') return
        const target = document.querySelector(href as string)
        if (target) {
          e.preventDefault()
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    })

    // Newsletter
    const newsletterForm = document.querySelector('.newsletter-form') as HTMLFormElement | null
    newsletterForm?.addEventListener('submit', (e) => {
      e.preventDefault()
      alert('Subscribed!')
      newsletterForm.reset()
    })

    // BMI Calculator
    const bmiCalcBtn = document.getElementById('bmi-calc') as HTMLButtonElement | null
    const heightInput = document.getElementById('height') as HTMLInputElement | null
    const weightInput = document.getElementById('weight') as HTMLInputElement | null
    const bmiValueEl = document.getElementById('bmi-value') as HTMLElement | null
    const bmiCategoryEl = document.getElementById('bmi-category') as HTMLElement | null
    const bmiDescEl = document.getElementById('bmi-desc') as HTMLElement | null
    const bmiMarker = document.getElementById('bmi-marker') as HTMLElement | null

    function calculateBMI() {
      const h = parseFloat(heightInput?.value || '')
      const w = parseFloat(weightInput?.value || '')
      if (!h || !w || h <= 0 || w <= 0) {
        if (bmiValueEl) bmiValueEl.textContent = '--'
        if (bmiCategoryEl) bmiCategoryEl.textContent = 'Enter your details'
        if (bmiDescEl) bmiDescEl.textContent = 'Height and weight to calculate BMI'
        if (bmiMarker) bmiMarker.style.left = '0%'
        return
      }
      const bmi = w / ((h / 100) ** 2)
      const rounded = bmi.toFixed(1)
      if (bmiValueEl) bmiValueEl.textContent = rounded

      let category, desc, color, position
      if (bmi < 18.5) {
        category = 'Underweight'
        desc = 'You may need to gain some weight. Consult a nutritionist.'
        color = '#3b82f6'
        position = 15
      } else if (bmi < 25) {
        category = 'Normal Weight'
        desc = 'Great job! Maintain your healthy lifestyle.'
        color = '#22c55e'
        position = 40
      } else if (bmi < 30) {
        category = 'Overweight'
        desc = 'Consider a balanced diet and regular exercise.'
        color = '#f59e0b'
        position = 65
      } else {
        category = 'Obese'
        desc = 'Consult a healthcare provider for a personalized plan.'
        color = '#ef4444'
        position = 88
      }

      if (bmiCategoryEl) {
        bmiCategoryEl.textContent = category
        bmiCategoryEl.style.color = color
      }
      if (bmiDescEl) bmiDescEl.textContent = desc
      if (bmiMarker) {
        bmiMarker.style.left = position + '%'
        bmiMarker.style.background = color
      }
    }

    bmiCalcBtn?.addEventListener('click', calculateBMI)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleScrollTop)
      mobileMenuBtn?.removeEventListener('click', toggleMobileMenu)
      mobileOverlay?.removeEventListener('click', toggleMobileMenu)
      revealElements.forEach((el) => revealObserver.unobserve(el))
      scrollTopBtn?.removeEventListener('click', () => {})
    }
  }, [])

  return null
}
