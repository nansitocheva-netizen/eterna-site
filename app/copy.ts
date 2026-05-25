/**
 * Single source of truth for all UI copy.
 *
 * EDITING GUIDE FOR COPY TEAM:
 *   - Change only the string values between the quotes.
 *   - Use \n inside a string to create a line break in a heading.
 *   - Do not change property names (the keys) — those are referenced in code.
 *   - Fields marked with (aria) are screen-reader labels, not visible text.
 *
 * LOCALIZATION:
 *   When adding a second language, duplicate this file (e.g. copy.en.ts)
 *   and swap the import in each page. A proper i18n library (e.g. next-intl)
 *   can then replace the direct import with no key renames needed.
 */

export const copy = {

  /* ─── Shared across pages ──────────────────────────────────────────── */
  shared: {
    /** Default CTA button used in hero and closing sections */
    checkDatesBtn: "ПРОВЕРИ СВОБОДНИ ДАТИ",
    /** "How it works" section eyebrow label */
    howItWorksEyebrow: "КАК РАБОТИ",
  },

  /* ─── Home page (/) ─────────────────────────────────────────────────── */
  home: {
    hero: {
      /** Main headline. \n = line break. */
      heading: "НЕ САМО СНИМКИ.\nГЛАСОВЕ. УСМИВКИ.\nЕМОЦИИ.",
      body: "Видео будка за послания, която превръща думите на вашите гости в незабравим физически албум.",
      cta: "ПРОВЕРИ СВОБОДНИ ДАТИ",
    },

    features: [
      {
        title: "ФИЗИЧЕСКИ АЛБУМ",
        text: "Не само файлове — получавате красив физически продукт с вградени видео послания, персонализиран специално за вашето събитие.",
      },
      {
        title: "ПЕРСОНАЛИЗИРАНО",
        text: "Вашите имена, дата и дизайн. Всеки детайл е направен специално за вас — от стартовия екран до финалния албум.",
      },
      {
        title: "БЕЗ НИКАКВО УСИЛИЕ",
        text: "Нашият екип настройва всичко и е на място по време на цялото събитие. Гостите просто застават пред камерата.",
      },
    ],

    steps: [
      {
        number: "01",
        title: "Гостите записват",
        text: "Всеки гост застава пред будката и записва своето послание — лично, искрено, неповторимо.",
      },
      {
        number: "02",
        title: "Ние се грижим за всичко",
        text: "Нашият екип настройва будката и е присъствен по време на цялото събитие, за да осигури безупречно изживяване.",
      },
      {
        number: "03",
        title: "Получавате своя албум",
        text: "След събитието получавате своя персонализиран физически албум с вградени видео послания, готов да го пазите цял живот.",
      },
    ],

    albumSection: {
      eyebrow: "ВАШИЯТ АЛБУМ",
      /** Heading with intentional line breaks. */
      heading: "Физически.\nПерсонализиран.\nЗавинаги ваш.",
      body: "Не просто файлове на USB — получавате красив физически албум, персонализиран с имената ви и датата на събитието, с вграден дигитален достъп до всички видео послания от гостите ви.",
      link: "Разгледай видео албума →",
    },

    events: {
      eyebrow: "ЗА ВСЕКИ СПЕЦИАЛЕН ПОВОД",
      heading: "Сватби. Рождени дни.\nКорпоративни събития. Baby showers.",
      /** Labels used both in the grid cards and aria labels. */
      items: ["Сватби", "Рождени дни", "Корпоративни събития", "Baby Showers"],
    },

    founder: {
      eyebrow: "ЗА НАС",
      quote: "Присъствах на сватба на близки приятели и осъзнах, че след края на вечерта всичко казано — сълзите, смехът, думите от сърце — просто изчезна. Eterna Memories се роди от едно желание: да дадем на хората нещо, което да остане.",
      /** Replace placeholder with the founder's actual name. */
      name: "— [ИМЕ НА ОСНОВАТЕЛЯ]",
    },

    social: {
      eyebrow: "ВИЖТЕ НИ В ДЕЙСТВИЕ",
      text: "Истории от реални събития, зад кулисите и много повече — последвайте ни в Instagram.",
      handle: "@eterna__memories →",
    },

    faq: {
      eyebrow: "ВЪПРОСИ & ОТГОВОРИ",
      items: [
        {
          q: "Как получавам видеата след събитието?",
          a: "Получавате своя персонализиран физически албум с вграден дигитален достъп до всички видео послания. Нищо не се губи.",
        },
        {
          q: "Нужен ли е интернет по време на събитието?",
          a: "Не — будката работи напълно офлайн. Нужна е само захранваща розетка.",
        },
        {
          q: "Нужно ли е гостите да инсталират приложение?",
          a: "Не. Просто застават пред камерата, натискат бутон и записват. Нищо повече.",
        },
        {
          q: "Записва ли физическата слушалка на будката?",
          a: "Не — слушалката е декоративен елемент и е част от визията на будката. Записването се осъществява през вградената камера и микрофон.",
        },
        {
          q: "За какви поводи е подходяща будката?",
          a: "За всеки специален повод — сватби, рождени дни, корпоративни събития, baby showers и всякакви тържества.",
        },
        {
          q: "Как се осъществява резервацията?",
          a: "Изпратете ни запитване чрез бутона по-долу и ние ще се свържем с вас в рамките на 24 часа.",
        },
      ],
    },

    closingCta: {
      heading: "Готови ли сте да запазите\nсвоите спомени?",
    },
  },

  /* ─── Video Booth page (/video-booth) ──────────────────────────────── */
  videoBooth: {
    hero: {
      label: "VIDEO BOOTH",
      heading: "Думите, казани\nот сърце —\nзапазени завинаги",
      body: "Дайте на гостите си гласа, който заслужават. Лични видео послания, записани пред елегантна будка — и доставени в красив физически албум след вашето събитие.",
      cta: "ЗАПАЗИ СВОЯТА ДАТА",
    },

    steps: [
      {
        number: "01",
        title: "Гостите записват",
        text: "Всеки гост застава пред будката и записва своето послание — лично, искрено, без сценарий.",
      },
      {
        number: "02",
        title: "Ние се грижим за всичко",
        text: "Нашият екип настройва будката и е присъствен по време на цялото събитие — вие се наслаждавате на деня си.",
      },
      {
        number: "03",
        title: "Получавате своя албум",
        text: "След събитието получавате своя персонализиран физически албум с вградени видео послания, готов да го пазите цял живот.",
      },
    ],

    included: {
      label: "КАКВО ВКЛЮЧВА",
      items: [
        "Лесно преносима видео будка",
        "Таблет за заснемане на видео послания",
        "Винтидж телефон като декоративен акцент",
        "Персонализиран стартов екран с вашите имена",
        "Персонализирани инициали и дизайн на албума",
        "Физически албум с вграден дигитален достъп",
        "Доставка на всички файлове на USB и в облака",
        "Присъствие на екип от началото до края",
      ],
    },

    closingCta: {
      heading: "Готови ли сте да я включите\nв своето събитие?",
      subtext: "Свободните дати се запълват бързо. Свържете се с нас и запазете своята.",
    },
  },

  /* ─── Video Album page (/video-album) ──────────────────────────────── */
  videoAlbum: {
    intro: {
      eyebrow: "ВИДЕО АЛБУМ",
      heading: "Физически продукт.\nДигитален достъп.\nСпомени за цял живот.",
      text: "Не просто видео файлове — получавате красив физически албум, персонализиран с вашите имена и дата на събитието, с вграден дигитален достъп до всички послания от гостите ви. По-долу можете да разгледате как изглежда албумът.",
    },

    showcase: {
      src: "/showcase.MOV",
      ariaLabel: "Демо видео на видео албума",
    },

    album: {
      /** Sample first name on the demo album cover. */
      name1: "Силвия",
      /** Conjunction between the two names on the cover. */
      conjunction: "и",
      /** Sample second name on the demo album cover. */
      name2: "Петър",
      /** Sample date shown on the demo album cover. */
      date: "16.05.2026 г.",
      openBtn: "Отвори албума",
      closeBtn: "Затвори албума",
      /** Alt text for the closed album image (aria). */
      closedAlt: "Затворен албум",
      /** Alt text for the open album image (aria). */
      openAlt: "Отворен албум",
      /** Aria label for the invisible open trigger button (aria). */
      openTriggerAriaLabel: "Отвори албума",
      /** Demo videos shown inside the open album screen. Replace with real guest messages. */
      demoVideoSources: ["/video1.mov", "/video2.mov"],
      /** Aria label for the demo video element (aria). */
      demoVideoAriaLabel: "Демо видео от албума",
      customiseBtn: "Персонализирай корицата",
      name1Label: "Първо име",
      name1Placeholder: "Силвия",
      name2Label: "Второ име",
      name2Placeholder: "Петър",
      dateLabel: "Дата",
      datePlaceholder: "16.05.2026 г.",
    },

    /** Aria labels for the player controls inside the open album (aria). */
    playerLabels: {
      previous: "Предишно видео",
      play: "Пусни",
      pause: "Пауза",
      next: "Следващо видео",
      volumeDown: "Намали звука",
      volumeUp: "Увеличи звука",
    },

    closingCta: {
      heading: "Искате такъв албум за вашето събитие?",
    },
  },

  /* ─── Contact page (/contact) ──────────────────────────────────────── */
  contact: {
    intro: {
      eyebrow: "КОНТАКТИ",
      heading: "Свържете се с нас",
      text: "Имате въпрос или искате да проверите свободни дати?\nЩе се свържем с вас в рамките на 24 часа.",
    },

    info: {
      label: "НАМЕРЕТЕ НИ",
      items: [
        { label: "Телефон",   value: "+359 888 887 763",            href: "tel:+359888887763",                            external: false },
        { label: "Имейл",     value: "eternamemories.bg@gmail.com", href: "mailto:eternamemories.bg@gmail.com",           external: false },
        { label: "Instagram", value: "@eterna__memories",           href: "https://instagram.com/eterna__memories",       external: true  },
        { label: "TikTok",    value: "@eterna__memories",            href: "https://tiktok.com/@eterna__memories",          external: true  },
      ],
    },

    form: {
      label: "ИЗПРАТЕТЕ ЗАПИТВАНЕ",
      nameLabel: "Вашето име *",
      namePlaceholder: "Иван Иванов",
      emailLabel: "Имейл *",
      emailPlaceholder: "ivan@example.com",
      phoneLabel: "Телефон",
      phonePlaceholder: "+359 ...",
      messageLabel: "Съобщение *",
      messagePlaceholder: "Разкажете ни за вашия повод, дата и всичко, което искате да знаем.",
      submitBtn: "ИЗПРАТИ ЗАПИТВАНЕ",
      submittingBtn: "ИЗПРАЩАНЕ…",
    },

    success: {
      title: "Съобщението е изпратено!",
      text: "Благодарим ви. Ще се свържем с вас в рамките на 24 часа.",
    },

    errors: {
      generic: "Нещо се обърка. Моля, опитайте отново.",
    },
  },
};
