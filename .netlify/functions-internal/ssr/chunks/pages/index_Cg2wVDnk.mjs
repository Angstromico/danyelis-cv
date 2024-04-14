/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderComponent, j as renderHead, k as renderSlot, m as maybeRenderHead } from '../astro_D7IafjYo.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useCallback } from 'react';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { atom } from 'nanostores';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './generic_C1Jqvvlv.mjs';

const $$Astro$b = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/repositorios/Astro/CV/node_modules/astro/components/ViewTransitions.astro", void 0);

const languages = {
  en: "English",
  es: "Español"
};
const defaultLang = "en";
const ui = {
  en: {
    "nav.home": "Home",
    "nav.profile": "Profile",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.certificates": "Certificates",
    "nav.references": "References",
    "home.profession": "Materials Engineer",
    "home.download": "Download CV",
    profile: "Profile",
    "profile.description": "Highly motivated Materials Engineer with a specialization in polymer materials and a proven track record in Quality and Production Control. Possesses extensive experience operating and maintaining industrial production machinery for the creation of plastic bags using extrusion, blowing, and sealing processes. Eager to leverage expertise to contribute to a quality-focused manufacturing environment.",
    education: "Education",
    "education.title": "Polymer Expert",
    "education.college": "Territorial Polytechnic University of Valencia",
    "education.academy": "Beil's Academy",
    "education.degree": "Production Control",
    "education.secondDegree": "QA",
    "education.thirdDegree": "Warehouse and Inventory Control",
    "education.fourthDegree": "Hygiene and Industrial Security",
    "education.fifthDegree": "Pharmacy Assistant",
    "education.showLess": "Show Less",
    "education.showMore": "Show More",
    skills: "Skills",
    "skills.skill1": "Industrial machinery operator",
    "skills.skill2": "Quality Assurance",
    "skills.skill3": "Warehouse Management",
    "skills.skill4": "Industrial Security",
    "skills.skill5": "Materials Engineering",
    "skills.skill6": "Pharmacy Assistance",
    experince: "Experince",
    "experience.title": "Sealing Operator",
    "experience.description": "In my previous role as a Sealing Operator at Plasticion C.A., my responsibilities centered around overseeing critical sealing operations integral to our plastic product manufacturing process.",
    "experience.title2": "Industrial Laboratory Intern (Chromatography)",
    "experience.description2": "During my time as an Industrial Laboratory Intern specializing in Chromatography at PDVSA, I was immersed in a dynamic environment where precision and accuracy were paramount.",
    "experience.title3": "Sealing Operator",
    "experience.description3": "In my role as a Sealing Operator at PMV Plastmel de Venezuela C.A., I was entrusted with overseeing the sealing operations vital to the production of plastic products.",
    referenses: "References",
    "referenses.title": "Web Developer",
    "referenses.title2": "Higher University Technician Materials Engineer",
    "referenses.title3": "Petrochemical Engineering",
    interests: "Interests",
    "interests.name": "Music",
    "interests.name2": "Beauty",
    "interests.name3": "Travel",
    "interests.name4": "Fitness",
    "interests.name5": "Celebrations",
    description: "Danyelis Coronel curriculum page"
  },
  es: {
    "nav.home": "Home",
    "nav.profile": "Perfil",
    "nav.education": "Educación",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.certificates": "Certificados",
    "nav.references": "Referencias",
    "home.profession": "Ingeniera en Materiales",
    "home.download": "Descargue CV",
    profile: "Perfil",
    "profile.description": "Ingeniera de Materiales altamente motivada con especialización en materiales poliméricos y trayectoria comprobada en Control de Calidad y Producción. Posee amplia experiencia operando y manteniendo maquinaria de producción industrial para la creación de bolsas plásticas mediante procesos de extrusión, soplado y sellado. Deseosa de aprovechar la experiencia para contribuir a un entorno de fabricación centrado en la calidad.",
    education: "Educación",
    "education.title": "Técnica polimerista",
    "education.college": "Universidad Politécnica Territorial de Valencia",
    "education.academy": "Academia Beil",
    "education.degree": "Control de Producción",
    "education.secondDegree": "Control de Calidad",
    "education.thirdDegree": "Control de Almacén e Inventario",
    "education.fourthDegree": "Higiene y Seguridad Industrial",
    "education.fifthDegree": "Ayudante de Farmacia",
    "education.showLess": "Mostrar menos",
    "education.showMore": "Mostrar más",
    skills: "Habilidades",
    "skills.skill1": "Operadora de maquinaria industrial",
    "skills.skill2": "Control de Calidad",
    "skills.skill3": "Gestión de Almacenes",
    "skills.skill4": "Seguridad Industrial",
    "skills.skill5": "Ingeniería de Materiales",
    "skills.skill6": "Asistente de Farmacia",
    experince: "Experiencia",
    "experience.title": "Operadora de Sellado",
    "experience.description": "Como Operadora de Sellado en Plasticion C.A., mi labor implicaba supervisar las operaciones de sellado cruciales para los procesos de fabricación de productos plásticos.",
    "experience.title2": "Pasante de Laboratorio Industrial (Cromatografia)",
    "experience.description2": "Durante mi tiempo como Pasante de Laboratorio Industrial especializado en Cromatografía en PDVSA, estuve inmerso en un entorno dinámico donde la precisión y la exactitud eran primordiales.",
    "experience.title3": "Operadora de Sellado",
    "experience.description3": "En mi puesto como Operador de Sellado en PMV Plastmel de Venezuela C.A., se me confió la responsabilidad de supervisar las operaciones de sellado vitales para la producción de productos plásticos.",
    referenses: "Referensias",
    "referenses.title": "Desarrollador Web",
    "referenses.title2": "TSU Materiales Industriales",
    "referenses.title3": "Ingeniera Petroquímica",
    interests: "Intereses",
    "interests.name": "Música",
    "interests.name2": "Belleza",
    "interests.name3": "Viajar",
    "interests.name4": "Ejercicio",
    "interests.name5": "Celebraciones",
    description: "Danyelis Coronel pagina curriculum"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui)
    return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

const BoxIcon = ({ name, classAlt = "nav__icon", l }) => {
  return /* @__PURE__ */ jsx("i", { className: `bx bx${l ?? ""}-${name} ${classAlt}` });
};

const Header = ({ linksInfo }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [elementToScroll, setElementToScroll] = useState("");
  const toggleMenu = () => setOpenMenu(!openMenu);
  const removeMenu = () => setOpenMenu(false);
  const scrollToElement = (id) => {
    removeMenu();
    setElementToScroll(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsx("header", { className: "l-header", id: "header", children: /* @__PURE__ */ jsxs("nav", { className: "nav bd-container", children: [
    /* @__PURE__ */ jsxs("button", { onClick: () => scrollToElement("home"), className: "nav__logo", children: [
      "Danye",
      /* @__PURE__ */ jsx(BoxIcon, { name: "home" })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `nav__menu ${openMenu ? "show-menu" : ""}`,
        id: "nav-menu",
        children: /* @__PURE__ */ jsx("ul", { className: "nav__list", children: /* @__PURE__ */ jsx("li", { className: "nav__item", children: linksInfo.map((link, i) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => scrollToElement(link.link),
            className: `nav__link ${elementToScroll === link.link ? "active-link" : ""}`,
            children: [
              /* @__PURE__ */ jsx(BoxIcon, { name: link.icon }),
              link.title
            ]
          },
          i
        )) }) })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "nav__toggle", id: "nav-toggle", onClick: toggleMenu, children: /* @__PURE__ */ jsx(BoxIcon, { name: "grid-alt" }) })
  ] }) });
};

const scrollTo = atom("");
const setScroll = (id) => {
  scrollTo.set(id);
};

const LangContainer = ({ languages }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToElement = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("ul", { className: `language-selector ${isScrolled ? "scroll" : ""}`, children: Object.entries(languages).map(([lang, label]) => /* @__PURE__ */ jsxs("li", { children: [
      " ",
      /* @__PURE__ */ jsx(
        "a",
        {
          onClick: () => scrollToElement(scrollTo.value ? scrollTo.value : ""),
          href: `/${lang === "en" ? "" : lang + "/"}`,
          children: label
        }
      ),
      " "
    ] }, lang)) }),
    /* @__PURE__ */ jsx("div", { className: `language-selector-mobile ${isScrolled ? "scroll" : ""}`, children: /* @__PURE__ */ jsx("ul", { children: Object.entries(languages).map(([lang, label]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      "a",
      {
        onClick: () => scrollToElement(scrollTo.value ? scrollTo.value : ""),
        href: `/${lang === "en" ? "" : lang + "/"}`,
        children: label
      }
    ) }, lang)) }) })
  ] });
};

