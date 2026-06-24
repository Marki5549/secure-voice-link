import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LogoMark, LogoLockup } from "@/components/LogoMark";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Silent Solutions — Захищений корпоративний голосовий зв'язок" },
      {
        name: "description",
        content:
          "ZRTP end-to-end шифрування дзвінків для юристів, фінансистів і державних структур. Власна інфраструктура, on-premise, без третіх сторін.",
      },
    ],
  }),
  component: Landing,
});

const NAV = [
  { id: "problem", label: "Проблема" },
  { id: "solution", label: "Рішення" },
  { id: "features", label: "Можливості" },
  { id: "audience", label: "Для кого" },
  { id: "trust", label: "Безпека" },
  { id: "contact", label: "Контакти" },
];

function Landing() {
  return (
    <main className="min-h-screen bg-background text-ink">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Audience />
      <Trust />
      <Contact />
      <Footer />
    </main>
  );
}

/* ------------------------------ HEADER ------------------------------ */
function Header() {
  const [lang, setLang] = useState<"UA" | "EN">("UA");
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center">
          <LogoLockup />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="hairline-link text-[13.5px] font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded-full border border-border px-1 py-1 text-[11px] font-medium md:flex">
            {(["UA", "EN"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  lang === l
                    ? "bg-ink text-background"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[13px] font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            Запросити демо
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------- HERO -------------------------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <p className="eyebrow mb-8 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-ink/40" />
              Secure Corporate Voice Platform · v3
            </p>
            <h1 className="font-display text-[2.75rem] leading-[1.05] tracking-tight text-ink md:text-[4.5rem] lg:text-[5.25rem]">
              Розмови, які
              <br />
              <span className="italic text-primary">не залишають </span>
              кімнату.
            </h1>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.65] text-ink-muted md:text-[19px]">
              Silent Solutions — корпоративна голосова платформа з наскрізним
              ZRTP-шифруванням для команд, де ціна одного перехопленого дзвінка
              вимірюється контрактами, репутацією або справами.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium text-background transition-all hover:bg-ink/90"
              >
                Запросити демо
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#solution"
                className="hairline-link inline-flex items-center gap-2 px-2 py-3.5 text-[14px] font-medium text-ink"
              >
                Як це працює
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="flex h-full flex-col justify-end gap-6 lg:items-end">
              <HeroSpec label="Шифрування" value="ZRTP / SRTP" />
              <HeroSpec label="Платформи" value="iOS · Android · Desktop" />
              <HeroSpec label="Розгортання" value="Cloud · On-premise" />
              <HeroSpec label="Аудит ключа" value="SAS — голосова верифікація" />
            </div>
          </div>
        </div>
      </div>
      <div className="section-rule" />
    </section>
  );
}

function HeroSpec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full justify-between gap-6 border-b border-border pb-3 lg:max-w-[280px]">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
        {label}
      </span>
      <span className="text-right text-[13.5px] font-medium text-ink">{value}</span>
    </div>
  );
}

