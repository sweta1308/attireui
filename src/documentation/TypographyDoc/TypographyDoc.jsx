/* eslint-disable jsx-a11y/iframe-has-title */
import { Typography } from "../../components";

export const TypographyDoc = () => {
  document.title = "Attire UI | Typography";
  return (
    <>
      <div className="header-text">
        *Every component has <span className="colored">styles</span> props which
        will contain all the styles according to the user preferences and it
        will take the styles in the form of an object.
      </div>
      <h1>Typography</h1>
      <p>
        <span className="colored">Typography</span> is the differences between
        different styles of text that create distinct appearances.
      </p>

      <h2>Text Sizes</h2>
      <p>We can use texts in different sizes.</p>
      <p>
        We can use different texts using these classNames -{" "}
        <span className="colored">x-large</span>,{" "}
        <span className="colored">large</span>,{" "}
        <span className="colored">medium</span>,{" "}
        <span className="colored">small</span>,{" "}
        <span className="colored">x-small</span>.
      </p>

      <h2>Colored Texts</h2>
      <p>Different colors can be applied to the texts.</p>

      <h2>Text Decorations</h2>
      <p>We can apply different kind of text decorations.</p>

      <h3>Props Available</h3>
      <p>
        <strong>text: </strong>This will contain the main text.
      </p>
      <p>
        <strong>textSizeClass: </strong>In this, any of the classNames mentioned
        above can be used to get the texts accordingly.
      </p>
      <p>
        <strong>color: </strong>Used to apply different colors to the text.
      </p>
      <p>
        <strong>textDecoration: </strong>Used to apply different text
        decorations to the text.
      </p>

      <h3>Examples</h3>
      <div className="docs">
        <div>
          <Typography
            text="This is the largest text."
            textSizeClass="x-large"
          />
          <Typography
            text="This is large text."
            textSizeClass="large"
            color="#e80071"
          />
          <Typography
            text="This is medium text."
            textSizeClass="medium"
            color="blue"
          />
          <Typography
            text="This is small text."
            textSizeClass="small"
            textDecoration="underline"
          />
          <Typography
            text="This is the smallest text."
            textSizeClass="x-small"
            color="green"
            textDecoration="line-through"
          />
        </div>
      </div>

      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CTypography%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520text%253D%2522This%2520is%2520the%2520largest%2520text.%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520textSizeClass%253D%2522x-large%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CTypography%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520text%253D%2522This%2520is%2520large%2520text.%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520textSizeClass%253D%2522large%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253D%2522%2523e80071%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CTypography%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520text%253D%2522This%2520is%2520medium%2520text.%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520textSizeClass%253D%2522medium%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253D%2522blue%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CTypography%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520text%253D%2522This%2520is%2520small%2520text.%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520textSizeClass%253D%2522small%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520textDecoration%253D%2522underline%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CTypography%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520text%253D%2522This%2520is%2520the%2520smallest%2520text.%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520textSizeClass%253D%2522x-small%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253D%2522green%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520textDecoration%253D%2522line-through%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%250A"
          style={{
            width: "852px",
            height: "560px",
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
