import { Section } from "@/enums";
import { createI18n } from "vue-i18n";

export const i18n = createI18n({
  locale: "it",
  fallback: "en",
  messages: {
    it: {
      sections: {
        [Section.DEVELOPERS]: "sviluppatori",
        [Section.PROJECT]: "progetto",
        [Section.SHOP]: "shop",
        [Section.STORAGE]: "storage",
      },
      headers: {
        home: {
          slogan: "Un modo più pulito per scrivere",
        },
      },
      views: {
        home: {
          callToAction: "Provalo Gratis",
        },
      },
    },
    en: {
      sections: {
        [Section.DEVELOPERS]: "developers",
        [Section.PROJECT]: "project",
        [Section.SHOP]: "shop",
        [Section.STORAGE]: "storage",
      },
      headers: {
        home: {
          slogan: "A cleanest way to write",
        },
      },
      views: {
        home: {
          callToAction: "Try for Free",
        },
      },
    },
  },
});
