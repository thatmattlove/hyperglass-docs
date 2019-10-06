/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={siteConfig.repoUrl}>Try It Out</Button>
            <Button href='https://hyperglass.io/'>Demo</Button>
            <Button href={docUrl('installation.html')}>Docs</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: 'center' }}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <div>
        <Block align="center" layout="fourColumn">
          {[
            {
              content: "End to end IPv6 support.",
              image: `${baseUrl}img/undraw_outer_space.svg`,
              imageAlign: 'top',
              title: 'IPv6',
            },
            {
              content: "Thanks to [Netmiko](https://github.com/ktbyers/netmiko), all major network operating systems are supported.",
              image: `${baseUrl}img/undraw_to_do_list.svg`,
              imageAlign: 'top',
              title: 'Diverse Platform Support',
            },
            {
              content: "Change or customize nearly every user-facing element or feature.",
              image: `${baseUrl}img/undraw_create.svg`,
              imageAlign: 'top',
              title: 'Customizable',
            },
            {
              content: 'Built on a zero-trust model. Query data is fully validated before being sent to a device.',
              image: `${baseUrl}img/undraw_safe.svg`,
              imageAlign: 'top',
              title: 'Secure',
            },
          ]}
        </Block>
        <Block layout="fourColumn">
          {[
            {
              content: "Let your users see your network's routes by community.",
              image: `${baseUrl}img/undraw_moonlight.svg`,
              imageAlign: 'top',
              title: 'BGP Community',
            },
            {
              content: "Let users see your network's reachability to a specific prefix.",
              image: `${baseUrl}img/undraw_professor.svg`,
              imageAlign: 'top',
              title: 'BGP Route',
            },
            {
              content: "Let users see your network's reachability to an AS.",
              image: `${baseUrl}img/undraw_thought_process.svg`,
              imageAlign: 'top',
              title: 'BGP AS Path',
            },
            {
              content: 'Test connectivity to a destination from any location.',
              image: `${baseUrl}img/undraw_destinations.svg`,
              imageAlign: 'top',
              title: 'Ping & Traceroute',
            },
          ]}
        </Block>
      </div>
    );

    const About = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: 'center' }}>
        <h2>About hyperglass</h2>
        <MarkdownBlock>
          hyperglass is an open source looking glass application to provide customers, peers,
          and partners of network operators with unattended visibility into the operator's network.
        </MarkdownBlock>
        <MarkdownBlock>
          hyperglass was created with the lofty goal of benefiting the internet community at-large,
          by providing an easier and more familiar way for operators to provide looking glass services
          to their customers, peers, and partners.
        </MarkdownBlock>
      </div>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          {/* <FeatureCallout /> */}
          {/* <LearnHow /> */}
          {/* <TryOut /> */}
          {/* <Description /> */}
          {/* <Showcase /> */}
          <About />
        </div>
      </div>
    );
  }
}

module.exports = Index;
