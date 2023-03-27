import React, { Component } from 'react';

type HeaderProps = {
  title: string;
};

class Header extends Component<HeaderProps> {
  render() {
    const { title } = this.props;
    return (
      <header>
        <h1>{title}</h1>
      </header>
    );
  }
}

export default Header;
