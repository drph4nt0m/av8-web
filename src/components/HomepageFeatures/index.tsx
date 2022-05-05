import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  // description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '6000+ Discord servers',
    Svg: require('@site/static/img/discord-server-icon.svg').default,
    // description: (
    //   <>
    //
    //   </>
    // ),
  },
  {
    title: '100000+ Users',
    Svg: require('@site/static/img/users-icon.svg').default,
  },
  {
    title: '279179+ Commands used',
    Svg: require('@site/static/img/commands-icon.svg').default,
  },
];

function Feature({title, Svg}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img"/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        {/*<p>{description}</p>*/}
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
