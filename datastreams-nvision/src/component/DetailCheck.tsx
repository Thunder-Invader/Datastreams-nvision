import React from "react";
import Container from "./Container";

class DetailCheck extends React.Component {
    render() {
      return <>
      <Container title="Bestanden delen met ontvanger">
      <h2>Gegevens controleren</h2>
      <form action="/Confirm">
      <input type="submit" value="Volgende" />
      </form>
      </Container>
      </>;
    }
  }
  export default DetailCheck;