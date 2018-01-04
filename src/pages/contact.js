import React from 'react';

import { Title, MainWrapper } from '../components/Headings';

export default class Index extends React.Component {
  render() {
    return (
      <MainWrapper color="#2980b9">
        <Title>Contact</Title>
        <p>Email me or find me on social media.</p><p className="cont"><a href="mailto:iharmanpannu@gmail.com" className="email">iharmanpannu@gmail.com</a></p>
      </MainWrapper>
    );
  }
}
