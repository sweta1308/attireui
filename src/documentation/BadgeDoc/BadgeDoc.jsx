/* eslint-disable jsx-a11y/iframe-has-title */
import { MessageOutlined, ShoppingCart } from "@mui/icons-material";
import { avatar } from "../../assets";
import { ImageAvatar, IconBadge, StatusBadge } from "../../components";

export const BadgeDoc = () => {
  document.title = "Attire UI | Badge";
  return (
    <div className="docs">
      <h1>Badge</h1>
      <p>
        <span className="colored">Badge</span> is a component which shows the
        user's status or display the notification count.{" "}
      </p>
      <h2>Status Badge</h2>
      <p>
        The status badge shows the status of the user's profile, which can be of
        types like: <span className="colored">online</span>,{" "}
        <span className="colored">offline</span> or{" "}
        <span className="colored">dnd</span>.
      </p>

      <h2>Props Available</h2>
      <p>
        <strong>children: </strong>This will contain the image component which
        will be the user's profile picture.
      </p>
      <p>
        <strong>status: </strong>This is a string value, which will take one
        value out of online, dnd or offline and will shoe the status
        accordingly.
      </p>

      <h2>Examples</h2>

      <StatusBadge status="online">
        <ImageAvatar imgSrc={avatar} name="girl" />
      </StatusBadge>
      <StatusBadge status="offline">
        <img
          width="100rem"
          height="100rem"
          src="https://res.cloudinary.com/sweta-agarwalla/image/upload/v1694326864/opz2fzkb02dfso9luxqe.png"
          alt="named"
        />
      </StatusBadge>

      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%253CStatusBadge%2520status%253D%2522online%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%253CImageAvatar%2520imgSrc%253D%257Bavatar%257D%2520name%253D%2522girl%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%253C%252FStatusBadge%253E%250A%2520%2520%2520%2520%2520%253CStatusBadge%2520status%253D%2522offline%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520width%253D%2522100rem%2522%2520height%253D%2522100rem%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fres.cloudinary.com%252Fsweta-agarwalla%252Fimage%252Fupload%252Fv1694326864%252Fopz2fzkb02dfso9luxqe.png%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522named%2522%250A%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%253C%252FStatusBadge%253E%250A%250A"
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

      <h2>Icon Badge</h2>
      <p>
        The icon badge shows the count of notifications or number of items in a
        component.
      </p>

      <h2>Props Available</h2>
      <p>
        <strong>icon: </strong>The icon which we want in the web page.
      </p>
      <p>
        <strong>bgColor: </strong>This will have the backgroundColor of the
        count section.
      </p>
      <p>
        <strong>count: </strong>This will have the number of notifications or
        number of items.
      </p>
      <p>
        <strong>textColor: </strong>This will contain the color which we want
        the text to have.
      </p>

      <h2>Examples</h2>

      <IconBadge icon={<ShoppingCart />} count="5" />
      <IconBadge icon={<MessageOutlined />} count="12" bgColor="var(--green)" />

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%253CIconBadge%2520icon%253D%257B%253CShoppingCart%2520%252F%253E%257D%2520count%253D%25225%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%253CIconBadge%2520icon%253D%257B%253CMessageOutlined%2520%252F%253E%257D%2520count%253D%252212%2522%2520bgColor%253D%2522var%28--green%29%2522%2520%252F%253E%250A%250A"
        style={{
          width: "852px",
          height: "195px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};
