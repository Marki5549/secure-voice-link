import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer, ArrowRight } from "./index";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Тарифи — Silent Solutions" },
      {
        name: "description",
        content:
          "Три моделі розгортання Silent Solutions: керована платформа на наших серверах, гібрид із вашою сигналізацією, повний on-premise у вашому контурі.",
      },
      { property: "og:title", content: "Тарифи — Silent Solutions" },
      {
        property: "og:description",
        content:
          "Managed, гібрид або повний on-premise. Оберіть рівень суверенітету над інфраструктурою захищеного зв'язку.",
      },
    ],
  }),
  component: PricingPage,
});

type Tier = {
  code: string;
  name: string;
  tagline: string;
  who: string;
  price: string;
  priceNote: string;
  cta: string;
  highlighted?: boolean;
  features: { label: string; value: string }[];
  bullets: string[];
};

const TIERS: Tier[] = [
  {
    code: "01 · MANAGED",
    name: "Hosted",
    tagline: "Розгортання на нашій інфраструктурі",
    who: "Для команд, яким потрібен захищений канал «під ключ» без власного DevOps.",
    price: "від €18",
    priceNote: "за користувача / місяць · від 10 ліцензій",
    cta: "Запросити демо",
    features: [
      { label: "Сигнальний сервер", value: "Наші ЦОД (ЄС)" },
      { label: "TURN / медіа-релей", value: "Наші ЦОД (ЄС)" },
      { label: "Зберігання ключів", value: "Тільки на пристроях" },
      { label: "Юрисдикція даних", value: "ЄС · GDPR" },
      { label: "SLA", value: "99.9% · 8×5 підтримка" },
      { label: "Розгортання", value: "До 5 робочих днів" },
    ],
    bullets: [
      "ZRTP E2EE — ключі не залишають пристроїв навіть у hosted-режимі",
      "Адмін-консоль для видачі/відкликання номерів",
      "Push-нотифікації через наш APNs/FCM-проксі",
      "Регулярні оновлення клієнтів та сервера",
    ],
  },
  {
    code: "02 · HYBRID",
    name: "Hybrid",
    tagline: "Сигналізація у вас, медіа — у нас",
    who: "Для організацій із внутрішніми вимогами до контролю користувачів і метаданих, але без ресурсу на повну інфраструктуру.",
    price: "від €34",
    priceNote: "за користувача / місяць · ліцензія + supporт",
    cta: "Обговорити архітектуру",
    highlighted: true,
    features: [
      { label: "Сигнальний сервер", value: "Ваш периметр" },
      { label: "TURN / медіа-релей", value: "Наші ЦОД або ваш" },
      { label: "Зберігання ключів", value: "Тільки на пристроях" },
      { label: "Юрисдикція даних", value: "Ваша · обрана вами" },
      { label: "SLA", value: "99.95% · 12×5, опційно 24×7" },
      { label: "Розгортання", value: "2–4 тижні" },
    ],
    bullets: [
      "Каталог користувачів, SSO та аудит — у вашій інфраструктурі",
      "Медіа-трафік може йти повз нас (peer-to-peer або ваш TURN)",
      "Наша команда супроводжує оновлення та інциденти",
      "Інтеграція з вашим SIEM і журналами доступу",
    ],
  },
  {
    code: "03 · ON-PREMISE",
    name: "Sovereign",
    tagline: "Все на ваших серверах",
    who: "Для державних структур, оборонного сектору та фінансових інституцій із вимогою повної ізоляції.",
    price: "від €48 000",
    priceNote: "разова ліцензія + річний супровід",
    cta: "Запит специфікації",
    features: [
      { label: "Сигнальний сервер", value: "Ваш ЦОД / контур" },
      { label: "TURN / медіа-релей", value: "Ваш ЦОД / контур" },
      { label: "Зберігання ключів", value: "Тільки на пристроях" },
      { label: "Юрисдикція даних", value: "Повна автономія" },
      { label: "SLA", value: "За контрактом · 24×7 доступний" },
      { label: "Розгортання", value: "6–10 тижнів + аудит" },
    ],
    bullets: [
      "Підписані відтворювані збірки — повна верифіковність ланцюга",
      "Нульова мережна залежність від нас після інсталяції",
      "MDM-інтеграція, кастомний брендинг застосунків",
      "Доступ до вихідного коду серверних компонентів за окремим NDA",
    ],
  },
];