const $$Astro$a = createAstro();
const $$LanguagePicker = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$LanguagePicker;
  return renderTemplate`${renderComponent($$result, "LangContainer", LangContainer, { "languages": languages, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/repositorios/Astro/CV/src/components/LangContainer", "client:component-export": "default" })}`;
}, "D:/repositorios/Astro/CV/src/components/LanguagePicker.astro", void 0);

const CvDanye = new Proxy({"src":"/_astro/cvdanye.RSfAUSDX.png","width":1843,"height":936,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/repositorios/Astro/CV/src/assets/cvdanye.png";
							}
							
							return target[name];
						}
					});

const $$Astro$9 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const linksInfo = [{ icon: "user-circle", title: t("nav.profile"), link: "profile" }, { icon: "book", title: t("nav.education"), link: "education" }, { icon: "receipt", title: t("nav.skills"), link: "skills" }, { icon: "briefcase", title: t("nav.experience"), link: "experience" }, { icon: "award", title: t("nav.certificates"), link: "certificates" }, { icon: "link-external", title: t("nav.references"), link: "references" }];
  const mainUrl = Astro2.url.href;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><meta name="description"${addAttribute(t("description"), "content")}><meta property="og:url"${addAttribute(mainUrl, "content")}><meta property="og:description"${addAttribute(t("description"), "content")}><meta name="viewport" content="width=device-width"><meta property="og:image"${addAttribute(CvDanye.src, "content")}><meta property="og:type" content="website"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(mainUrl, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(t("profile.description"), "content")}><meta property="twitter:image"${addAttribute(CvDanye.src, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"><!-- Meta Tags Generated with https://metatags.io --><link rel="canonical"${addAttribute(mainUrl, "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "LanguagePicker", $$LanguagePicker, {})} ${renderComponent($$result, "HeaderReact", Header, { "client:visible": true, "linksInfo": linksInfo, "client:component-hydration": "visible", "client:component-path": "D:/repositorios/Astro/CV/src/components/Header.tsx", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/repositorios/Astro/CV/src/layouts/Layout.astro", void 0);

const DanPic = new Proxy({"src":"/_astro/dandandan.nxX9rq5N.jpeg","width":509,"height":502,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/repositorios/Astro/CV/src/assets/dandandan.jpeg";
							}
							
							return target[name];
						}
					});

const $$Astro$8 = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Home;
  const { name, profession, download } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="home" id="home"> <div class="home__container section bd-grid"> <div class="home__data bd-grid"> ${renderComponent($$result, "Image", $$Image, { "loading": "lazy", "src": DanPic, "alt": "Profile Pic", "class": "home__img", "format": "webp" })} <h1 class="home__title"> ${name.name} <b>${name.lastName}</b> </h1> <h3 class="home__profession">${profession}</h3> <div class="downbtn"> <a download="" href="/cvdan.pdf" class="home__button-mobile relative"> ${download} </a> </div> <div class="deskdown"> <a download="" href="/cvdan.pdf" class="home__button-desk relative"> ${renderComponent($$result, "BoxIcon", BoxIcon, { "name": "download", "classAlt": "down" })} </a> </div> </div> <div class="home__address bd-grid"> <span class="home__information"> ${renderComponent($$result, "BoxIcon", BoxIcon, { "classAlt": "home__icon", "name": "map" })} Lomas de Funval
</span> </div> <div class="home__address bd-grid"> <span class="home__information"> ${renderComponent($$result, "BoxIcon", BoxIcon, { "classAlt": "home__icon", "name": "envelope" })} anaispereira427@gmail.com
</span> </div> <div class="home__address bd-grid"> <span class="home__information"> ${renderComponent($$result, "BoxIcon", BoxIcon, { "classAlt": "", "name": "phone" })} +58 424-4186987
</span> </div> </div> </section>`;
}, "D:/repositorios/Astro/CV/src/components/Home.astro", void 0);

const $$Astro$7 = createAstro();
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Social;
  return renderTemplate`${maybeRenderHead()}<section class="social section"> <h2 class="section-title">SOCIAL</h2> <div class="social__container bd-grid"> <a class="social__link" target="_blank" href="https://www.linkedin.com/in/danyelis-coronel-7751a246/"> ${renderComponent($$result, "BoxIcon", BoxIcon, { "classAlt": "social__icon", "l": "l", "name": "linkedin-square" })} @dancoronel
</a> <a class="social__link" target="_blank" href="https://www.facebook.com/anais.pereira.963"> ${renderComponent($$result, "BoxIcon", BoxIcon, { "classAlt": "social__icon", "l": "l", "name": "facebook-square" })} Anais Pereira
</a> <a class="social__link" target="_blank" href="https://www.instagram.com/anais.pereira.963/?hl=es-la"> ${renderComponent($$result, "BoxIcon", BoxIcon, { "classAlt": "social__icon", "l": "l", "name": "instagram-alt" })} @anais.pereira.963
</a> </div> </section>`;
}, "D:/repositorios/Astro/CV/src/components/Social.astro", void 0);

const $$Astro$6 = createAstro();
const $$Profile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Profile;
  const { profile, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="profile section" id="profile"> <h2 class="section-title">${profile}</h2> <p class="profile__description">${description}</p> </section>`;
}, "D:/repositorios/Astro/CV/src/components/Profile.astro", void 0);

