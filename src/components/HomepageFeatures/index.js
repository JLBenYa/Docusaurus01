import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de usar',
    Svg: require('@site/static/img/color.svg').default,
    description: (
      <>
        Docusaurus fue diseñado desde cero para ser fácilmente instalado y utilizado para poner en marcha tu sitio web rápidamente.
      </>
    ),
  },
  {
    title: 'Nueva experiencia',
    Svg: require('@site/static/img/color.svg').default,
    description: (
      <>
        Docusaurus te permite centrarte en tu documentación, y nosotros nos encargaremos de las tareas. Adelante y mueve tu documentación al directorio <code>docs</code>.
      </>
    ),
  },
  {
    title: 'Hecho en React',
    Svg: require('@site/static/img/color.svg').default,
    description: (
      <>
        Amplía o personaliza el diseño de tu sitio web reutilizando React. Docusaurus puede ser extendido reutilizando el mismo encabezado y pie de página.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
