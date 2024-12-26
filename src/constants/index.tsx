import { CustomBr } from "@/components/atoms/custom-br";
import { FacebookIcon } from "@/components/svgs/facebook";
import { InstagramIcon } from "@/components/svgs/instagram";

export default {
  data: {
    navigation: {
      text: "Seiten",
      menu: "navigation",
      items: [
        { title: "Home", href: "/" },
        { title: "Blog", href: "/blog" },
        { title: "Über uns", href: "/portfolio" },
        { title: "Kontakt", href: "/kontakt" },
      ],
    },
    contact: [
      {
        text: "Phone",
        content: "+41 79 934 67 83",
        link: "tel:+41799346783",
      },
      {
        text: "E-Mail",
        content: "info@bueroimflow.ch",
        link: "mailto:info@bueroimflow.ch",
      },
    ],
    social_share: {
      text: "Folge uns",
      icons: [
        {
          title: "Instagram",
          link: "https://www.instagram.com/",
          icon: InstagramIcon,
        },
        {
          title: "Facebook",
          link: "https://www.facebook.com/",
          icon: FacebookIcon,
        },
        // {
        //   title: "Twitter",
        //   link: "https://x.com/home",
        //   icon: TwitterIcon,
        // },
      ],
    },
    footer: {
      text: "Kontakt Informationen",
      copy: "Copyright © 2024 Büro im Flow",
      agency: (
        <>
          Mit 💚 entwickelt von{" "}
          <span>
            <a href="https://www.fiberweb.ch/" target="_blank" rel="noreferrer">
              FiberWeb.ch
            </a>
          </span>
        </>
      ),
    },
  },
  home: {
    title: "Blog Büro im Flow",
    description: (
      <>
        Einfacher Zugang zu präzisen Ergebnissen und persönlicher
        <CustomBr byViewport="desktop" /> Betreuung – digital, effizient und verlässlich.
      </>
    ),
  },
  copy: {
    copy: "Link kopieren",
    copied: "Link kopiert",
  },
  time: "Leseminuten",
  latest: {
    title: "Neueste Artikel",
  },
  cta: {
    title: "Mehr dazu",
    text: "Noch Fragen? Kontaktieren Sie uns noch heute.",
    href: "#",
  },
};