function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-ink">
      <Header />
      <PricingHero />
      <PricingTiers />
      <PricingMatrix />
      <PricingFAQ />
      <PricingCTA />
      <Footer />
    </main>
  );
}

/* ----------------------------- HERO ----------------------------- */
function PricingHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
        <p className="eyebrow flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-ink/40" />
          Тарифи · моделі розгортання
        </p>
        <h1 className="mt-8 max-w-3xl font-display text-[2.75rem] leading-[1.05] tracking-tight md:text-[4.25rem]">
          Оберіть рівень
          <br />
          <span className="italic text-primary">суверенітету.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-[17px] leading-[1.65] text-ink-muted md:text-[19px]">
          Шифрування у Silent Solutions завжди наскрізне — ключі ніколи не
          залишають пристроїв. Тариф визначає лише одне: де живуть сервери, що
          маршрутизують ваші дзвінки.
        </p>
      </div>
    </section>
  );
}

/* ---------------------------- TIERS ---------------------------- */
function PricingTiers() {
  return (
    <section>
      <div className="mx-auto max-w-[1240px] px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TIERS.map((t) => (
            <TierCard key={t.code} tier={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  const highlighted = tier.highlighted;
  return (
    <article
      className={`relative flex flex-col rounded-xl border p-8 md:p-10 ${
        highlighted
          ? "border-primary/60 bg-surface"
          : "border-border bg-surface/40"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground">
          Найчастіший вибір
        </span>
      )}

      <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-subtle">
        {tier.code}
      </p>
      <h2 className="mt-5 font-display text-[2.25rem] leading-[1.05] text-ink">
        {tier.name}
      </h2>
      <p className="mt-2 text-[15px] leading-[1.5] text-ink-muted">
        {tier.tagline}
      </p>

      <div className="mt-8 border-t border-border pt-6">
        <p className="font-display text-[2rem] leading-none text-ink">
          {tier.price}
        </p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-subtle">
          {tier.priceNote}
        </p>
      </div>

      <p className="mt-6 text-[14px] leading-[1.6] text-ink-muted">{tier.who}</p>

      <dl className="mt-8 space-y-3 border-t border-border pt-6">
        {tier.features.map((f) => (
          <div
            key={f.label}
            className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-2 last:border-b-0"
          >
            <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-subtle">
              {f.label}
            </dt>
            <dd className="text-right text-[13.5px] font-medium text-ink">
              {f.value}
            </dd>
          </div>
        ))}
      </dl>

      <ul className="mt-8 space-y-3 border-t border-border pt-6">
        {tier.bullets.map((b) => (
          <li
            key={b}
            className="flex gap-3 text-[14px] leading-[1.55] text-ink-muted"
          >
            <span
              aria-hidden
              className="mt-2 inline-block h-1 w-3 shrink-0 bg-primary"
            />
            {b}
          </li>
        ))}
      </ul>

      <a
        href="/#contact"
        className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[13.5px] font-medium transition-all ${
          highlighted
            ? "bg-primary text-primary-foreground hover:opacity-90"
            : "border border-border-strong text-ink hover:bg-surface-2"
        }`}
      >
        {tier.cta}
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </article>
  );
}

/* ------------------------- COMPARISON MATRIX ------------------------- */
function PricingMatrix() {
  const rows: { label: string; values: string[] }[] = [
    {
      label: "ZRTP E2EE",
      values: ["Так", "Так", "Так"],
    },
    {
      label: "Ключі залишають пристрій",
      values: ["Ні", "Ні", "Ні"],
    },
    {
      label: "Метадані маршрутизації",
      values: ["У нас (ЄС)", "У вас", "У вас"],
    },
    {
      label: "Медіа-трафік",
      values: ["Наш TURN", "Ваш або наш", "Ваш"],
    },
    {
      label: "Доступ із публічного інтернету",
      values: ["Так", "Опційно", "За потреби"],
    },
    {
      label: "Інтеграція з SSO / каталогом",
      values: ["SAML / OIDC", "SAML / OIDC / LDAP", "Будь-який"],
    },
    {
      label: "Підписані відтворювані збірки",
      values: ["—", "—", "Так"],
    },
    {
      label: "Доступ до вихідного коду серверу",
      values: ["—", "—", "За окремим NDA"],
    },
  ];

  return (
    <section className="bg-surface/60">
      <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <p className="eyebrow flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-ink/40" />
          Порівняння
        </p>
        <h2 className="mt-6 max-w-3xl font-display text-[2.25rem] leading-[1.07] tracking-tight md:text-[3.25rem]">
          Що саме відрізняється
          <br />
          <span className="italic text-ink-muted">між тарифами.</span>
        </h2>

        <div className="mt-14 overflow-x-auto rounded-lg border border-border bg-background">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="w-1/3 px-6 py-5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-subtle">
                  Характеристика
                </th>
                {TIERS.map((t) => (
                  <th
                    key={t.code}
                    className="px-6 py-5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-subtle"
                  >
                    {t.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.label}
                  className={i !== rows.length - 1 ? "border-b border-border" : ""}
                >
                  <td className="px-6 py-4 text-[14px] text-ink-muted">
                    {r.label}
                  </td>
                  {r.values.map((v, idx) => (
                    <td
                      key={idx}
                      className="px-6 py-4 text-[14px] font-medium text-ink"
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FAQ ------------------------------ */
function PricingFAQ() {
  const items = [
    {
      q: "Чи можна почати з Hosted, а потім перейти на On-premise?",
      a: "Так. Облікові записи, групи та політики переносяться без зміни клієнтських застосунків — користувачі залишаються на тих самих пристроях.",
    },
    {
      q: "Що входить у вартість On-premise?",
      a: "Безстрокова ліцензія на серверні компоненти, відтворювані збірки клієнтів, інсталяція силами нашої команди, аудит конфігурації та перший рік супроводу. Подальший супровід — окремою річною угодою.",
    },
    {
      q: "Чи бачимо ми зміст ваших дзвінків у Hosted-режимі?",
      a: "Ні. ZRTP-ключі генеруються між пристроями та ніколи не доходять до серверу. Ми бачимо лише факт встановлення з'єднання та метадані маршрутизації.",
    },
    {
      q: "Чи можна оплачувати в гривні / за рахунком?",
      a: "Так. Працюємо за прямими договорами з українськими та іноземними юридичними особами. Можлива оплата в EUR, USD або UAH.",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <p className="eyebrow flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-ink/40" />
          Часті питання
        </p>
        <h2 className="mt-6 max-w-3xl font-display text-[2.25rem] leading-[1.07] tracking-tight md:text-[3.25rem]">
          Що зазвичай питають
          <br />
          <span className="italic text-ink-muted">до підписання.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          {items.map((it, i) => (
            <div key={it.q} className="border-t border-border pt-6">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[1.4rem] leading-tight text-ink">
                  {it.q}
                </h3>
              </div>
              <p className="mt-3 pl-10 text-[15px] leading-[1.65] text-ink-muted">
                {it.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CTA ------------------------------ */
function PricingCTA() {
  return (
    <section className="bg-surface-2">
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-24">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow flex items-center gap-3 text-ink-muted">
              <span className="inline-block h-px w-8 bg-ink/40" />
              Не впевнені, який тариф ваш?
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-[2rem] leading-[1.08] tracking-tight md:text-[2.75rem]">
              Розкажіть про контур —
              <br />
              <span className="italic text-primary">
                ми підкажемо мінімальну достатню модель.
              </span>
            </h2>
          </div>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 self-end rounded-full bg-primary px-6 py-3.5 text-[14px] font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            Запросити демо
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
