"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, Smile, Star, Users, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Pagrindinis",
          id: "hero",
        },
        {
          name: "Apie Mus",
          id: "about",
        },
        {
          name: "Meniu",
          id: "menu",
        },
        {
          name: "Kontaktai",
          id: "contact",
        },
      ]}
      brandName="Gourmet Restoranas"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "gradient-bars",
      }}
      title="Gourmet Skoniai Jūsų Mieste"
      description="Atraskite unikalų meniu, sukurtą meistrų, naudojant tik šviežiausius vietinius ingredientus."
      buttons={[
        {
          text: "Peržiūrėti Meniu",
          href: "#menu",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/luxury-dining-room-with-elegant-chandelier-lighting-generated-by-ai_188544-21199.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/pretty-indian-girl-black-saree-dress-posed-restaurant_627829-1955.jpg",
          alt: "Diner 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/wide-restaurant-hall-with-wooden-table-chairs-6-persons_140725-8910.jpg",
          alt: "Diner 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/restaurant-hall-with-turquoise-chairs-white-walls-french-windows-curtains_140725-8450.jpg",
          alt: "Diner 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/big-event-hall-interior-restaurant_114579-2078.jpg",
          alt: "Diner 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pregnant-woman-standing-with-daughter-by-window_1303-12895.jpg",
          alt: "Diner 5",
        },
      ]}
      avatarText="Daugiau nei 5000 patenkintų svečių"
      marqueeItems={[
        {
          type: "text",
          text: "Švieži ingredientai",
        },
        {
          type: "text",
          text: "Aukščiausia kokybė",
        },
        {
          type: "text",
          text: "Autentiškas skonis",
        },
        {
          type: "text",
          text: "Jaukus interjeras",
        },
        {
          type: "text",
          text: "Profesionalus aptarnavimas",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Mūsų Filosofija"
      metrics={[
        {
          icon: Award,
          label: "Šefų Patirtis",
          value: "15+ metų",
        },
        {
          icon: Award,
          label: "Apdovanojimai",
          value: "20+",
        },
        {
          icon: Utensils,
          label: "Patiekalų",
          value: "100+",
        },
      ]}
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Jautienos didkepsnis",
          price: "28€",
          variant: "Pagrindinis patiekalas",
          imageSrc: "http://img.b2bpic.net/free-photo/view-delicious-cakes-blue-tray-biscuits-dark-table_140725-86432.jpg",
        },
        {
          id: "p2",
          name: "Lašišos filė",
          price: "24€",
          variant: "Jūros gėrybės",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-fried-red-fish-pan-newspaper-with-onions-sauces_140725-13948.jpg",
        },
        {
          id: "p3",
          name: "Itališki makaronai",
          price: "18€",
          variant: "Vegetariškas",
          imageSrc: "http://img.b2bpic.net/free-photo/pasta-colored-farfalle-salad-with-tomatoes-mozzarella-basil_2829-14368.jpg",
        },
        {
          id: "p4",
          name: "Šokoladinis desertas",
          price: "9€",
          variant: "Desertai",
          imageSrc: "http://img.b2bpic.net/free-photo/dessert-with-strawberry-cafe_181624-26180.jpg",
        },
        {
          id: "p5",
          name: "Keptos krevetės",
          price: "15€",
          variant: "Užkandžiai",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-cakes-fruity-sweets-with-cookies-dark-background-tea-cookie-biscuit-pie-cake-sweet_140725-96208.jpg",
        },
        {
          id: "p6",
          name: "Trinta sriuba",
          price: "7€",
          variant: "Sriubos",
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-soup-chicken-broth-sprinkled-with-herbs_140725-2237.jpg",
        },
      ]}
      title="Mūsų Meniu"
      description="Kruopščiai atrinkti patiekalai jūsų malonumui."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Nenaudojame šaldytų produktų",
          "Jokio dirbtinio skonio stiprinimo",
        ],
      }}
      positiveCard={{
        items: [
          "Tik švieži vietiniai ingredientai",
          "Rankų darbo patiekalai",
          "Dėmesys kiekvienam svečiui",
        ],
      }}
      title="Kodėl Mes?"
      description="Mes tikime, kad restoranas - tai patirtis, ne tik maistas."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "5k+",
          title: "Apsilankymai",
          description: "Laimingų klientų šiais metais.",
          icon: Smile,
        },
        {
          id: "m2",
          value: "4.9/5",
          title: "Reitingas",
          description: "Vidutinis mūsų klientų įvertinimas.",
          icon: Star,
        },
        {
          id: "m3",
          value: "12",
          title: "Šefų komanda",
          description: "Profesionalai virtuvėje.",
          icon: Users,
        },
      ]}
      title="Mūsų Pasiekimai"
      description="Skaičiai, kuriais didžiuojamės."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Jonas",
          handle: "@jonas",
          testimonial: "Nuostabus maistas ir aptarnavimas!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-happy-friends-table_23-2149213365.jpg",
        },
        {
          id: "t2",
          name: "Eglė",
          handle: "@egle",
          testimonial: "Jaukiausia atmosfera mieste.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-people-table_23-2149213367.jpg",
        },
        {
          id: "t3",
          name: "Tomas",
          handle: "@tomas",
          testimonial: "Didkepsnis buvo tobulai paruoštas.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-bride-feeding-her-groom-with-croissant-cafe_176420-2274.jpg",
        },
        {
          id: "t4",
          name: "Laura",
          handle: "@laura",
          testimonial: "Labai patiko desertų meniu.",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-wife-looking-her-husband-holding-healthy-salad_23-2148076125.jpg",
        },
        {
          id: "t5",
          name: "Mantas",
          handle: "@mantas",
          testimonial: "Grįšime ne kartą!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-people-with-delicious-cocktails_23-2150124812.jpg",
        },
      ]}
      showRating={true}
      title="Ką sako svečiai"
      description="Jūsų pasitikėjimas - mūsų didžiausias įvertinimas."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-static",
      }}
      tag="Susisiekite"
      title="Rezervuokite staliuką"
      description="Susisiekite su mumis rezervacijoms ar renginiams."
      buttonText="Rezervuoti"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/man-hugging-with-cheerful-woman-restaurant_23-2148016777.jpg"
      logoText="Gourmet Restoranas"
      columns={[
        {
          title: "Navigacija",
          items: [
            {
              label: "Meniu",
              href: "#menu",
            },
            {
              label: "Apie",
              href: "#about",
            },
          ],
        },
        {
          title: "Kontaktai",
          items: [
            {
              label: "info@gourmet.lt",
              href: "mailto:info@gourmet.lt",
            },
            {
              label: "Vilnius, Lietuva",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
