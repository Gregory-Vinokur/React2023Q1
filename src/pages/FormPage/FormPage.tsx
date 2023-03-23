import React, { Component } from 'react';
import Form from '../../components/organisms/Form/Form';
import Header from '../../components/molecules/header/Header';

class FormPage extends Component {
  render() {
    return (
      <>
        <Header title="Form" />
        <Form />
      </>
    );
  }
}

export default FormPage;
