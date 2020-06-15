import React from "react";
import Container from "./Container";

class AddDetails extends React.Component {
    render() {
      return <>
      <Container title="Bestanden delen met ontvanger">
      <h2>Kies de bestanden</h2>
      <form action="/Check">
      <input type="submit" value="Volgende" />
      </form>
      </Container>
      </>;
    }
  }
  export default AddDetails;