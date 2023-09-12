/* eslint-disable jsx-a11y/iframe-has-title */
import { Alert } from "../../components/Alert/Alert";

export const AlertDoc = () => {
  return (
    <>
      <h1>Alert</h1>
      <p>
        <span className="colored">Alerts</span> are a useful tool for drawing
        users' attention to crucial information without breaking their flow.
      </p>

      <h2>Props Available</h2>
      <p>
        <strong>severity:</strong> Four severity types are defined:{" "}
        <span className="colored">success</span>,{" "}
        <span className="colored">warning</span>,{" "}
        <span className="colored">info</span> and{" "}
        <span className="colored">error</span>. Any level of severity that you
        select will determine the alert's appearance.
      </p>
      <p>
        <strong>message: </strong>This prop can be used to input any message
        that we wish to display to the user.
      </p>

      <h2>Examples</h2>

      <Alert severity="success" message="Success Notification" />
      <Alert severity="warning" message="Warning Notification" />
      <Alert severity="info" message="Info Notification" />
      <Alert severity="error" message="Error Notification" />

      <code>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28176%2C218%2C253%2C1%29&t=lucario&wt=sharp&l=jsx&width=851.8000020980835&ds=true&dsyoff=0px&dsblur=34px&wc=true&wa=false&pv=39px&ph=75px&ln=false&fl=1&fm=Hack&fs=13px&lh=122%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%253CAlert%2520severity%253D%2522success%2522%2520message%253D%2522Success%2520Notification%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253CAlert%2520severity%253D%2522warning%2522%2520message%253D%2522Warning%2520Notification%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253CAlert%2520severity%253D%2522info%2522%2520message%253D%2522Info%2520Notification%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253CAlert%2520severity%253D%2522error%2522%2520message%253D%2522Error%2520Notification%2522%2520%252F%253E%250A%250A"
          style={{
            width: "852px",
            height: "227px",
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
