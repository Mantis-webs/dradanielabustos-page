import logoIconoWine from '../../assets/img/logo-icono-wine.png'
import Kicker from '../ui/Kicker'

export default function ValidacionEmocional() {
  return (
    <section className="relative overflow-hidden bg-blush px-[clamp(20px,5vw,72px)] py-[clamp(64px,9vw,112px)]">
      <img
        src={logoIconoWine}
        alt=""
        className="pointer-events-none absolute bottom-[-70px] left-[-60px] w-[min(38vw,380px)] opacity-[0.08]"
      />
      <div className="relative mx-auto max-w-[840px] text-center">
        <Kicker className="mb-5">
          Si llegaste hasta acá, probablemente te suene
        </Kicker>
        <h2 className="m-0 font-display text-[clamp(28px,3.6vw,48px)] leading-[1.14] font-normal text-pretty text-wine">
          No es que esté todo en tu cabeza.
        </h2>
        <p className="mx-auto mt-[26px] mb-0 max-w-[56ch] text-[clamp(15px,1.2vw,17px)] leading-[1.76] font-light text-pretty text-tinta-suave">
          Te dijeron que tus exámenes están bien. Que es estrés. Que aprendas a
          vivir con eso. Y sin embargo el cansancio sigue ahí, la digestión sigue
          reaccionando y tú sigues buscando una explicación que nadie te dio.
        </p>
        <p className="mx-auto mt-5 mb-0 max-w-[52ch] font-display text-[clamp(17px,1.6vw,22px)] leading-[1.5] text-pretty text-rose-oscuro italic">
          Que un examen salga normal no significa que tu cuerpo esté funcionando
          bien.
        </p>
      </div>
    </section>
  )
}