const useScroll = () => {
  const scrollFunc = useCallback((id, func) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          func(id);
        }
      },
      { threshold: 0.5 }
      // Adjust threshold as needed
    );
    const section = document.getElementById(id);
    if (section) {
      observer.observe(section);
    }
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  const scrollToSections = () => {
    const sections = document.querySelectorAll("section");
    if (sections) {
      sections.forEach((section) => {
        if (section.id) {
          const id = section.id;
          scrollFunc(id, setScroll);
        }
      });
    }
  };
  return { scrollFunc, scrollToSections };
};

const EducationContent = ({
  title,
  institution,
  year,
  change,
  hidden
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `education__content transition-opacity duration-500 ${hidden ? "hidden" : "flex"} ${change ? "opacity-100" : "opacity-0"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "education__time", children: [
          /* @__PURE__ */ jsx("span", { className: "education__rounder" }),
          /* @__PURE__ */ jsx("span", { className: "education__line" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "education__data bd-grid", children: [
          /* @__PURE__ */ jsx("h3", { className: "education__title uppercase", children: title }),
          /* @__PURE__ */ jsx("span", { className: "education__studies", children: institution }),
          /* @__PURE__ */ jsx("span", { className: "education__year", children: year })
        ] })
      ]
    }
  );
};

const Education = ({ education, educationData, showEducation }) => {
  const [degrees, setDegrees] = useState(false);
  const [hidden, setHidden] = useState(true);
  const { scrollToSections } = useScroll();
  useEffect(() => {
    scrollToSections();
  }, []);
  const educationD = degrees ? [0, 1, 2, 3, 4, 5] : [0, 1, 2];
  const toggleEducation = () => {
    setHidden(!hidden);
    setTimeout(() => setDegrees(!degrees), 200);
  };
  return /* @__PURE__ */ jsxs("section", { className: "education section", id: "education", children: [
    /* @__PURE__ */ jsx("h2", { className: "section-title", children: education }),
    /* @__PURE__ */ jsx("div", { className: "education__container bd-grid", children: educationData.map((eduInfo, i) => {
      const { title, academy, year } = eduInfo;
      return /* @__PURE__ */ jsx(
        EducationContent,
        {
          title,
          institution: academy,
          year,
          change: educationD.includes(i),
          hidden: !educationD.includes(i) && hidden
        },
        title
      );
    }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full flex justify-center items-center", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: toggleEducation,
        className: "home__button-mobile start transition-all duration-500",
        children: degrees ? showEducation.less : showEducation.more
      }
    ) })
  ] });
};

const $$Astro$5 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Skills;
  const { skillsTitle, skills } = Astro2.props;
  const skills1 = skills.slice(0, 3);
  const skills2 = skills.slice(3, 6);
  const skillsGroups = [skills1, skills2];
  return renderTemplate`${maybeRenderHead()}<section class="skills section" id="skills"> <h2 class="section-title">${skillsTitle}</h2> <div class="skills__content bd-grid"> ${skillsGroups.map(
    (skillsInd) => renderTemplate`<ul class="skills__data"> ${skillsInd.map(
      (skill) => renderTemplate`<li class="skills__name"> <span class="skills__circle"></span> ${skill} </li>`
    )} </ul>`
  )} </div> </section>`;
}, "D:/repositorios/Astro/CV/src/components/Skills.astro", void 0);

const $$Astro$4 = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Experience;
  const { experience, experiences } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="experience section" id="experience"> <h2 class="section-title">${experience}</h2> <div class="experience__container bd-grid"> ${experiences.map((exp) => {
    const { name, description, company } = exp;
    return renderTemplate`<div class="experience__content"> <div class="experience__time"> <div class="experience__rounder"></div> <div class="experience__line"></div> </div> <div class="experience__data bd-grid"> <h3 class="experience__title">${name}</h3> <span class="experience__company">${company}</span> <p class="experince__description">${description}</p> </div> </div>`;
  })} </div> </section>`;
}, "D:/repositorios/Astro/CV/src/components/Experience.astro", void 0);

