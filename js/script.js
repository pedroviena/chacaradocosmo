document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const header = document.getElementById('main-header');

  let isMenuOpen = false;
  menuBtn?.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu?.classList.toggle('hidden', !isMenuOpen);
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      isMenuOpen = false;
      mobileMenu?.classList.add('hidden');
    });
  });

  // Header Scroll Effect
  function handleHeaderScroll() {
    const isScrolled = window.scrollY > 50;
    if (isScrolled) {
      header.classList.remove('bg-transparent');
      header.classList.add('bg-black/40', 'backdrop-blur-xl', 'rounded-full', 'border', 'border-white/10');
      header.style.boxShadow = "0 8px 32px rgba(0,0,0,0.4)";
    } else {
      header.classList.add('bg-transparent');
      header.classList.remove('bg-black/40', 'backdrop-blur-xl', 'rounded-full', 'border', 'border-white/10');
      header.style.boxShadow = "none";
    }
  }
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // Reveal Text scroll (Technology section)
  const techTextSection = document.getElementById('tech-text-section');
  const descText = "Descubra o melhor espaço de lazer em Heliópolis, Bahia! Um refúgio de tranquilidade e diversão. Nosso local foi cuidadosamente planejado para oferecer um ambiente único, cercado por áreas verdes e uma atmosfera de paz e tranquilidade. Perfeito para eventos especiais, como festas, confraternizações, casamentos ou até aquele dia de lazer com amigos e familiares.";
  const revealContainer = document.getElementById('reveal-text-container');

  if (revealContainer) {
    revealContainer.innerHTML = descText.split(" ").map((w, i) => `<span class="transition-colors duration-300" id="tech-word-${i}" style="color: rgba(0,0,0,0.15);">${w} </span>`).join('');
  }

  // Hero Scroll Math (Split Layout)
  const heroSection = document.getElementById('hero');
  const heroGrid = document.getElementById('hero-grid');
  const heroLeftCol = document.getElementById('hero-left-col');
  const heroCenterCol = document.getElementById('hero-center-col');
  const heroRightCol = document.getElementById('hero-right-col');
  const heroTextOverlay = document.getElementById('hero-text-overlay');

  function handleHeroScroll() {
    if (!heroSection) return;
    const rect = heroSection.getBoundingClientRect();
    const scrollableHeight = window.innerHeight * 2.5; // Slower scroll distance
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

    // Text fades early (first 20%)
    const textOpacity = Math.max(0, 1 - (progress / 0.15));

    // Images transform scale and width between 10% and 100%
    const imageProgress = Math.max(0, Math.min(1, (progress - 0.1) / 0.9));

    // Center goes from 100% width to 44% width
    const centerWidth = 100 - (imageProgress * 56);
    // Sides go from 0% to 28% width
    const sideWidth = imageProgress * 28;
    const sideOpacity = imageProgress;
    const gap = imageProgress * 16;
    const paddingOuter = imageProgress * 24;

    const sideTranslateLeft = -100 + (imageProgress * 100);
    const sideTranslateRight = 100 - (imageProgress * 100);
    const centerBorderRadius = imageProgress * 24;

    if (heroTextOverlay) {
      heroTextOverlay.style.opacity = textOpacity;
      heroTextOverlay.style.transform = `translateY(${progress * 150}px)`;
    }

    if (heroGrid) {
      heroGrid.style.gap = gap + 'px';
      heroGrid.style.paddingLeft = paddingOuter + 'px';
      heroGrid.style.paddingRight = paddingOuter + 'px';
    }

    if (heroLeftCol) {
      heroLeftCol.style.width = sideWidth + '%';
      heroLeftCol.style.gap = gap + 'px';
      heroLeftCol.style.transform = `translateX(${sideTranslateLeft}%) scale(${0.8 + (imageProgress * 0.2)})`;
      heroLeftCol.style.opacity = sideOpacity;
    }

    if (heroCenterCol) {
      heroCenterCol.style.width = centerWidth + '%';
      heroCenterCol.style.borderRadius = centerBorderRadius + 'px';
    }

    if (heroRightCol) {
      heroRightCol.style.width = sideWidth + '%';
      heroRightCol.style.gap = gap + 'px';
      heroRightCol.style.transform = `translateX(${sideTranslateRight}%) scale(${0.8 + (imageProgress * 0.2)})`;
      heroRightCol.style.opacity = sideOpacity;
    }
  }

  // Hero Alt Scroll Math (Split Layout)
  const heroAltSection = document.getElementById('hero-alt');
  const heroAltGrid = document.getElementById('hero-alt-grid');
  const heroAltLeftCol = document.getElementById('hero-alt-left-col');
  const heroAltCenterCol = document.getElementById('hero-alt-center-col');
  const heroAltRightCol = document.getElementById('hero-alt-right-col');
  const heroAltTextOverlay = document.getElementById('hero-alt-text-overlay');

  function handleHeroAltScroll() {
    if (!heroAltSection) return;
    const rect = heroAltSection.getBoundingClientRect();
    const scrollableHeight = window.innerHeight * 2.5;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

    const textOpacity = Math.max(0, 1 - (progress / 0.15));
    const imageProgress = Math.max(0, Math.min(1, (progress - 0.1) / 0.9));

    const centerWidth = 100 - (imageProgress * 56);
    const sideWidth = imageProgress * 28;
    const sideOpacity = imageProgress;
    const gap = imageProgress * 16;
    const paddingOuter = imageProgress * 24;

    const sideTranslateLeft = -100 + (imageProgress * 100);
    const sideTranslateRight = 100 - (imageProgress * 100);
    const centerBorderRadius = imageProgress * 24;

    if (heroAltTextOverlay) {
      heroAltTextOverlay.style.opacity = textOpacity;
      heroAltTextOverlay.style.transform = `translateY(${progress * 150}px)`;
    }

    if (heroAltGrid) {
      heroAltGrid.style.gap = gap + 'px';
      heroAltGrid.style.paddingLeft = paddingOuter + 'px';
      heroAltGrid.style.paddingRight = paddingOuter + 'px';
    }

    if (heroAltLeftCol) {
      heroAltLeftCol.style.width = sideWidth + '%';
      heroAltLeftCol.style.gap = gap + 'px';
      heroAltLeftCol.style.transform = `translateX(${sideTranslateLeft}%) scale(${0.8 + (imageProgress * 0.2)})`;
      heroAltLeftCol.style.opacity = sideOpacity;
    }

    if (heroAltCenterCol) {
      heroAltCenterCol.style.width = centerWidth + '%';
      heroAltCenterCol.style.borderRadius = centerBorderRadius + 'px';
    }

    if (heroAltRightCol) {
      heroAltRightCol.style.width = sideWidth + '%';
      heroAltRightCol.style.gap = gap + 'px';
      heroAltRightCol.style.transform = `translateX(${sideTranslateRight}%) scale(${0.8 + (imageProgress * 0.2)})`;
      heroAltRightCol.style.opacity = sideOpacity;
    }
  }

  function handleTechScroll() {
    // Reveal Text scroll for description
    if (techTextSection) {
      const tRect = techTextSection.getBoundingClientRect();
      const st = window.innerHeight * 0.85;
      const en = window.innerHeight * 0.2;
      const tProg = Math.max(0, Math.min(1, (st - tRect.top) / (st - en)));

      const wordsCount = descText.split(" ").length;
      for (let i = 0; i < wordsCount; i++) {
        const wSpan = document.getElementById(`tech-word-${i}`);
        if (wSpan) {
          wSpan.style.color = (tProg > i / wordsCount) ? "#111827" : "rgba(0,0,0,0.15)";
        }
      }
    }

    // Lazer Encontra Natureza sticky fade out
    const techHero = document.getElementById('tech-hero-sticky');
    if (techHero) {
      const rect = techHero.getBoundingClientRect();
      // start fading slowly when user has scrolled a reasonable amount
      const scrolled = -rect.top - (window.innerHeight * 0.5); // Give time to read before fading
      const p = Math.max(0, Math.min(1, scrolled / window.innerHeight));

      const words = techHero.querySelectorAll('.tech-word');
      words.forEach((word, idx) => {
        const wp = Math.max(0, Math.min(1, (p - (idx * 0.2)) / 0.5));
        word.style.opacity = 1 - wp;
        word.style.transform = `translateY(${-wp * 40}px)`;
        word.style.filter = `blur(${wp * 12}px)`;
      });
    }
  }

  // Intersection Observer for Scroll Reveals
  const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-blur');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // FAQ Accordion
  const faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach(card => {
    const header = card.querySelector('.faq-header');
    const body = card.querySelector('.faq-body');
    const icon = card.querySelector('.faq-icon');

    header.addEventListener('click', () => {
      const isOpen = body.style.maxHeight;

      // close all others first
      faqCards.forEach(c => {
        c.querySelector('.faq-body').style.maxHeight = null;
        c.querySelector('.faq-icon').textContent = '+';
        c.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
      });

      if (!isOpen) {
        body.style.maxHeight = body.scrollHeight + "px";
        icon.textContent = '-';
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Reservation Form Whatsapp redirect
  const reservaForm = document.getElementById('reserva-form');
  const reservaData = document.getElementById('reserva-data');
  const reservaMsg = document.getElementById('reserva-msg');

  // Multistep logic variables
  let pessoasStr = "";
  let horaStr = "";

  const step1 = document.getElementById('reserva-step-1');
  const step2 = document.getElementById('reserva-step-2');
  const step3 = document.getElementById('reserva-step-3');
  const step4 = document.getElementById('reserva-step-4');

  const btnNext2 = document.getElementById('btn-next-2');
  const btnPrev2 = document.getElementById('btn-prev-2');
  const btnPrev3 = document.getElementById('btn-prev-3');
  const btnPrev4 = document.getElementById('btn-prev-4');

  const dot1 = document.getElementById('dot-1');
  const dot2 = document.getElementById('dot-2');
  const dot3 = document.getElementById('dot-3');
  const dot4 = document.getElementById('dot-4');

  function showStep(hideEl, showEl, dotNum, reverse = false) {
    hideEl.style.opacity = '0';
    hideEl.style.transform = reverse ? 'translateX(16px)' : 'translateX(-16px)';
    setTimeout(() => {
      hideEl.classList.add('hidden');

      showEl.classList.remove('hidden');
      // trigger reflow
      void showEl.offsetWidth;
      showEl.style.transform = reverse ? 'translateX(-16px)' : 'translateX(16px)';

      requestAnimationFrame(() => {
        showEl.style.opacity = '1';
        showEl.style.transform = 'translateX(0)';
      });

      // update dots
      const activeCls = 'bg-primary';
      const lastCls = 'bg-[#25D366]';
      const pendingCls = 'bg-white/20';

      if (dot1) dot1.className = `w-2.5 h-2.5 rounded-full transition-colors duration-300 ${dotNum >= 1 ? activeCls : pendingCls}`;
      if (dot2) dot2.className = `w-2.5 h-2.5 rounded-full transition-colors duration-300 ${dotNum >= 2 ? activeCls : pendingCls}`;
      if (dot3) dot3.className = `w-2.5 h-2.5 rounded-full transition-colors duration-300 ${dotNum >= 3 ? activeCls : pendingCls}`;
      if (dot4) dot4.className = `w-2.5 h-2.5 rounded-full transition-colors duration-300 ${dotNum >= 4 ? lastCls : pendingCls}`;
    }, 300);
  }

  // Clickable Option Cards (Step 1 and 3)
  const optsPessoas = document.querySelectorAll('.reserva-opt');
  const optsHora = document.querySelectorAll('.reserva-hora-opt');

  optsPessoas.forEach(btn => {
    btn.addEventListener('click', () => {
      optsPessoas.forEach(b => {
        b.classList.remove('border-primary', 'bg-primary/20');
        b.classList.add('border-white/10', 'bg-black/30');
      });
      btn.classList.add('border-primary', 'bg-primary/20');
      btn.classList.remove('border-white/10', 'bg-black/30');

      pessoasStr = btn.getAttribute('data-val');

      setTimeout(() => showStep(step1, step2, 2), 350);
    });
  });

  optsHora.forEach(btn => {
    btn.addEventListener('click', () => {
      optsHora.forEach(b => {
        b.classList.remove('border-primary', 'bg-primary/20');
        b.classList.add('border-white/10', 'bg-black/30');
      });
      btn.classList.add('border-primary', 'bg-primary/20');
      btn.classList.remove('border-white/10', 'bg-black/30');

      horaStr = btn.getAttribute('data-val');

      setTimeout(() => showStep(step3, step4, 4), 350);
    });
  });

  // Button Listeners
  if (btnNext2) {
    btnNext2.addEventListener('click', () => {
      if (!reservaData.value) {
        reservaData.reportValidity();
        return;
      }
      showStep(step2, step3, 3);
    });
  }

  if (btnPrev2) btnPrev2.addEventListener('click', () => showStep(step2, step1, 1, true));
  if (btnPrev3) btnPrev3.addEventListener('click', () => showStep(step3, step2, 2, true));
  if (btnPrev4) btnPrev4.addEventListener('click', () => showStep(step4, step3, 3, true));

  if (reservaData) {
    // Prevent past dates
    const today = new Date().toISOString().split('T')[0];
    reservaData.min = today;

    // Auto advance when date is picked
    reservaData.addEventListener('change', () => {
      if (reservaData.value) {
        setTimeout(() => showStep(step2, step3, 3), 350);
      }
    });
  }

  if (reservaForm) {
    reservaForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!pessoasStr) pessoasStr = "Não informado";
      if (!horaStr) horaStr = "Não informado";

      const dt = reservaData.value;
      const msg = reservaMsg.value || "Nenhum detalhe adicional.";

      const parts = dt.split('-');
      const dataFormatada = `${parts[2]}/${parts[1]}/${parts[0]}`;

      const phone = '557599409713';
      const text = `Olá, vim pelo site! Gostaria de saber sobre a disponibilidade para reserva na Chácara.%0A%0A*Data:* ${dataFormatada}%0A*Turno:* ${horaStr}%0A*Convidados:* ${pessoasStr}%0A%0A*Detalhes adicionais:*%0A${msg}`;

      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    });
  }

  // Drag to scroll for Gallery Carousel
  const slider = document.querySelector('.snap-x');
  let isDown = false;
  let startX;
  let scrollLeft;

  if (slider) {
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('cursor-grabbing');
      slider.style.scrollBehavior = 'auto'; // Temporary disable smooth scroll
      slider.classList.remove('snap-mandatory');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      if (!isDown) return;
      isDown = false;
      slider.classList.remove('cursor-grabbing');
      slider.style.scrollBehavior = '';
      slider.classList.add('snap-mandatory');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('cursor-grabbing');
      slider.style.scrollBehavior = '';
      slider.classList.add('snap-mandatory');
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });
  }

  const navSections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header-link');

  function handleScrollSpy() {
    let currentId = '';
    navSections.forEach(sec => {
      const secTop = sec.offsetTop;
      if (window.scrollY >= (secTop - window.innerHeight * 0.4)) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-primary');
      link.classList.add('text-white/80');
      // check if it matches current
      if (currentId && link.getAttribute('href') === `#${currentId}`) {
        link.classList.remove('text-white/80');
        link.classList.add('text-primary');
        // subtle glow
        link.style.textShadow = "0 0 10px rgba(212,175,55,0.4)";
      } else {
        link.style.textShadow = "none";
      }
    });
  }

  function onScroll() {
    requestAnimationFrame(() => {
      handleHeroScroll();
      handleHeroAltScroll();
      handleTechScroll();
      handleScrollSpy();
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
