import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import { Title, MainWrapper } from '../components/Headings';
import { Resume, FakeButtons } from '../components/AboutStyles';

export default class About extends React.Component {
  render() {
    return <MainWrapper color="#16a085">
        <Title>About</Title>
        <div>
          <p>Hi, I'm Harman Pannu.</p>
          <p>
            Hi, My name is Harman I have a Bachelors of Computer
            Applications and online courses in Front-End Web Development
            from online boot camps. Currently, I am learning front-end web
            development. Source code for all my projects in HTML, CSS, JS
            and React JS is available on my GitHub profile. I am very
            passionate to learn new skills. My current goal is to code every
            day, build projects and to get a job in the industry as soon as
            possible where I will be able to grow faster in my career with
            the help of other existing developers out there.
          </p>
          <p>
            Please <Link to="/contact">contact me</Link> to discuss a project, job or just to chat.
          </p>
        </div>

        <Resume>
          <FakeButtons />
          <div className="resume-inside">
            <h3>&#047;&#042; --Resume-- &#042;&#047;</h3>
            <h4>&#047;&#042; SUMMARY OF QUALIFICATIONS &#042;&#047;</h4>
            <ul>
              <li>
                Received a Bachelors degree in Computer Applications from
                KSO University.
              </li>
              <li>
                Excellent organization, self-motivation, and problem-solving
                skills.
              </li>
              <li>Creative, strong communication skills.</li>
              <li>
                Passionate about web development and new technologies.
              </li>
            </ul>

            <h4>&#047;&#042; Experience &#042;&#047;</h4>

            <h4>&#047;&#042; EDUCATION &#042;&#047;</h4>
            <ul>
              <li>
                Karnataka State Open University - Bachelors of Computer
                Applications 2016
              </li>
              <li>
                Codeacademy - Nov 2017 - Jan 2018- Build front-end Web
                Applications from scratch -
              </li>
              <li>
                TeamTreeHouse - Jan 2018 - Present - Tech Degree - Full Stack JavaScript
              </li>
            </ul>
          </div>
        </Resume>
      </MainWrapper>;
  }
}