const $$Astro$3 = createAstro();
const $$References = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$References;
  const { referense, referensesInfo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="references section" id="references"> <h2 class="section-title">${referense}</h2> <div class="referenses__container bd-grid"> ${referensesInfo.map((ref) => {
    const { name, title, phone, mail } = ref;
    return renderTemplate`<div class="referenses__content bd-grid"> <span class="referenses__subtitle">${title}</span> <h3 class="referenses__title">${name}</h3> <ul class="referenses__contact"> <li>Phone: ${phone}</li> <li>Email: ${mail}</li> </ul> </div>`;
  })} </div> </section>`;
}, "D:/repositorios/Astro/CV/src/components/References.astro", void 0);

const Interests = ({ interest, herInterests }) => {
  return /* @__PURE__ */ jsxs("section", { className: "interests section", id: "interests", children: [
    /* @__PURE__ */ jsx("h2", { className: "section-title", children: interest }),
    /* @__PURE__ */ jsx("div", { className: "interests__container bd-grid", children: herInterests.map((int) => {
      const { name, icon } = int;
      return /* @__PURE__ */ jsxs("div", { className: "interests__content", children: [
        /* @__PURE__ */ jsx(BoxIcon, { classAlt: "interests__icon", name: icon }),
        /* @__PURE__ */ jsx("span", { className: "interests__name", children: name })
      ] }, icon);
    }) })
  ] });
};

const ScrollTop = () => {
  const [scroll, setScroll] = useState(false);
  const scrolltoTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ jsx("button", { onClick: scrolltoTop, className: "scrolltop", children: /* @__PURE__ */ jsx(
    BoxIcon,
    {
      name: "up-arrow-alt",
      classAlt: `scrolltop__icon ${scroll ? "show-scroll" : ""}`
    }
  ) });
};

const ThemeBtn = () => {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return /* @__PURE__ */ jsx("button", { onClick: darkModeHandler, children: /* @__PURE__ */ jsx(BoxIcon, { name: dark ? "sun" : "moon", classAlt: "change-theme" }) });
};

const $$Astro$2 = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Main;
  const { name, profession, download, profile, description, education, educationData, skillsTitle, showEducation, skills, experience, experiences, referenses, referensesInfo, interest, herInterests } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="resume" id="area-cv"> <div class="resume__left"> ${renderComponent($$result, "Home", $$Home, { "name": name, "profession": profession, "download": download })} ${renderComponent($$result, "ThemeBtn", ThemeBtn, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/repositorios/Astro/CV/src/components/index", "client:component-export": "ThemeBtn" })} ${renderComponent($$result, "Social", $$Social, {})} ${renderComponent($$result, "Profile", $$Profile, { "profile": profile, "description": description })} ${renderComponent($$result, "Education", Education, { "client:visible": true, "education": education, "educationData": educationData, "showEducation": showEducation, "client:component-hydration": "visible", "client:component-path": "D:/repositorios/Astro/CV/src/components/index", "client:component-export": "Education" })} ${renderComponent($$result, "Skills", $$Skills, { "skillsTitle": skillsTitle, "skills": skills })} </div> <div class="resume__right"> ${renderComponent($$result, "Experience", $$Experience, { "experience": experience, "experiences": experiences })} ${renderComponent($$result, "References", $$References, { "referense": referenses, "referensesInfo": referensesInfo })} ${renderComponent($$result, "Interests", Interests, { "client:visible": true, "interest": interest, "herInterests": herInterests, "client:component-hydration": "visible", "client:component-path": "D:/repositorios/Astro/CV/src/components/index", "client:component-export": "Interests" })} </div> ${renderComponent($$result, "ScrollTop", ScrollTop, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/repositorios/Astro/CV/src/components/index", "client:component-export": "ScrollTop" })} </div>`;
}, "D:/repositorios/Astro/CV/src/components/Main.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const name = { name: "Danyelis", lastName: "Coronel" };
  const education = [{ title: t("education"), academy: t("education.college"), year: "2013 | 2018" }, { title: t("education.degree"), academy: t("education.academy"), year: 2022 }, { title: t("education.secondDegree"), academy: t("education.academy"), year: 2022 }, { title: t("education.thirdDegree"), academy: t("education.academy"), year: 2023 }, { title: t("education.fourthDegree"), academy: t("education.academy"), year: 2023 }, { title: t("education.fifthDegree"), academy: t("education.academy"), year: 2023 }];
  const showEducation = { less: t("education.showLess"), more: t("education.showMore") };
  const skills = [t("skills.skill1"), t("skills.skill2"), t("skills.skill3"), t("skills.skill4"), t("skills.skill5"), t("skills.skill6")];
  const experiences = [{ name: t("experience.title"), description: t("experience.description"), company: "Plasticion C.A. - 2017 | 2018" }, { name: t("experience.title2"), description: t("experience.description2"), company: "PDVSA - 2018" }, { name: t("experience.title3"), description: t("experience.description3"), company: "PMV Plastmel de Venezuela C.A. - 2019 | 2020" }];
  const referenses = [{ name: "Manuel Morales", title: t("referenses.title"), phone: "+58 414-4021058", mail: "manuesteban1990@gmail.com" }, { name: "Brassel Vielma", title: t("referenses.title2"), phone: "+58 424-4460398", mail: "brasselvielma85@gmail.com" }, { name: "Gabriela Montenegro", title: t("referenses.title3"), phone: "+58 424-4214803", mail: "gabriella1536@gmail.com" }];
  const interests = [{ name: t("interests.name"), icon: "headphone" }, { name: t("interests.name2"), icon: "spa" }, { name: t("interests.name3"), icon: "cable-car" }, { name: "TV", icon: "tv" }, { name: t("interests.name4"), icon: "dumbbell" }, { name: t("interests.name5"), icon: "party" }];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Danyelis Coronel Curriculum" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="l-main bd-container"> ${renderComponent($$result2, "Main", $$Main, { "name": name, "profession": t("home.profession"), "download": t("home.download"), "profile": t("profile"), "description": t("profile.description"), "education": t("education"), "educationData": education, "skillsTitle": t("skills"), "showEducation": showEducation, "skills": skills, "experience": t("experince"), "experiences": experiences, "referenses": t("referenses"), "referensesInfo": referenses, "interest": t("interests"), "herInterests": interests })} </main> ` })}`;
}, "D:/repositorios/Astro/CV/src/pages/es/index.astro", void 0);

