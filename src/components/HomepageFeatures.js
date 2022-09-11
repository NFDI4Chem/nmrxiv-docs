import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';
import Layout from '@theme/Layout';

const FeatureList = [{
        title: 'Demo Version',
        Svg: require('../../static/img/demo_version.svg').default,
        button: 'Demo Version',
        link: 'https://dev.nmrxiv.org',
        description: ( <
            >
            Try our demo version to test or preview the features.<
            />
        ),
    },
    {
        title: 'Submission Guides',
        Svg: require('../../static/img/submission_guides.svg').default,
        button: 'Submission Guides',
        link: '/docs/category/submission-guides',
        description: ( <
            > Want to submit data? Read the submission guide. < / >
        ),
    },
    {
        title: 'Contribution Guides',
        Svg: require('../../static/img/developers_guide.svg').default,
        button: 'Contribution Guides',
        link: '/docs/category/developer-guides',
        description: ( <
            >
            Want to contribute? Read the contribution guide. <
            />
        ),
    },
];

function Feature({ Svg, title, description, button, link }) {
    return ( <
        div className = { clsx('col col--4') } >
        <
        div className = "text--center" >
        <
        Svg className = { styles.featureSvg }
        alt = { title }
        /> < /
        div > <
        div className = "text--center padding-horiz--md" >
        <
        h3 > { title } < /h3> <
        p > { description } < /p> 
        <Link className={clsx('button button--primary button--lg')}
        to={ link }
  >
  { button }
  </Link>
        < /div > </div>

    );
}

export default function HomepageFeatures() {
    return ( 
        <div
        description="Description will go into a meta tag in <head />">
          {FeatureList && FeatureList.length > 0 && (
            <section className={styles.features}>
            <div className="container">
            <div className = "row"> 
                {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
                ))}
            </div></div>
            </section>
          )}
  
        {/* <div className="row" style={{marginLeft: "250px", height:"10%"}}>
          <Link to='https://cheminf.uni-jena.de/' className={clsx('col col--3 margin-top--sm margin-bottom--sm')}>
          <img class="h-6" src="https://www.uni-jena.de/unijenamedia/universitaet/abteilung-hochschulkommunikation/marketing/wort-bildmarke-universitaet-jena.jpg?height=100&width=200" alt="FSU Jena"/>
          </Link>
  
          <Link to='https://www.nfdi4chem.de/' className={clsx('col col--3 margin-top--sm margin-bottom--sm')}>
          <img class="h-6" src="https://www.nfdi4chem.de/wp-content/uploads/2021/11/cropped-NFDI4Chem-Logo-Claim_mehrfarbig_schwarz-e1636478409489.png" alt="NFDI4Chem"/>
          </Link>
  
          <Link to='https://www.nmrium.org/' className={clsx('col col--3 margin-top--sm margin-bottom--sm')}>
          <img class="h-6" src="https://www.nmrium.org/brand/nmrium-logo.svg" alt="NMRium"/>
          </Link>
        </div> */}

      </div>

    );
}