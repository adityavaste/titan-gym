import './style.css'

// Navbar scroll effect
const navbar = document.querySelector('.navbar')
function handleScroll() {
  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled')
  } else {
    navbar?.classList.remove('scrolled')
  }
}
window.addEventListener('scroll', handleScroll)

// Mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const mobileNav = document.querySelector('.mobile-nav')
const mobileOverlay = document.querySelector('.mobile-overlay')

function toggleMobileMenu() {
  mobileNav?.classList.toggle('active')
  mobileOverlay?.classList.toggle('active')
  document.body.style.overflow = mobileNav?.classList.contains('active') ? 'hidden' : ''
}

mobileMenuBtn?.addEventListener('click', toggleMobileMenu)
mobileOverlay?.addEventListener('click', toggleMobileMenu)

// Close mobile menu on link click
mobileNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (mobileNav.classList.contains('active')) toggleMobileMenu()
  })
})

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal')
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active')
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

revealElements.forEach(el => revealObserver.observe(el))

// Scroll to top button
const scrollTopBtn = document.querySelector('.scroll-top')
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    scrollTopBtn?.classList.add('visible')
  } else {
    scrollTopBtn?.classList.remove('visible')
  }
})

scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

// BMI Calculator
const bmiCalcBtn = document.getElementById('bmi-calc')
const heightInput = document.getElementById('height')
const weightInput = document.getElementById('weight')
const bmiValueEl = document.getElementById('bmi-value')
const bmiCategoryEl = document.getElementById('bmi-category')
const bmiDescEl = document.getElementById('bmi-desc')
const bmiMarker = document.getElementById('bmi-marker')

function calculateBMI() {
  const h = parseFloat(heightInput?.value)
  const w = parseFloat(weightInput?.value)
  if (!h || !w || h <= 0 || w <= 0) {
    bmiValueEl.textContent = '--'
    bmiCategoryEl.textContent = 'Enter your details'
    bmiDescEl.textContent = 'Height and weight to calculate BMI'
    bmiMarker.style.left = '0%'
    return
  }
  const bmi = w / ((h / 100) ** 2)
  const rounded = bmi.toFixed(1)
  bmiValueEl.textContent = rounded

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

  bmiCategoryEl.textContent = category
  bmiCategoryEl.style.color = color
  bmiDescEl.textContent = desc
  bmiMarker.style.left = position + '%'
  bmiMarker.style.background = color
}

bmiCalcBtn?.addEventListener('click', calculateBMI)

// Lightbox
const lightbox = document.querySelector('.lightbox')
const lightboxImg = lightbox?.querySelector('img')
const lightboxClose = lightbox?.querySelector('.lightbox-close')

function openLightbox(src) {
  if (!lightbox || !lightboxImg) return
  lightboxImg.src = src
  lightbox.classList.add('active')
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightbox?.classList.remove('active')
  document.body.style.overflow = ''
}

document.querySelectorAll('[data-lightbox]').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img')
    if (img) openLightbox(img.src)
  })
})

lightboxClose?.addEventListener('click', closeLightbox)
lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox()
})

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item')
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question')
  question?.addEventListener('click', () => {
    const isActive = item.classList.contains('active')
    faqItems.forEach(i => i.classList.remove('active'))
    if (!isActive) item.classList.add('active')
  })
})

// Contact form
const contactForm = document.getElementById('contact-form')
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault()
  alert('Thank you for your message! We will get back to you within 24 hours.')
  contactForm.reset()
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href')
    if (href === '#') return
    const target = document.querySelector(href)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})