const $$file$1 = "D:/repositorios/Astro/CV/src/pages/es/index.astro";
const $$url$1 = "/es";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const name = { name: "Danyelis", lastName: "Coronel" };
  const education = [{ title: t("education"), academy: t("education.college"), year: "2013 | 2018" }, { title: t("education.degree"), academy: t("education.academy"), year: 2022 }, { title: t("education.secondDegree"), academy: t("education.academy"), year: 2022 }, { title: t("education.thirdDegree"), academy: t("education.academy"), year: 2023 }, { title: t("education.fourthDegree"), academy: t("education.academy"), year: 2023 }, { title: t("education.fifthDegree"), academy: t("education.academy"), year: 2023 }];
  const showEducation = { less: t("education.showLess"), more: t("education.showMore") };
  const skills = [t("skills.skill1"), t("skills.skill2"), t("skills.skill3"), t("skills.skill4"), t("skills.skill5"), t("skills.skill6")];
  const experiences = [{ name: t("experience.title"), description: t("experience.description"), company: "Plasticion C.A." }, { name: t("experience.title2"), description: t("experience.description2"), company: "PDVSA" }, { name: t("experience.title3"), description: t("experience.description3"), company: "PMV Plastmel de Venezuela C.A." }];
  const referenses = [{ name: "Manuel Morales", title: t("referenses.title"), phone: "+58 414-4021058", mail: "manuesteban1990@gmail.com" }, { name: "Brassel Vielma", title: t("referenses.title2"), phone: "+58 424-4460398", mail: "brasselvielma85@gmail.com" }, { name: "Gabriela Montenegro", title: t("referenses.title3"), phone: "+58 424-4214803", mail: "gabriella1536@gmail.com" }];
  const interests = [{ name: t("interests.name"), icon: "headphone" }, { name: t("interests.name2"), icon: "spa" }, { name: t("interests.name3"), icon: "cable-car" }, { name: "TV", icon: "tv" }, { name: t("interests.name4"), icon: "dumbbell" }, { name: t("interests.name5"), icon: "party" }];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Danyelis Coronel Curriculum" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="l-main bd-container"> ${renderComponent($$result2, "Main", $$Main, { "name": name, "profession": t("home.profession"), "download": t("home.download"), "profile": t("profile"), "description": t("profile.description"), "education": t("education"), "educationData": education, "skillsTitle": t("skills"), "showEducation": showEducation, "skills": skills, "experience": t("experince"), "experiences": experiences, "referenses": t("referenses"), "referensesInfo": referenses, "interest": t("interests"), "herInterests": interests })} </main> ` })}`;
}, "D:/repositorios/Astro/CV/src/pages/index.astro", void 0);

const $$file = "D:/repositorios/Astro/CV/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
