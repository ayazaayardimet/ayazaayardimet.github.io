/* ============================================================
   AYAZ — charity site
   Vanilla JS: i18n, lightbox (with history API), copy-to-clipboard,
   scroll reveals, floating-button scroll behaviour.
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. TRANSLATIONS
     ---------------------------------------------------------- */
  const translations = {
    az: {
      pageTitle: 'Balaca Ayaza dəstək',
      heroHeadline: 'Balaca Ayazın dəstəyinizə ehtiyacı var',
      heroSubtitle: 'Ayaz — 4 yaşında',
      scrollDown: 'Aşağı sürüşdürün',

      storyTitle: 'Ayazın hekayəsi',
      storyText:
        'Ayaz hələ çox kiçikdir, lakin doğulduğu gündən bəri həyatın ən ağır sınaqları ilə mübarizə aparır. Ona qoyulan "Serebral İflic (USİ) və kobud spastik tetraparez" diaqnozu onun sərbəst hərəkət etməsinə, yaşıdları kimi qaçıb oynamasına mane olur. Ayazın bədənindəki bu gərginliyi azaltmaq və onu ayağa qaldırmaq üçün davamlı və bahalı reabilitasiya müalicələrinə ehtiyac var. Ailənin maddi imkanı bu ağır müalicə xərclərini təkbaşına qarşılamağa yetmir. Sizin edəcəyiniz kiçik bir yardım, Ayazın gələcəyinə qoyulan böyük bir kərpic ola bilər.',

      medicalTitle: 'Tibbi vəziyyət və əlaqə',
      diagnosisTitle: 'Diaqnoz',
      diagnosisText:
        'Serebral İflic (USİ) və ağır spastik tetraparez. Ayazın əzələləri həddən artıq gərgindir, bu da onun dörd ətrafının sərbəst hərəkət etməsinə mane olur.',
      treatmentTitle: 'Müalicə',
      treatmentText:
        'Ayazın daimi və bahalı reabilitasiya müalicəsinə ehtiyacı var — əzələ gərginliyini azaltmaq, onun ayağa qalxmasına və hərəkət etməsinə kömək etmək üçün.',
      contactTitle: 'Ailə / Əlaqə',
      motherLabel: 'Ana',
      addressLabel: 'Ünvan',
      addressText: 'Xırdalan şəhəri, AAAF Park, 25-ci küçə, bina 5, ev 13',
      phoneLabel: 'Telefon',

      galleryTitle: 'Ayazın gözündən',

      documentsTitle: 'Rəsmi sənədlər',
      documentsCaption:
        'Bu sənədlər Ayazın diaqnozunu və əlillik statusunu təsdiqləyir.',

      donationTitle: 'Yardım üçün bank kartları',
      copyBtn: 'Kopyala',
      copiedBtn: 'Kopyalandı',
      trustNote:
        'Hər üç kart ailənin özünə — <strong>Leyla Gözəlovaya</strong> aiddir və yalnız onun şəxsi nəzarətindədir. Bütün yardımlar birbaşa Ayazın müalicəsi üçün ailənin özünə çatır.',

      cardsBtn: 'Kartlara bax',
    },

    tr: {
      pageTitle: 'Küçük Ayaz\'a destek',
      heroHeadline: 'Küçük Ayaz desteğinize ihtiyaç duyuyor',
      heroSubtitle: 'Ayaz — 4 yaşında',
      scrollDown: 'Aşağı kaydırın',

      storyTitle: 'Ayaz\'ın hikayesi',
      storyText:
        'Ayaz henüz çok küçük, ama doğduğu günden beri hayatın en ağır sınavlarıyla mücadele ediyor. Konulan "Serebral Palsi (CP) ve ağır spastik tetraparezi" tanısı, onun bağımsız hareket etmesine, yaşıtları gibi koşup oynamasına engel oluyor. Ayaz\'ın vücudundaki bu gerginliği azaltmak ve onu ayağa kaldırmak için sürekli ve pahalı rehabilitasyon tedavilerine ihtiyaç var. Ailenin maddi imkanı bu ağır tedavi masraflarını tek başına karşılamaya yetmiyor. Sizin yapacağınız küçük bir yardım, Ayaz\'ın geleceğine konan büyük bir tuğla olabilir.',

      medicalTitle: 'Tıbbi durum ve iletişim',
      diagnosisTitle: 'Tanı',
      diagnosisText:
        'Serebral Palsi (CP) ve ağır spastik tetraparezi. Ayaz\'ın kasları aşırı gergin, bu durum dört uzvunun da serbestçe hareket etmesine engel oluyor.',
      treatmentTitle: 'Tedavi',
      treatmentText:
        'Ayaz\'ın sürekli ve pahalı rehabilitasyon tedavisine ihtiyacı var — kas gerginliğini azaltmak, ayağa kalkmasına ve hareket etmesine yardımcı olmak için.',
      contactTitle: 'Aile / İletişim',
      motherLabel: 'Anne',
      addressLabel: 'Adres',
      addressText: 'Xırdalan şehri, AAAF Park, 25. sokak, bina 5, daire 13',
      phoneLabel: 'Telefon',

      galleryTitle: 'Ayaz\'ın gözünden',

      documentsTitle: 'Resmi belgeler',
      documentsCaption:
        'Bu belgeler Ayaz\'ın tanısını ve engellilik durumunu belgeliyor.',

      donationTitle: 'Yardım için banka kartları',
      copyBtn: 'Kopyala',
      copiedBtn: 'Kopyalandı',
      trustNote:
        'Üç kartın tamamı ailenin kendisine — <strong>Leyla Gözəlova\'ya</strong> aittir ve yalnızca onun kişisel kontrolündedir. Tüm yardımlar doğrudan Ayaz\'ın tedavisi için ailesine ulaşır.',

      cardsBtn: 'Kartlara bak',
    },

    ru: {
      pageTitle: 'Поддержка маленького Аяза',
      heroHeadline: 'Маленькому Аязу нужна ваша поддержка',
      heroSubtitle: 'Аязу — 4 года',
      scrollDown: 'Прокрутите вниз',

      storyTitle: 'История Аяза',
      storyText:
        'Аяз ещё совсем мал, но с самого рождения борется с тяжелейшими испытаниями. Поставленный ему диагноз — «Детский церебральный паралич (ДЦП) и тяжёлый спастический тетрапарез» — мешает ему свободно двигаться, бегать и играть, как его сверстники. Чтобы уменьшить напряжение в его теле и поставить его на ноги, нужны постоянные и дорогостоящие реабилитационные процедуры. Финансовых возможностей семьи недостаточно, чтобы покрыть такие большие расходы на лечение в одиночку. Ваша небольшая помощь может стать большим кирпичом в фундаменте будущего Аяза.',

      medicalTitle: 'Медицинское состояние и контакты',
      diagnosisTitle: 'Диагноз',
      diagnosisText:
        'Детский церебральный паралич (ДЦП) и тяжёлый спастический тетрапарез. Мышцы Аяза находятся в чрезмерном напряжении, что мешает свободному движению всех его четырёх конечностей.',
      treatmentTitle: 'Лечение',
      treatmentText:
        'Аязу необходима постоянная и дорогостоящая реабилитационная терапия — чтобы снять мышечное напряжение, помочь ему встать на ноги и двигаться.',
      contactTitle: 'Семья / Контакты',
      motherLabel: 'Мама',
      addressLabel: 'Адрес',
      addressText: 'г. Хырдалан, AAAF Park, 25-я улица, дом 5, кв. 13',
      phoneLabel: 'Телефон',

      galleryTitle: 'Глазами Аяза',

      documentsTitle: 'Официальные документы',
      documentsCaption:
        'Эти документы подтверждают диагноз и статус инвалидности Аяза.',

      donationTitle: 'Банковские карты для помощи',
      copyBtn: 'Копировать',
      copiedBtn: 'Скопировано',
      trustNote:
        'Все три карты принадлежат самой семье — <strong>Лейле Гёзаловой</strong> — и находятся исключительно под её личным контролем. Все пожертвования напрямую поступают семье на лечение Аяза.',

      cardsBtn: 'Карты помощи',
    },

    en: {
      pageTitle: 'Support little Ayaz',
      heroHeadline: 'Little Ayaz needs your support',
      heroSubtitle: 'Ayaz — 4 years old',
      scrollDown: 'Scroll down',

      storyTitle: 'Ayaz\'s story',
      storyText:
        'Ayaz is still very young, but ever since the day he was born he has been fighting some of life\'s hardest battles. His diagnosis — "Cerebral Palsy (CP) and severe spastic tetraparesis" — prevents him from moving freely, running and playing like his peers. To ease the tension in his body and help him stand on his feet, he needs continuous and costly rehabilitation therapy. His family cannot cover these heavy treatment costs on their own. The small help you give can be a big brick laid in Ayaz\'s future.',

      medicalTitle: 'Medical condition & contact',
      diagnosisTitle: 'Diagnosis',
      diagnosisText:
        'Cerebral Palsy (CP) and severe spastic tetraparesis. Ayaz\'s muscles are extremely tense, which prevents all four of his limbs from moving freely.',
      treatmentTitle: 'Treatment',
      treatmentText:
        'Ayaz needs continuous and costly rehabilitation therapy — to ease his muscle tension and help him stand and move on his own.',
      contactTitle: 'Family / Contact',
      motherLabel: 'Mother',
      addressLabel: 'Address',
      addressText: 'Khirdalan, AAAF Park, 25th street, building 5, apt 13',
      phoneLabel: 'Phone',

      galleryTitle: 'Through Ayaz\'s eyes',

      documentsTitle: 'Official documents',
      documentsCaption:
        'These documents confirm Ayaz\'s diagnosis and disability status.',

      donationTitle: 'Bank cards for donation',
      copyBtn: 'Copy',
      copiedBtn: 'Copied',
      trustNote:
        'All three cards belong to the family itself — to <strong>Leyla Gözəlova</strong> — and are under her personal control alone. Every donation goes directly to the family for Ayaz\'s treatment.',

      cardsBtn: 'See the cards',
    },
  };

  /* ----------------------------------------------------------
     2. STATE
     ---------------------------------------------------------- */
  const STORAGE_KEY = 'ayaz-lang';
  let currentLang = 'az';
  // Tracks whether a history entry was pushed for the lightbox.
  // Prevents history.back() from going further than the lightbox state.
  let lightboxHistoryPushed = false;

  /* ----------------------------------------------------------
     3. LANGUAGE
     ---------------------------------------------------------- */
  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'az';
    currentLang = lang;

    const t = translations[lang];
    document.documentElement.lang = lang;
    document.title = t.pageTitle;

    // text nodes
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // html-allowed nodes (trust note has <strong>)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // active language button
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });

    // Reset any copy button that happens to be mid-"Kopyalandı" so it reflects
    // the new language (we just rewrote its label via [data-i18n] above).
  }

  function initLanguage() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* private mode */ }
    applyLanguage(saved || 'az');

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        applyLanguage(lang);
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
      });
    });
  }

  /* ----------------------------------------------------------
     4. HEADER scroll effect + hero scroll-down indicator
     ---------------------------------------------------------- */
  function initScrollEffects() {
    const header = document.getElementById('siteHeader');
    const hero = document.getElementById('hero');
    const scrollIndicator = document.getElementById('scrollIndicator');

    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      header.classList.toggle('is-scrolled', y > 24);

      // Fade the indicator out once we've scrolled past ~40% of hero.
      if (hero && scrollIndicator) {
        const threshold = hero.offsetHeight * 0.4;
        scrollIndicator.classList.toggle('is-hidden', y > threshold);
      }
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ----------------------------------------------------------
     5. Reveal-on-scroll using IntersectionObserver
     ---------------------------------------------------------- */
  function initReveals() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ----------------------------------------------------------
     6. LIGHTBOX (with History API for back-button behaviour)
     ---------------------------------------------------------- */
  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');
    if (!lightbox || !lightboxImg) return;

    function openLightbox(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('is-lightbox-open');

      // Push a history state ONLY on the first open in a series.
      // If the user clicks one thumb after another without closing,
      // we don't push extra states.
      if (!lightboxHistoryPushed) {
        history.pushState({ lightbox: true }, '');
        lightboxHistoryPushed = true;
      }
    }

    function closeLightbox(opts) {
      const fromPopstate = opts && opts.fromPopstate;
      if (!lightbox.classList.contains('is-open')) return;

      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-lightbox-open');
      // small delay to clear src after fade so it doesn't flash blank
      setTimeout(() => { lightboxImg.src = ''; }, 250);

      // If we closed manually (X button, backdrop, Escape), pop the state we pushed.
      // If close was triggered BY popstate, the browser already moved history back.
      if (lightboxHistoryPushed && !fromPopstate) {
        history.back();
      }
      lightboxHistoryPushed = false;
    }

    // Wire up every thumb (gallery photos AND documents).
    document.querySelectorAll('[data-src]').forEach((el) => {
      el.addEventListener('click', () => {
        const src = el.getAttribute('data-src');
        const img = el.querySelector('img');
        const alt = img ? img.alt : '';
        openLightbox(src, alt);
      });
    });

    closeBtn.addEventListener('click', () => closeLightbox());

    // click outside the image to close
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // ESC to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });

    // Hardware/browser BACK button -> just close lightbox, don't leave site
    window.addEventListener('popstate', () => {
      if (lightbox.classList.contains('is-open')) {
        closeLightbox({ fromPopstate: true });
      }
    });
  }

  /* ----------------------------------------------------------
     7. COPY-TO-CLIPBOARD on bank cards
     ---------------------------------------------------------- */
  function initCopyButtons() {
    const buttons = document.querySelectorAll('.copy-btn');

    async function copyText(text) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (_) {
        // fallback for older browsers / non-secure contexts
        try {
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.setAttribute('readonly', '');
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          const ok = document.execCommand('copy');
          document.body.removeChild(ta);
          return ok;
        } catch (e) {
          return false;
        }
      }
    }

    buttons.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const number = btn.getAttribute('data-copy');
        const label = btn.querySelector('.copy-label');
        if (!number || !label) return;

        const ok = await copyText(number);
        if (!ok) return;

        // Swap label to "Kopyalandı" for ~2s, keeping i18n in sync.
        label.setAttribute('data-i18n', 'copiedBtn');
        label.textContent = translations[currentLang].copiedBtn;
        btn.classList.add('is-copied');

        clearTimeout(btn._copyTimer);
        btn._copyTimer = setTimeout(() => {
          label.setAttribute('data-i18n', 'copyBtn');
          label.textContent = translations[currentLang].copyBtn;
          btn.classList.remove('is-copied');
        }, 2000);
      });
    });
  }

  /* ----------------------------------------------------------
     8. Floating "Kartlara bax" button -> smooth scroll to donation
     ---------------------------------------------------------- */
  function initCardsButton() {
    const btn = document.getElementById('cardsBtn');
    const donation = document.getElementById('donation');
    if (!btn || !donation) return;

    btn.addEventListener('click', () => {
      // 'center' so the section sits comfortably in the viewport.
      donation.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* ----------------------------------------------------------
     INIT
     ---------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initScrollEffects();
    initReveals();
    initLightbox();
    initCopyButtons();
    initCardsButton();
  });
})();
