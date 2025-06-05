import IlustrationHero from '../assets/illustration-hero.svg';

export function CardHeader() {
  return (
    <div>
      <img
        src={IlustrationHero}
        alt=""
        className="mx-auto w-full max-w-[410px]"
      />
    </div>
  );
}
