/* eslint-disable jsx-a11y/iframe-has-title */
import { ImageAvatar, NamedAvatar } from "../../components";

export const AvatarDoc = () => {
  document.title = "Attire UI | Avatar";
  return (
    <div>
      <div className="header-text">
        *Every component has <span className="colored">styles</span> props which
        will contain all the styles according to the user preferences and it
        will take the styles in the form of an object.
      </div>
      <h1>Avatar</h1>
      <p>
        <span className="colored">Avatar</span> is a small profile image which
        is used to show the user's profile (image avatar) or user's initials
        (named avatar).
      </p>

      <h2>Image Avatar</h2>
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
        <strong>width: </strong>Width of the image can be used as per
        convenience.
      </p>
      <p>
        <strong>height: </strong>Height of the image can be used as per
        convenience.
      </p>
      <h3>Examples</h3>
      <div className="docs">
        <ImageAvatar
          imgSrc="https://res.cloudinary.com/sweta-agarwalla/image/upload/v1694326384/photo-1438761681033-6461ffad8d80_ib0x18.jpg"
          name="girl avatar"
          width="6rem"
          height="6rem"
        />
        <ImageAvatar
          imgSrc="https://res.cloudinary.com/sweta-agarwalla/image/upload/v1694326534/photo-1524250502761-1ac6f2e30d43_j0ka56.jpg"
          name="avatar"
        />
      </div>
      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%253CImageAvatar%250A%2520%2520%2520%2520%2520%2520%2520%2520imgSrc%253D%2522https%253A%252F%252Fres.cloudinary.com%252Fsweta-agarwalla%252Fimage%252Fupload%252Fv1694326384%252Fphoto-1438761681033-6461ffad8d80_ib0x18.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520name%253D%2522girl%2520avatar%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520width%253D%25226rem%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520height%253D%25226rem%2522%250A%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253CImageAvatar%250A%2520%2520%2520%2520%2520%2520%2520%2520imgSrc%253D%2522https%253A%252F%252Fres.cloudinary.com%252Fsweta-agarwalla%252Fimage%252Fupload%252Fv1694326534%252Fphoto-1524250502761-1ac6f2e30d43_j0ka56.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520name%253D%2522avatar%2522%250A%2520%2520%2520%2520%2520%2520%252F%253E%250A%250A"
          style={{
            width: "852px",
            height: "354px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </code>

      <h2>Named Avatar</h2>
      <h3>Props Available</h3>
      <p>
        <strong>text: </strong>Here, the text to be shown in the avatar is
        entered.
      </p>
      <p>
        <strong>bgColor: </strong>This is used to add the backgroundColor of
        one's choice.
      </p>
      <p>
        <strong>textColor: </strong>This is used to add the textColor of one's
        choice.
      </p>
      <p>
        <strong>width: </strong>Width of the image can be used as per
        convenience.
      </p>
      <p>
        <strong>height: </strong>Height of the image can be used as per
        convenience.
      </p>
      <h3>Examples</h3>
      <div className="docs">
        <NamedAvatar
          text="SA"
          bgColor="rgb(14, 108, 248)"
          width="3rem"
          height="3rem "
        />
        <NamedAvatar text="HW" />
      </div>
      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%253CNamedAvatar%250A%2520%2520%2520%2520%2520%2520%2520text%253D%2522SA%2522%250A%2520%2520%2520%2520%2520%2520%2520bgColor%253D%2522rgb%2814%252C%2520108%252C%2520248%29%2522%250A%2520%2520%2520%2520%2520%2520%2520width%253D%25227rem%2522%250A%2520%2520%2520%2520%2520%2520%2520height%253D%25227rem%2520%2522%250A%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%253CNamedAvatar%2520text%253D%2522HW%2522%2520%252F%253E%250A%250A"
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
    </div>
  );
};
