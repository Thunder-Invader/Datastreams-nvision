import React from "react";
import Container from "./Container";
import SendingFiles from "./SendingFiles";

class SendingPage extends React.Component {
    render() {
      return <>
            <Container title="Bestanden delen met ontvanger">
                <SendingFiles></SendingFiles>
            </Container>
    </>;
    }
  }
  export default SendingPage;