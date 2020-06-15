import React from "react";
import Container from "./Container";

class Confirmation extends React.Component {
    render() {
      return <>
      <Container title="Bestanden delen met ontvanger">
      <h2 className="confirmation">Bestanden succesvol verstuurd</h2>
      <form action="/Dashboard">
      <input type="submit" value="Volgende" />
      </form>
      </Container>
      </>;
    }
  }
  export default Confirmation;