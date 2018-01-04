import React, {Component} from 'react';
import Typist from 'react-typist';
import billboardmp4 from './showcase2.mp4';

import {SiteTitle, BillboardVideo, MainWrapper} from '../components/Headings';

export default class Index extends Component {
  render() {
    return <div className="TypistExample">
        <BillboardVideo>
          <source src={billboardmp4} type="video/mp4" />
        </BillboardVideo>
        <MainWrapper>
          <Typist>
            <SiteTitle>I am Harman Pannu</SiteTitle>
            <Typist.Delay ms={700} />
            Just a Dev
            <br />
            <br />
            <Typist.Delay ms={700} />
            I love React and JavaScript
          </Typist>
        </MainWrapper>
      </div>;
  }
}
