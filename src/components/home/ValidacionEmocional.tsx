import logoIconoWine from '../../assets/img/logo-icono-wine.png'

export default function ValidacionEmocional() {
  return (
    <section className="relative overflow-hidden bg-blush px-[clamp(20px,5vw,72px)] py-[clamp(64px,9vw,112px)]">
      <img
        src={logoIconoWine}
        alt=""
        className="pointer-events-none absolute bottom-[-70px] left-[-60px] w-[min(38vw,380px)] opacity-[0.08]"
      />
      <div className="relative mx-auto max-w-[840px] text-center">
        <h2 className="m-0 font-display text-[clamp(28px,3.6vw,48px)] leading-[1.14] font-normal text-pretty text-wine">
          Cuando un síntoma persiste, vale la pena mirar más allá
        </h2>
        <div className="mx-auto mt-[26px] grid max-w-[56ch] gap-[18px] text-[clamp(15px,1.2vw,17px)] leading-[1.76] font-light text-pretty text-tinta-suave">
          <p className="m-0">
            Tu organismo no funciona por partes: el sistema nervioso, el sistema
            inmune, el metabolismo, el intestino, las hormonas, el sueño y el
            entorno están constantemente comunicándose entre sí.
          </p>
          <p className="m-0">
            En medicina integrativa buscamos entender{' '}
            <strong className="font-semibold text-tinta">
              qué está pasando, qué factores pueden estar contribuyendo y qué
              podemos hacer para mejorar tu salud de manera sostenible.
            </strong>
          </p>
        </div>
        <p className="mx-auto mt-6 mb-0 max-w-[52ch] font-display text-[clamp(17px,1.6vw,22px)] leading-[1.5] text-pretty text-rose-oscuro italic">
          Que un examen salga normal no significa que tu cuerpo esté funcionando
          bien.
        </p>
      </div>
    </section>
  )
}
