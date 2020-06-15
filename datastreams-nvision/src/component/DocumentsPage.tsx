import React from "react";
import Container from "./Container";
import FilterBlock from "./FilterBlock";
import DocumentBlock from "./DocumentBlock";

class DocumentsPage extends React.Component {
    render() {
      return <>
        <Container title="Documenten">
            <div>
                <FilterBlock></FilterBlock>
                <DocumentBlock></DocumentBlock>
            </div>
        </Container>
      </>;
    }
  }
  export default DocumentsPage;