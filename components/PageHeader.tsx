export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="container-ordia pb-12 pt-20 lg:pt-28">
      <div className="reveal max-w-3xl">
        <p className="label-mono">{eyebrow}</p>
        <h1 className="mt-5 font-grotesk text-phi4 leading-[1.05] tracking-tightest text-umbra sm:text-phi5">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 text-phi2 text-taupe">{intro}</p>
        ) : null}
      </div>
    </header>
  );
}
