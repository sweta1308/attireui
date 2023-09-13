/* eslint-disable jsx-a11y/iframe-has-title */
import { Heading } from "../../components";

export const HeadingDoc = () => {
  document.title = "Attire UI | Headings";
  return (
    <>
      <div className="header-text">
        *Every component has <span className="colored">styles</span> props which
        will contain all the styles according to the user preferences and it
        will take the styles in the form of an object.
      </div>
      <h1>Headings</h1>
      <p>
        <span className="colored">Headings</span> are available in different
        sizes, which has different font sizes and weights.
      </p>
      <p>
        We can use different headings using these classNames -{" "}
        <span className="colored">x-large</span>,{" "}
        <span className="colored">large</span>,{" "}
        <span className="colored">medium</span>,{" "}
        <span className="colored">small</span>,{" "}
        <span className="colored">x-small</span>.
      </p>

      <h2>Props Available</h2>
      <p>
        <strong>text: </strong>This will contain the heading text.
      </p>
      <p>
        <strong>selectedClass: </strong>In this, any of the classNames mentioned
        above can be used to get the headings accordingly.
      </p>
      <h2>Examples</h2>
      <div className="docs">
        <div>
          <Heading
            text="This is the largest heading."
            selectedClass="x-large"
          />
          <Heading text="This is large heading." selectedClass="large" />
          <Heading text="This is medium heading." selectedClass="medium" />
          <Heading text="This is small heading." selectedClass="small" />
          <Heading
            text="This is the smallest heading."
            selectedClass="x-small"
          />
        </div>
      </div>

      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%253CHeading%2520text%253D%2522This%2520is%2520the%2520largest%2520heading.%2522%2520selectedClass%253D%2522x-large%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%253CHeading%2520text%253D%2522This%2520is%2520large%2520heading.%2522%2520selectedClass%253D%2522large%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%253CHeading%2520text%253D%2522This%2520is%2520medium%2520heading.%2522%2520selectedClass%253D%2522medium%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%253CHeading%2520text%253D%2522This%2520is%2520small%2520heading.%2522%2520selectedClass%253D%2522small%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%253CHeading%2520text%253D%2522This%2520is%2520the%2520smallest%2520heading.%2522%2520selectedClass%253D%2522x-small%2522%2520%252F%253E%250A%250A"
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
    </>
  );
};
