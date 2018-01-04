import React from 'react';
import Helmet from 'react-helmet';

import { Title, MainWrapper } from '../components/Headings';
import { ProjectsList } from '../components/ProjectsStyles';

const projects = [
  {
    title: "Jamming",
    link: "http://high-brothers.surge.sh/",
    desc: "Build using Spotify API :<br />Built With:React JS"
  },
  {
    title: "Ravenous",
    link: "https://iharmanpannu.github.io/ravenous",
    desc:
      "A restaurant search web app created using Yelp API :<br /> Built With: React JS, Yelp Api, fetch"
  },
  {
    title: "Gif Search",
    link: "http://gifs-search.surge.sh",
    desc:
      "Giphy Search web app created using Giphy.com API :<br />Built With: React JS"
  },
  {
    title: "URL Shorten Web App",
    link: "https://iharmanpannu.github.io/shorten-url-jquery/",
    desc:
      'URL shorten or expand web app <br />Built With: ES6, Google API'
  }
];


export default class Projects extends React.Component {
  render() {
    return (
      <MainWrapper color="#e74c3c">
        <Title>Projects</Title>
        <p>I have worked on many projects. Here are some projects I've developed/created.</p>
        <ProjectsList>
          {projects.map(project => (
            <li>
              <h3 className="project-title">
                <a target="_blank" href={project.link}>{project.title}</a>
              </h3>
              <p dangerouslySetInnerHTML={{ __html: project.desc }} />
            </li>
          ))}
        </ProjectsList>
      </MainWrapper>
    );
  }
}
