/* eslint-disable jsx-a11y/iframe-has-title */
import { EditNote, Favorite, ShoppingCart } from "@mui/icons-material";
import {
  PrimaryButton,
  SecondaryButton,
  IconButton,
  LinkButton,
  FloatingButton,
} from "../../components";

export const ButtonDoc = () => {
  document.title = "Attire UI | Button";
  return (
    <>
      <h1>Button</h1>
      <p>
        Using the <span className="colored">button</span> component, users are
        able to carry out certain actions or browse to other sites.{" "}
      </p>
      <p>The buttons can be of various types.</p>

      <h2>Primary Button</h2>
      <p>
        Primary buttons are used where user's attention is required and it
        performs the main actions.
      </p>
      <h2>Props Available</h2>
      <p>
        <strong>buttonText: </strong>This represents the text which will be
        shown on the button.
      </p>
      <p>
        <strong>styles: </strong>This will contain all the styles which will be
        applied to the button and it will take the styles in the form of an
        object.
      </p>
      <h2>Examples</h2>
      <div className="docs">
        <PrimaryButton buttonText="Click Me!" />
        <PrimaryButton
          buttonText="Submit"
          styles={{
            backgroundColor: "blue",
            color: "yellow",
            width: "100px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        />
      </div>
      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%253CPrimaryButton%2520buttonText%253D%2522Click%2520Me%21%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%253CPrimaryButton%250A%2520%2520%2520%2520%2520%2520%2520buttonText%253D%2522Submit%2522%250A%2520%2520%2520%2520%2520%2520%2520styles%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520backgroundColor%253A%2520%2522blue%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253A%2520%2522yellow%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520width%253A%2520%2522100px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520borderRadius%253A%2520%252210px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%252F%253E%250A%250A"
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

      <h2>Secondary Button</h2>
      <p>
        Secondary buttons are used where user's attention is not much required.
      </p>
      <h2>Props Available</h2>
      <p>Same as Primary Button</p>
      <h2>Examples</h2>
      <div className="docs">
        <SecondaryButton buttonText="Install App" />
        <SecondaryButton
          buttonText="Visit Here"
          styles={{
            fontSize: "20px",
            borderRadius: "0px",
          }}
        />
      </div>
      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%253CSecondaryButton%2520buttonText%253D%2522Install%2520App%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%253CSecondaryButton%250A%2520%2520%2520%2520%2520%2520%2520buttonText%253D%2522Visit%2520Here%2522%250A%2520%2520%2520%2520%2520%2520%2520styles%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520fontSize%253A%2520%252220px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520borderRadius%253A%2520%25220px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%252F%253E%250A%250A"
          style={{
            width: "852px",
            height: "291px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </code>

      <h2>Link Buttons</h2>
      <p>
        Link Buttons are used to navigate users to some other page and it will
        contain the link of the web page in which the user is directed.
      </p>
      <h2>Props Available</h2>
      <p>
        <strong>buttonText: </strong>This represents the text which will be
        shown on the button.
      </p>
      <p>
        <strong>linkSrc: </strong>This will contain the URL to which the user is
        navigate.
      </p>
      <p>
        <strong>styles: </strong>This will contain all the styles which will be
        applied to the button and it will take the styles in the form of an
        object.
      </p>
      <h2>Examples</h2>
      <div className="docs">
        <LinkButton buttonText="Move to Google" linkSrc="https://google.com/" />
        <LinkButton
          buttonText="View portfolio"
          linkSrc="https://swetaagarwalla.netlify.app/"
          styles={{ color: "green", fontSize: "16px" }}
        />
      </div>
      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%253CLinkButton%2520buttonText%253D%2522Move%2520to%2520Google%2522%2520linkSrc%253D%2522https%253A%252F%252Fgoogle.com%252F%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%253CLinkButton%250A%2520%2520%2520%2520%2520%2520%2520buttonText%253D%2522View%2520portfolio%2522%250A%2520%2520%2520%2520%2520%2520%2520linkSrc%253D%2522https%253A%252F%252Fswetaagarwalla.netlify.app%252F%2522%250A%2520%2520%2520%2520%2520%2520%2520styles%253D%257B%257B%2520color%253A%2520%2522green%2522%252C%2520fontSize%253A%2520%252216px%2522%2520%257D%257D%250A%2520%2520%2520%2520%2520%252F%253E%250A%250A"
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

      <h2>Icon Buttons</h2>
      <p>
        Icon buttons are those which has a icon showing the purpose of the
        button.
      </p>
      <h2>Props Available</h2>
      <p>
        <strong>icon: </strong>Used to add icon to the component.
      </p>
      <p>
        <strong>styles: </strong>This will contain all the styles which will be
        applied to the button and it will take the styles in the form of an
        object.
      </p>
      <h2>Examples</h2>
      <div className="docs">
        <IconButton icon={<ShoppingCart />} />
        <IconButton icon={<Favorite />} styles={{ color: "red" }} />
      </div>
      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%253CIconButton%2520icon%253D%257B%253CShoppingCart%2520%252F%253E%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%253CIconButton%2520icon%253D%257B%253CFavorite%2520%252F%253E%257D%2520styles%253D%257B%257B%2520color%253A%2520%2522red%2522%2520%257D%257D%2520%252F%253E%250A%250A"
          style={{
            width: "852px",
            height: "195px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </code>

      <h2>Floating Action Button</h2>
      <p>
        Floating-action buttons can be customized by adding the icon of your
        choice. This button will be fixed in the web page.
      </p>
      <h2>Props Available</h2>
      <p>Same as Icon Buttons.</p>
      <h2>Examples</h2>
      <div className="docs">
        <FloatingButton icon={<EditNote fontSize="large" />} />
      </div>
      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%253CFloatingButton%2520icon%253D%257B%253CEditNote%2520fontSize%253D%2522large%2522%2520%252F%253E%257D%2520%252F%253E%250A"
          style={{
            width: "852px",
            height: "164px",
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
