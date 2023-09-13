/* eslint-disable jsx-a11y/iframe-has-title */
import { womenTop } from "../../assets";
import {
  BadgeCard,
  DismissCard,
  Heading,
  HorizontalCard,
  PrimaryButton,
  SecondaryButton,
  ShadowCard,
  TextOnlyCard,
  TextOverlayCard,
  VerticalCard,
} from "../../components";

export const CardDoc = () => {
  document.title = "Attire UI | Card";
  return (
    <>
      <div className="header-text">
        *Every component has <span className="colored">styles</span> props which
        will contain all the styles according to the user preferences and it
        will take the styles in the form of an object.
      </div>
      <h1>Card</h1>
      <p>
        <span className="colored">Card</span> is used to display certain
        information about a product or a thing.
      </p>
      <p>
        There are <span className="colored">7</span> types of cards available:{" "}
        <span>Vertical Card</span>,{" "}
        <span className="colored">Horizontal Card</span>,{" "}
        <span className="colored">Badge Card</span>,{" "}
        <span className="colored">Dismiss Card</span>,{" "}
        <span className="colored">Text Only Card</span>,{" "}
        <span className="colored">Text Overlay Card</span> and{" "}
        <span className="colored">Shadow Card</span>.
      </p>

      <h2>Vertical Card</h2>
      <p>A vertical card stores content from top to bottom.</p>
      <h3>Props Available</h3>
      <p>
        <strong>imgSrc: </strong>This provides the URL for the image which is
        used.
      </p>
      <p>
        <strong>name: </strong>This gives the name of the image which is being
        used, and it will be used as an alt attribute.
      </p>
      <p>
        <strong>children: </strong>This will contain all other headings or
        descriptions which will be included in the card below the image.
      </p>
      <h3>Examples</h3>
      <div className="docs">
        <VerticalCard imgSrc={womenTop} name="Women's top">
          <h3>Zara</h3>
          <p>Women's Top</p>
          <p>
            ₹499 <small style={{ textDecoration: "line-through" }}>₹699</small>
          </p>
        </VerticalCard>
      </div>
      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%253CVerticalCard%2520imgSrc%253D%257BwomenTop%257D%2520name%253D%2522Women%27s%2520top%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EZara%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EWomen%27s%2520Top%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%25E2%2582%25B9499%2520%253Csmall%2520style%253D%257B%257B%2520textDecoration%253A%2520%2522line-through%2522%2520%257D%257D%253E%25E2%2582%25B9699%253C%252Fsmall%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252FVerticalCard%253E%250A%250A"
          style={{
            width: "852px",
            height: "275px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </code>

      <h2>Horizontal Card</h2>
      <p>Horizontal card is used to display the data in horizontal way.</p>
      <h3>Props Available</h3>
      <p>Same as Vertical Card.</p>
      <h3>Examples</h3>
      <div className="docs">
        <HorizontalCard
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSriSEzjr3x1NFr2H6LPU0-E9ZMVQI2Qrk0sw&usqp=CAU"
          name="Nature"
        >
          <h3>Nature</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </HorizontalCard>
      </div>
      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%253CHorizontalCard%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520imgSrc%253D%2522https%253A%252F%252Fencrypted-tbn0.gstatic.com%252Fimages%253Fq%253Dtbn%253AANd9GcSriSEzjr3x1NFr2H6LPU0-E9ZMVQI2Qrk0sw%2526usqp%253DCAU%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520name%253D%2522Nature%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253ENature%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%252C%2520consectetur%2520adipiscing%2520elit%252C%2520sed%2520do%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520eiusmod%2520tempor%2520incididunt%2520ut%2520labore%2520et%2520dolore%2520magna%2520aliqua.%257B%2522%2520%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252FHorizontalCard%253E%250A%250A"
          style={{
            width: "852px",
            height: "338px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </code>

      <h2>Badge Card</h2>
      <p>
        Badge card is the card which contains some kind of badge over the card.
      </p>
      <h3>Props Available</h3>
      <p>
        <strong>badgeText: </strong>This will contain the badge text will be
        there over the card.
      </p>
      <p>
        <strong>children: </strong>This will contain all other headings or
        descriptions which will be included in the card below the icon.
      </p>
      <h3>Examples</h3>
      <div className="docs">
        <BadgeCard badgeText="BESTSELLER">
          <VerticalCard imgSrc={womenTop} name="Women's top">
            <h3>Zara</h3>
            <p>Women's Top</p>
            <p>
              ₹499{" "}
              <small style={{ textDecoration: "line-through" }}>₹699</small>
            </p>
          </VerticalCard>
        </BadgeCard>
      </div>
      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%253CBadgeCard%2520badgeText%253D%2522BESTSELLER%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CVerticalCard%2520imgSrc%253D%257BwomenTop%257D%2520name%253D%2522Women%27s%2520top%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EZara%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EWomen%27s%2520Top%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%25E2%2582%25B9499%257B%2522%2520%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Csmall%2520style%253D%257B%257B%2520textDecoration%253A%2520%2522line-through%2522%2520%257D%257D%253E%25E2%2582%25B9699%253C%252Fsmall%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252FVerticalCard%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252FBadgeCard%253E%250A%250A"
          style={{
            width: "852px",
            height: "322px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </code>

      <h2>Dismiss Card</h2>
      <p>
        In dismiss card, users will have the option to close the card using the
        dismiss icon.
      </p>
      <h3>Props Available</h3>
      <p>
        <strong>children: </strong>This will contain all other headings or
        descriptions which will be included in the card below the icon.
      </p>
      <h3>Example</h3>
      <div className="docs">
        <DismissCard>
          <p>Do you want to save this file to gallery?</p>
          <PrimaryButton buttonText="Yes" />
          <SecondaryButton buttonText="No" />
        </DismissCard>
      </div>
      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%253CDismissCard%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EDo%2520you%2520want%2520to%2520save%2520this%2520file%2520to%2520gallery%253F%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CPrimaryButton%2520buttonText%253D%2522Yes%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CSecondaryButton%2520buttonText%253D%2522No%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252FDismissCard%253E%250A%250A"
          style={{
            width: "852px",
            height: "243px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </code>

      <h2>Text Overlay Card</h2>
      <p>
        Text overlay card is the one in which we have to show the text on top of
        the card.
      </p>
      <h3>Props Available</h3>
      <p>
        <strong>overlayText: </strong>This will contain the text will be there
        over the card.
      </p>
      <p>
        <strong>children: </strong>This will contain all other headings or
        descriptions which will be included in the card below the icon.
      </p>
      <h3>Example</h3>
      <div className="docs">
        <TextOverlayCard
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSriSEzjr3x1NFr2H6LPU0-E9ZMVQI2Qrk0sw&usqp=CAU"
          name="nature"
          overlayText="Card Title"
        ></TextOverlayCard>
      </div>
      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%253CTextOverlayCard%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520imgSrc%253D%2522https%253A%252F%252Fencrypted-tbn0.gstatic.com%252Fimages%253Fq%253Dtbn%253AANd9GcSriSEzjr3x1NFr2H6LPU0-E9ZMVQI2Qrk0sw%2526usqp%253DCAU%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520name%253D%2522nature%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520overlayText%253D%2522Card%2520Title%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%253E%253C%252FTextOverlayCard%253E%250A%250A"
          style={{
            width: "852px",
            height: "259px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </code>

      <h2>Text Only Card</h2>
      <p>
        This card will only contain some texts and go to actions, but not images
        or dismiss buttons.
      </p>
      <h3>Props Available</h3>
      <p>Same as Dismiss Card.</p>
      <h3>Examples</h3>
      <div className="docs">
        <TextOnlyCard>
          <Heading text="Basic Plan" selectedClass="medium" />
          <p>$29.99/mon</p>
          <ul>
            <li>For family who live together</li>
            <li>Ad-free music listening</li>
            <li>Download 10k songs/device</li>
            <li>Login via 5 devices</li>
          </ul>
          <PrimaryButton
            buttonText="Sign Up"
            styles={{ backgroundColor: "red" }}
          />
        </TextOnlyCard>
      </div>
      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%253CTextOnlyCard%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CHeading%2520text%253D%2522Basic%2520Plan%2522%2520selectedClass%253D%2522medium%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%252429.99%252Fmon%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cul%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EFor%2520family%2520who%2520live%2520together%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EAd-free%2520music%2520listening%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EDownload%252010k%2520songs%252Fdevice%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253ELogin%2520via%25205%2520devices%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CPrimaryButton%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520buttonText%253D%2522Sign%2520Up%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520styles%253D%257B%257B%2520backgroundColor%253A%2520%2522red%2522%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252FTextOnlyCard%253Etton%2520buttonText%253D%2522No%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252FDismissCard%253E%250A%250A"
          style={{
            width: "852px",
            height: "401px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </code>

      <h2>Shadow Card</h2>
      <p>
        Shadow card is that in which there will be some shadow around the card.
      </p>
      <h3>Props Available</h3>
      <p>Same as Dismiss Card.</p>
      <h3>Examples</h3>
      <div className="docs">
        <ShadowCard>
          <DismissCard>
            <p>Do you want to save this file to gallery?</p>
            <PrimaryButton buttonText="Yes" />
            <SecondaryButton buttonText="No" />
          </DismissCard>
        </ShadowCard>
      </div>
      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%253CShadowCard%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CDismissCard%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EDo%2520you%2520want%2520to%2520save%2520this%2520file%2520to%2520gallery%253F%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CPrimaryButton%2520buttonText%253D%2522Yes%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CSecondaryButton%2520buttonText%253D%2522No%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252FDismissCard%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252FShadowCard%253E%250A%250A"
          style={{
            width: "852px",
            height: "275px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </code>
    </>
  );
};
