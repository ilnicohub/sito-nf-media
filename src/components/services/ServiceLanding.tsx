"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Blocks,
  BookOpenText,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clapperboard,
  Database,
  DatabaseZap,
  Gauge,
  GitBranch,
  LayoutTemplate,
  Megaphone,
  MessageSquareText,
  MessagesSquare,
  Palette,
  PenTool,
  Search,
  ShieldCheck,
  Target,
  UsersRound,
  Waypoints,
} from "lucide-react";
import { useState } from "react";
import styles from "./ServiceLanding.module.css";

type ServiceIcon =
  | "activity"
  | "analytics"
  | "blocks"
  | "brand"
  | "calendar"
  | "clapperboard"
  | "database"
  | "databaseZap"
  | "gauge"
  | "gitBranch"
  | "layout"
  | "megaphone"
  | "messages"
  | "messageText"
  | "palette"
  | "pen"
  | "search"
  | "shield"
  | "target"
  | "users"
  | "waypoints";

type ServiceLandingProps = {
  eyebrow: string;
  title: string;
  intro: string;
  benefits: Array<{ title: string; description: string; icon: ServiceIcon }>;
  process: Array<{ title: string; description: string }>;
  idealFor: string[];
  faq: Array<{ question: string; answer: string }>;
};

const icons = {
  activity: Activity,
  analytics: BarChart3,
  blocks: Blocks,
  brand: BookOpenText,
  calendar: CalendarDays,
  clapperboard: Clapperboard,
  database: Database,
  databaseZap: DatabaseZap,
  gauge: Gauge,
  gitBranch: GitBranch,
  layout: LayoutTemplate,
  megaphone: Megaphone,
  messages: MessagesSquare,
  messageText: MessageSquareText,
  palette: Palette,
  pen: PenTool,
  search: Search,
  shield: ShieldCheck,
  target: Target,
  users: UsersRound,
  waypoints: Waypoints,
};

export default function ServiceLanding({
  eyebrow,
  title,
  intro,
  benefits,
  process,
  idealFor,
  faq,
}: ServiceLandingProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: "easeOut" as const },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className={styles.eyebrow}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {eyebrow}
            </motion.p>
            <h1>{title}</h1>
            <p className={styles.intro}>{intro}</p>
            <motion.div
              className={styles.actions}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              <Link href="/contatti" className="primaryBtn">
                Parla con un consulente
              </Link>
              <Link href="/case-studies" className="secondaryBtn">
                Consulta i case study
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeading} {...fadeUp}>
            <p className={styles.eyebrow}>Cosa ottieni</p>
            <h2>Una soluzione costruita per produrre risultati concreti</h2>
          </motion.div>
          <div className={styles.cardGrid}>
            {benefits.map((benefit, index) => {
              const Icon = icons[benefit.icon];

              return (
              <motion.article
                className={styles.card}
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className={styles.cardIcon}>
                  <Icon size={32} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.sectionMuted}>
        <div className={styles.container}>
          <div className={styles.twoColumns}>
            <motion.div {...fadeUp}>
              <p className={styles.eyebrow}>Metodo</p>
              <h2>Dal primo confronto alla crescita</h2>
              <div className={styles.processList}>
                {process.map((step, index) => (
                  <motion.div
                    className={styles.processItem}
                    key={step.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.aside className={styles.idealBox} {...fadeUp}>
              <p className={styles.eyebrow}>Per chi è pensato</p>
              <h2>È la scelta giusta se vuoi:</h2>
              <ul>
                {idealFor.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={17} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div className={styles.sectionHeading} {...fadeUp}>
            <p className={styles.eyebrow}>Aspetti operativi</p>
            <h2>Domande strategiche prima di avviare il progetto</h2>
          </motion.div>
          <div className={styles.faqList}>
            {faq.map((item, index) => (
              <motion.div
                className={`${styles.faqItem} ${openFaq === index ? styles.faqItemOpen : ""}`}
                key={item.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <button
                  type="button"
                  className={styles.faqTrigger}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className={styles.faqNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={styles.faqChevron}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      className={styles.faqPanel}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <motion.div className={styles.ctaContent} {...fadeUp}>
            <div>
              <p className={styles.eyebrow}>Confronto iniziale</p>
              <h2>Valutiamo insieme il progetto</h2>
              <p>
                Condividi obiettivi, vincoli e priorità. Ti restituiamo una prima
                valutazione tecnica e strategica.
              </p>
            </div>
            <Link href="/contatti" className="primaryBtn">
              Richiedi un confronto
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
