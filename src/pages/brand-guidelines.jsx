import React from 'react';
import SEO from '../components/SEO';

import Container from '../components/Container';
import PageHeader from '../components/PageHeader';

import GuidelinesColorBlock from '../components/GuidelinesColorBlock';
import brandSymbols from '../images/doopoll_brand_symbols.svg';
import logoClearspace from '../images/guidelines/doopoll_logo_clearspace.svg';
import logoGuides from '../images/guidelines/doopoll_logo_guides.svg';
import logoMrBlueSky10 from '../images/guidelines/doopoll_logo_clearspace_mrbluesky10.svg';
import logoMrBlueSky from '../images/guidelines/doopoll_logo_clearspace_mrbluesky.svg';

export default () => (
  <div>
    <SEO pageMeta={{
        title:'Brand Guidelines | doopoll',
        path:'/brand-guidelines'
      }}
    />
    <PageHeader>
      <h1>Brand Guidelines</h1>
      <p className="lead">
        These guidelines are a work in progress as we develop the doopoll brand.
        They are for use as an internal reference, however you are free to take a look around, whoever you are!
      </p>
      <p className="lead">
        Most of the content refers to digital use. However the basic principles can be used in any context.
      </p>
    </PageHeader>
    <Container>
      <div>
        <h4>Colours</h4>
        <p>
          The doopoll colour palette is designed around two key colours.
          &apos;MrBlueSky&apos; is the primary colour, and &apos;HelloSunshine&apos; is used for accents and details.
          We rarely use either colour for full background blocks.
        </p>
        <div className="Guidelines__color-row">
          <GuidelinesColorBlock
            colorName="MrBlueSky"
            hexCode="#0098ff"
          />
          <GuidelinesColorBlock
            colorName="HelloSunshine"
            hexCode="#fcc949"
          />
        </div>
        <p>
          For backgrounds and block colours, use can use a tint of either key colour.
        </p>
        <div className="Guidelines__color-row">
          <GuidelinesColorBlock
            colorName="MrBlueSky-50"
            hexCode="#7fcbff"
          />
          <GuidelinesColorBlock
            colorName="MrBlueSky-25"
            hexCode="#cceaff"
          />
          <GuidelinesColorBlock
            colorName="MrBlueSky-10"
            hexCode="#e5f4ff"
          />
          <GuidelinesColorBlock
            colorName="MrBlueSky-5"
            hexCode="#f2faff"
          />
        </div>
        <div className="Guidelines__color-row">
          <GuidelinesColorBlock
            colorName="HelloSunshine-50"
            hexCode="#fde4a4"
          />
          <GuidelinesColorBlock
            colorName="HelloSunshine-25"
            hexCode="#fef4db"
          />
          <GuidelinesColorBlock
            colorName="HelloSunshine-10"
            hexCode="#fff9ec"
          />
          <GuidelinesColorBlock
            colorName="HelloSunshine-5"
            hexCode="#fffcf6"
          />
        </div>
        <p>
          For text, and contrast, we also use &apos;NightSky&apos; as a dark complimentary colour
          with a range of tints.
        </p>
        <div className="Guidelines__color-row">
          <GuidelinesColorBlock
            colorName="NightSky"
            hexCode="#003b5b"
          />
          <GuidelinesColorBlock
            colorName="NightSky-75"
            hexCode="#406c84"
          />
          <GuidelinesColorBlock
            colorName="NightSky-50"
            hexCode="#7f9dad"
          />
          <GuidelinesColorBlock
            colorName="NightSky-25"
            hexCode="#ccd8de"
          />
          <GuidelinesColorBlock
            colorName="NightSky-10"
            hexCode="#e5ebee"
          />
          <GuidelinesColorBlock
            colorName="NightSky-5"
            hexCode="#f2f5f7"
          />
        </div>
        <p>
          Within our applications we use green and red to sometimes indicate a positive
          or dangerous action. These colours are only to be used within our products for these actions.
        </p>
        <div className="Guidelines__color-row">
          <GuidelinesColorBlock
            colorName="PositiveGreen"
            hexCode="#00E399"
          />
          <GuidelinesColorBlock
            colorName="DangerRed"
            hexCode="#FF3B27"
          />
        </div>
      </div>
    </Container>
    <Container>
      <div>
        <h4>Logo</h4>
        <p>
          Our logo consists of two parts.
          The brandmark and the wordmark.
          By default the brandmark is &apos;HelloSunshine&apos; and the wordmark is &apos;MrBlueSky&apos;.
        </p>
        <img className="Image--responsive" src={logoClearspace} alt="doopoll logo" />
        <p>
          It&apos;s important that our logo has enough clearspace around it.
          The minimum clear space is shown below using the brandmark.
          This makes it really simple to calculate the correct clearspace at all sizes.
        </p>
        <img className="Image--responsive" src={logoGuides} alt="doopoll logo" />
        <p>
          Try to use a background that allows the logo enough contrast to be seen.
          The example below uses &apos;MrBlueSky-10&apos;.
        </p>
        <img className="Image--responsive" src={logoMrBlueSky10} alt="doopoll logo" />
        <p>
          Occasionally you may use &apos;MrBlueSky&apos; as a background.
          In that instance, you can use the white wordmark version of the logo.
        </p>
        <img className="Image--responsive" src={logoMrBlueSky} alt="doopoll logo" />
      </div>
    </Container>
    <Container>
      <div>
        <h4>Typography</h4>
        <p>
          Our primary typeface is Proxima Nova. We tend to only use the 700 and 400 weights.
          It is available from Typekit, and we also have font files available for company use.
          Ask someone on the team if you need them.
        </p>
        <p>
          Here are the main text styles used on this site as an example.
        </p>
        <h1>This is a large (h1) header</h1>
        <h2>This is an h2</h2>
        <h3>This is an h3</h3>
        <h4>This is an h4</h4>
        <h5>This is an h5</h5>
        <p>This is a paragraph</p>
      </div>
    </Container>
    <Container>
      <div>
        <h4>Symbols / Assets</h4>
        <p>
          We&apos;ve created a range of symbols and assets that can be used individually or assembled into new pieces.
          They work best when layered and combined using the colour palette above.
        </p>
        <img className="Image--responsive u-slow-spin" src={brandSymbols} alt="doopoll brand assets" />
        <p>
          Our circular shapes, pebbles, marbles, cells, planets, all represent the people within organisations.
          They are the human elements in the complex whole. Unique and beautiful.
          That&apos;s why we never use the same symbol twice in the same image.
        </p>
        <p>
          We have a brand pack of assets that you can download from Creative Cloud.
          Ask someone on the team if you need access to it.
        </p>
      </div>
    </Container>
  </div>
);