/* ------------------------------ PROBLEM ------------------------------ */
function Problem() {
  const items = [
    {
      n: "01",
      title: "Оператори зв'язку",
      body:
        "GSM, VoLTE та сигнальні протоколи (SS7) дозволяють перехоплення на рівні оператора — як власного, так і будь-якого, через якого маршрутизується дзвінок.",
    },
    {
      n: "02",
      title: "Teams, Zoom, Meet",
      body:
        "Шифрування лише до сервера провайдера. Ключі зберігаються у третьої сторони, доступ можливий за судовим запитом, через підрядника або через злам інфраструктури.",
    },
    {
      n: "03",
      title: "Корпоративне шпигунство",
      body:
        "Запис у конференц-кімнаті, скомпрометований ноутбук CFO, інсайдер у IT відділі контрагента. Стандартний стек не лишає вам контролю над тим, де живе ключ.",
    },
    {
      n: "04",
      title: "Месенджери з \"шифруванням\"",
      body:
        "Маркетинг E2E часто стосується лише чату. Голосові виклики йдуть через інфраструктуру вендора без можливості верифікації ключа з боку користувача.",
    },
  ];
  return (
    <section id="problem" className="bg-surface/60">
      <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <SectionHead
          eyebrow="01 — Проблема"
          title={
            <>
              Стандартний дзвінок —
              <br />
              <span className="italic text-ink-muted">це чужа територія.</span>
            </>
          }
          lead="Будь-яка ланка від мікрофона до співрозмовника, яку ви не контролюєте — це потенційне місце витоку. У 2026-му таких ланок занадто багато."
        />
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {items.map((it) => (
            <div key={it.n} className="bg-background p-8 md:p-10">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[12px] text-ink-subtle">{it.n}</span>
                <h3 className="font-display text-[1.65rem] leading-tight text-ink">
                  {it.title}
                </h3>
              </div>
              <p className="mt-4 pl-10 text-[15px] leading-[1.65] text-ink-muted">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ SOLUTION ------------------------------ */
function Solution() {
  return (
    <section id="solution" className="relative">
      <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <SectionHead
          eyebrow="02 — Як це працює"
          title={
            <>
              ZRTP. Ключ народжується
              <br />
              <span className="italic text-primary">між двома телефонами.</span>
            </>
          }
          lead="Сесійний ключ генерується протоколом Diffie–Hellman безпосередньо між клієнтами. Сервер передає лише зашифрований трафік — і не має технічної можливості його розшифрувати."
        />

        <div className="mt-16 grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <ZrtpDiagram />
          </div>
          <div className="col-span-12 space-y-7 lg:col-span-5">
            <Step
              n="A"
              title="Установлення з'єднання"
              body="Клієнти знаходять одне одного через ваш SIP-сервер. Сервер бачить лише метадані маршрутизації."
            />
            <Step
              n="B"
              title="Обмін ключами"
              body="ZRTP виконує DH-обмін поверх медіа-каналу. Жодна третя сторона — включно з вашим власним сервером — у цьому обміні не бере участі."
            />
            <Step
              n="C"
              title="SAS-верифікація"
              body="Чотири слова на екрані обох співрозмовників. Якщо збігаються — ключ ваш. Якщо ні — MITM, і ви бачите це до того, як скажете перше слово."
            />
            <Step
              n="D"
              title="Знищення ключа"
              body="Ключ існує лише в оперативній пам'яті пристроїв і знищується після завершення дзвінка. Перехоплений трафік не може бути розшифрований навіть постфактум."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ZrtpDiagram() {
  return (
    <div className="relative rounded-lg border border-border bg-surface/40 p-8 md:p-12">
      <div className="absolute left-6 top-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
          Fig. 01 — потік даних
        </span>
      </div>

      <div className="mt-12 grid grid-cols-3 items-center gap-4">
        <Node label="Аліса" sub="iPhone · iOS" />
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-full">
            <div className="h-px w-full bg-ink/30" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface/40 px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
              ciphertext
            </span>
          </div>
          <ServerNode />
          <div className="relative w-full">
            <div className="h-px w-full bg-ink/30" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface/40 px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
              ciphertext
            </span>
          </div>
        </div>
        <Node label="Богдан" sub="Android · Pixel" align="right" />
      </div>

      <div className="mt-10 rounded-md border border-dashed border-primary/50 bg-primary-soft p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
          ZRTP key exchange · peer-to-peer
        </p>
        <p className="mt-2 text-[14px] leading-[1.6] text-ink">
          Сесійний ключ ніколи не залишає пристрої. Сервер не може ні
          прослухати, ні відтворити дзвінок — навіть під примусом.
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-md bg-ink/[0.04] px-4 py-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
          SAS
        </span>
        <div className="flex gap-2 font-mono text-[13px] font-medium text-ink">
          <span>moon</span>
          <span className="text-ink-subtle">·</span>
          <span>iron</span>
          <span className="text-ink-subtle">·</span>
          <span>vault</span>
          <span className="text-ink-subtle">·</span>
          <span>echo</span>
        </div>
      </div>
    </div>
  );
}

function Node({
  label,
  sub,
  align = "left",
}: {
  label: string;
  sub: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`flex flex-col gap-2 ${align === "right" ? "items-end text-right" : "items-start"}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-md border border-border-strong bg-background">
        <PhoneIcon />
      </div>
      <p className="font-display text-[1.25rem] leading-none text-ink">{label}</p>
      <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-subtle">
        {sub}
      </p>
    </div>
  );
}

function ServerNode() {
  return (
    <div className="relative flex flex-col items-center gap-2">
      <div className="relative flex h-14 w-14 items-center justify-center rounded-md border border-dashed border-ink/40 bg-background">
        <ServerIcon />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[2px] w-[140%] -rotate-45 bg-destructive/70" />
        </div>
      </div>
      <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-subtle">
        Сервер · сліпий
      </p>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-border pb-6 last:border-b-0">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
        {n}
      </span>
      <div>
        <h4 className="font-display text-[1.25rem] leading-tight text-ink">{title}</h4>
        <p className="mt-1.5 text-[14.5px] leading-[1.6] text-ink-muted">{body}</p>
      </div>
    </div>
  );
}

/* ------------------------------ FEATURES ------------------------------ */
function Features() {
  const items = [
    {
      title: "Власна інфраструктура",
      body:
        "Сигнальний сервер, TURN, провіженінг та білінг — у вашому периметрі або в нашому ЦОД. Жодних SDK третіх сторін у медіа-потоці.",
      tag: "Infrastructure",
    },
    {
      title: "Мобільні клієнти",
      body:
        "Нативні застосунки для iOS та Android з push-сповіщеннями через ваш APNs/FCM-проксі. Жодних метаданих у Apple чи Google.",
      tag: "iOS · Android",
    },
    {
      title: "Корпоративні ліцензії",
      body:
        "Веб-консоль для адміністратора: видача номерів, групи, політики, відкликання пристроїв, аудит подій (без вмісту дзвінків).",
      tag: "Management",
    },
    {
      title: "SAS-верифікація",
      body:
        "Чотирислівний short authentication string на екрані обох сторін. Захист від активного MITM без потреби у попередньо розповсюджених сертифікатах.",
      tag: "Authentication",
    },
    {
      title: "Конференції",
      body:
        "Багатосторонні дзвінки з груповим ZRTP. До 16 учасників з повним E2E без mixing-сервера в очищеному вигляді.",
      tag: "Conference",
    },
    {
      title: "Federation",
      body:
        "Захищене з'єднання між незалежними інсталяціями Silent Solutions. Юристи дзвонять клієнту-банку без виходу в публічну мережу.",
      tag: "Inter-tenant",
    },
  ];
  return (
    <section id="features" className="bg-surface/60">
      <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <SectionHead
          eyebrow="03 — Можливості"
          title={
            <>
              Інженерія, а не
              <br />
              <span className="italic text-ink-muted">маркетинг безпеки.</span>
            </>
          }
        />
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-background/60"
            >
              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-subtle">
                {it.tag}
              </span>
              <h3 className="mt-6 font-display text-[1.5rem] leading-tight text-ink">
                {it.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-ink-muted">{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ AUDIENCE ------------------------------ */
function Audience() {
  const rows = [
    {
      sector: "Юридичні фірми",
      case: "Розмови з клієнтом по чутливих справах, M&A, due diligence — поза досяжністю опонента, регулятора чи інсайдера в IT-провайдера.",
      role: "Партнери · керівники практик",
    },
    {
      sector: "Фінансові компанії",
      case: "Переговори по угодах, узгодження цінових пропозицій, внутрішні обговорення інвестиційних рішень до публічного оголошення.",
      role: "CFO · трейдінг · M&A",
    },
    {
      sector: "Державні структури",
      case: "Координація відомств з контролем інфраструктури в національному периметрі. Можливість on-premise з повним відключенням від зовнішніх мереж.",
      role: "Захищені урядові комунікації",
    },
    {
      sector: "Топ-менеджмент",
      case: "Розмови ради директорів, кризові комунікації, переговори з регулятором. Один пристрій — один обліковий запис, повна верифікація.",
      role: "CEO · Board · Legal",
    },
  ];
  return (
    <section id="audience">
      <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <SectionHead
          eyebrow="04 — Для кого"
          title={
            <>
              Команди, де переговори
              <br />
              <span className="italic text-primary">не можуть стати чужими.</span>
            </>
          }
        />

        <div className="mt-16 overflow-hidden rounded-lg border border-border">
          <div className="hidden grid-cols-[1.1fr_2.4fr_1fr] gap-6 border-b border-border bg-surface/60 px-8 py-4 md:grid">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-subtle">
              Сектор
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-subtle">
              Кейс
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-subtle">
              Ролі
            </span>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.sector}
              className={`grid grid-cols-1 gap-3 px-8 py-7 md:grid-cols-[1.1fr_2.4fr_1fr] md:gap-6 ${
                i !== rows.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="font-display text-[1.4rem] leading-tight text-ink">
                {r.sector}
              </div>
              <p className="text-[15px] leading-[1.6] text-ink-muted">{r.case}</p>
              <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-subtle">
                {r.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- TRUST -------------------------------- */
function Trust() {
  const points = [
    {
      title: "Відкрита криптографічна архітектура",
      body:
        "Стандартні протоколи (ZRTP RFC 6189, SRTP RFC 3711). Жодного власного шифру. Кожен етап піддається аудиту незалежним експертом замовника.",
    },
    {
      title: "On-premise як перший клас",
      body:
        "Розгортання у вашому ЦОД або ізольованому контурі. Повна автономність від наших серверів. Підпис релізів і відтворювана збірка.",
    },
    {
      title: "Нуль третіх сторін у медіа-потоці",
      body:
        "Аудіо ніколи не проходить через сторонні CDN, аналітику чи хмарних провайдерів. Лише ваш SIP/TURN та два пристрої.",
    },
    {
      title: "Мінімум метаданих",
      body:
        "Сервер не зберігає історію дзвінків довше за технічно необхідне для маршрутизації. Логи аудиту відокремлені від сигнальних подій.",
    },
  ];
  return (
    <section id="trust" className="relative bg-surface-2 text-ink">
      <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <p className="eyebrow flex items-center gap-3 text-ink-muted">
          <span className="inline-block h-px w-8 bg-ink/40" />
          05 — Для тих, хто читає RFC
        </p>
        <h2 className="mt-6 max-w-3xl font-display text-[2.5rem] leading-[1.08] tracking-tight md:text-[3.75rem]">
          Довіра — не в маркетингу.
          <br />
          <span className="italic text-ink-muted">Вона в архітектурі.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="border-t border-border-strong pt-6"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[1.65rem] leading-tight">{p.title}</h3>
              </div>
              <p className="mt-3 pl-10 text-[15px] leading-[1.65] text-ink-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border-strong bg-border-strong md:grid-cols-4">
          {[
            ["Протокол", "ZRTP / SRTP"],
            ["Стандарти", "RFC 6189 · 3711"],
            ["Розгортання", "Cloud · On-prem"],
            ["Юрисдикція", "За вибором замовника"],
          ].map(([k, v]) => (
            <div key={k} className="bg-background p-6">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-subtle">
                {k}
              </p>
              <p className="mt-3 font-display text-[1.25rem] leading-tight text-ink">
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CONTACT ------------------------------ */
function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-ink/40" />
              06 — Контакти
            </p>
            <h2 className="mt-6 font-display text-[2.5rem] leading-[1.05] tracking-tight md:text-[3.5rem]">
              Поговорімо
              <br />
              <span className="italic text-primary">по захищеному каналу.</span>
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-[1.65] text-ink-muted">
              Залиште контакт — інженер відповість упродовж двох робочих днів,
              узгодить демонстрацію та надасть технічну специфікацію під ваш
              контур.
            </p>
            <div className="mt-10 space-y-4 border-t border-border pt-6">
              <ContactRow label="Email" value="contact@silent.solutions" />
              <ContactRow label="Безпечно" value="PGP — доступний за запитом" />
              <ContactRow label="Графік" value="Пн — Пт · 09:00 — 19:00 EET" />
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="col-span-12 rounded-lg border border-border bg-surface/40 p-8 md:p-10 lg:col-span-7"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Field label="Ім'я" placeholder="Олександр Коваль" />
              <Field label="Компанія" placeholder="Назва організації" />
              <Field label="Корпоративний email" type="email" placeholder="name@company.ua" />
              <Field label="Кількість користувачів" placeholder="напр. 25" />
            </div>
            <div className="mt-6">
              <label className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-subtle">
                Коротко про задачу
              </label>
              <textarea
                rows={4}
                placeholder="Тип організації, контекст використання, бажане розгортання."
                className="mt-2 w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-[15px] leading-[1.55] text-ink outline-none transition-colors placeholder:text-ink-subtle focus:border-primary"
              />
            </div>
            <div className="mt-8 flex items-center justify-between gap-6">
              <p className="text-[12px] leading-[1.55] text-ink-subtle">
                Ваші дані використовуються лише для зв'язку з приводу демо.
                Жодних маркетингових розсилок.
              </p>
              <button
                type="submit"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-[13.5px] font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                Запросити демо
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-subtle">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-subtle focus:border-primary"
      />
    </label>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-border pb-3 last:border-b-0">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
        {label}
      </span>
      <span className="text-right text-[14.5px] font-medium text-ink">{value}</span>
    </div>
  );
}

/* -------------------------------- FOOTER -------------------------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-[1240px] px-6 py-12 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <LogoLockup />
            <p className="mt-4 max-w-xs text-[13.5px] leading-[1.6] text-ink-muted">
              Корпоративна голосова платформа з наскрізним ZRTP-шифруванням.
              Київ · 2026.
            </p>
          </div>
          <FooterCol
            title="Продукт"
            items={[
              ["Проблема", "#problem"],
              ["Рішення", "#solution"],
              ["Можливості", "#features"],
            ]}
          />
          <FooterCol
            title="Компанія"
            items={[
              ["Для кого", "#audience"],
              ["Безпека", "#trust"],
              ["Контакти", "#contact"],
            ]}
          />
          <FooterCol
            title="Юридичне"
            items={[
              ["Політика приватності", "#"],
              ["Умови використання", "#"],
              ["Захист даних", "#"],
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
            © 2026 Silent Solutions · усі права захищено
          </p>
          <div className="flex items-center gap-1 rounded-full border border-border px-1 py-1 text-[11px] font-medium">
            <button className="rounded-full bg-ink px-2.5 py-1 text-background">UA</button>
            <button className="rounded-full px-2.5 py-1 text-ink-muted hover:text-ink">
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-subtle">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {items.map(([l, h]) => (
          <li key={l}>
            <a
              href={h}
              className="hairline-link text-[14px] text-ink transition-colors hover:text-primary"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------- Shared bits -------------------------- */
function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-x-8 gap-y-6">
      <div className="col-span-12 lg:col-span-7">
        <p className="eyebrow flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-ink/40" />
          {eyebrow}
        </p>
        <h2 className="mt-6 font-display text-[2.25rem] leading-[1.07] tracking-tight md:text-[3.5rem]">
          {title}
        </h2>
      </div>
      {lead && (
        <div className="col-span-12 lg:col-span-5 lg:pt-16">
          <p className="text-[16px] leading-[1.65] text-ink-muted md:text-[17px]">
            {lead}
          </p>
        </div>
      )}
    </div>
  );
}

/* -------------------------- Icons -------------------------- */
function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-ink" aria-hidden="true">
      <path
        d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-ink/60" aria-hidden="true">
      <rect x="3" y="4" width="18" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
      <rect x="3" y="13" width="18" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="7" cy="7.5" r="0.8" fill="currentColor" />
      <circle cx="7" cy="16.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

export { LogoMark };
