/* eslint-disable jsx-a11y/iframe-has-title */
import { ResponsiveImage, RoundedImage } from "../../components";

export const ImageDoc = () => {
  document.title = "Attire UI | Image";
  return (
    <>
      <div className="header-text">
        *Every component has <span className="colored">styles</span> props which
        will contain all the styles according to the user preferences and it
        will take the styles in the form of an object.
      </div>
      <h1>Images</h1>
      <p>
        <span className="colored">Images</span> can be responsive to fit the
        parent's width, and also can be customised to be round shaped.
      </p>

      <h2>Rounded Image</h2>
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
        <RoundedImage
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqn5iXJW757SU-YTiWzKHZP-IZhCN5f71Z2A&usqp=CAU"
          width="7rem"
          height="7rem"
          name="girl"
        />
        <RoundedImage imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDuYjkJrzOsAcqsLJucj5MMXK7NNCaQBNM2w&usqp=CAU" />
      </div>
      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%253CRoundedImage%250A%2520%2520%2520%2520%2520%2520%2520imgSrc%253D%2522https%253A%252F%252Fencrypted-tbn0.gstatic.com%252Fimages%253Fq%253Dtbn%253AANd9GcSqn5iXJW757SU-YTiWzKHZP-IZhCN5f71Z2A%2526usqp%253DCAU%2522%250A%2520%2520%2520%2520%2520%2520%2520width%253D%25227rem%2522%250A%2520%2520%2520%2520%2520%2520%2520height%253D%25227rem%2522%250A%2520%2520%2520%2520%2520%2520%2520name%253D%2522girl%2522%250A%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%253CRoundedImage%2520imgSrc%253D%2522https%253A%252F%252Fencrypted-tbn0.gstatic.com%252Fimages%253Fq%253Dtbn%253AANd9GcRDuYjkJrzOsAcqsLJucj5MMXK7NNCaQBNM2w%2526usqp%253DCAU%2522%2520%252F%253E%250A%250A"
          style={{
            width: "852px",
            height: "306px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </code>

      <h2>Responsive Image</h2>
      <p>
        We can make the image fit the width of container. It's height will get
        adjusted by keeping the aspect ratio same.
      </p>
      <h3>Props Available</h3>
      <p>
        <strong>imgSrc: </strong>This provides the URL for the image which is
        used.
      </p>
      <p>
        <strong>name: </strong>This gives the name of the image which is being
        used, and it will be used as an alt attribute.
      </p>
      <h3>Example</h3>
      <div className="docs">
        <ResponsiveImage
          imgSrc="https://res.cloudinary.com/sweta-agarwalla/image/upload/v1694367148/images_cctyz2.jpg"
          name="landscape"
        />
      </div>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%253CResponsiveImage%250A%2520%2520%2520%2520%2520%2520%2520imgSrc%253D%2522https%253A%252F%252Fres.cloudinary.com%252Fsweta-agarwalla%252Fimage%252Fupload%252Fv1694367148%252Fimages_cctyz2.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520name%253D%2522landscape%2522%250A%2520%2520%2520%2520%2520%252F%253E%250A%250A"
        style={{
          width: "852px",
          height: "243px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </>
  );
};
