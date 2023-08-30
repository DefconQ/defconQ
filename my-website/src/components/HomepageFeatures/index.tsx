import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'From a developer for developers',
    Svg: require('@site/static/img/undraw_developer.svg').default,
    description: (
      <>
       Years of hands on development experience in some of the largest investment banks and hours of self-study combined with a passion for teaching
      </>
    ),
  },
  {
    title: 'Architecture - From Zero to Hero',
    Svg: require('@site/static/img/undraw_software_engineer.svg').default,
    description: (
      <>
       Whether you have designed a tick system before or are just starting out, we try to explain different levels of architectural design as comprehensive as possible. Starting from the plain vanilla tick setup building up to more complex systems 
      </>
    ),
  },
  {
    title: 'Complex problems, simple explained',
    Svg: require('@site/static/img/undraw_code_thinking.svg').default,
    description: (
      <>
	We break complex KDB/Q concepts down into small, easy understandable lessons that allow you to master the step learning curve of KDB/Q
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
