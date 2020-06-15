import React from "react";
import Container from "./Container";
import Receiver from "./Receiver";

class SendingFiles extends React.Component {
    render() {
      return <>
          <div>
              <h2>Nieuwe ontvanger toevoegen</h2><h2>Kies ontvanger</h2>
              <Receiver></Receiver>
          </div>
          <form action="/Details">
              <input type="submit" value="Volgende" />
          </form>
    </>;
    }
  }
  export default SendingFiles;