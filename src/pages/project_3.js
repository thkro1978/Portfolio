import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Layout } from '@components';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';
import { StaticImage } from 'gatsby-plugin-image';

const StyledTableContainer = styled.div`
  margin: 100px -20px;

  @media (max-width: 768px) {
    margin: 50px -10px;
  }

  table {
    width: 90%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--light-navy);
      }
    }

    th,
    td {
      padding: 10px;
      text-align: left;
      vertical-align: top;

      &:first-child {
        padding-left: 20px;

        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }
      &:last-child {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    tr {
      cursor: default;

      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    td {
      &.year {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

    a.ViewProjects {
      text-align: center;
      width: 100%;
    }

      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--lightest-slate);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;
      }

      &.company {
        font-size: var(--fz-lg);
        white-space: nowrap;
      }

      &.tech {
        font-size: var(--fz-xs);
        font-family: var(--font-mono);
        line-height: 1.5;
        padding: 0 20px;
        width: 33%;
      }

      &.links {
        min-width: 100px;

        div {
          display: flex;
          align-items: center;

          a {
            ${({ theme }) => theme.mixins.flexCenter};
            flex-shrink: 0;
          }

          a + a {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;

const ArchivePage = ({ location, data }) => {
  const projects = data.allMarkdownRemark.edges;
  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig(200, 0));
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  return (
    <Layout location={location}>
      <Helmet title="Mobile Vehicle Tracking" />

      <main>
        <header ref={revealTitle}>
          <h1 className="big-heading">Mobile Vehicle Tracking</h1>
          <p className="subtitle">Client: Autotrip<br/> Role: Lead UX Designer
           </p>
        </header>
    
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../images/Autotrip-App.png"
              maxWidth={990}
              quality={100}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>

        <StyledTableContainer>
          <table>
            <tbody>
              <tr>
                <td className="overline year"><h2>Problem</h2></td>
                Driver's throughout the UK are using various methods to capture business mileage, from logbooks and written notes to excel spreadsheets and google maps. These methods are both time-consuming and often not accurate, trips are easily missed or distances are not measured accurately. Driver's are not able to claim the full amount and are also not HMRC compliant when submitting reports.<br/><br/>
                To make Autotrip's product more accessible to driver's facing these problems, a mobile app version of their B2B + B2C SAAS platform + GPS tracking device needed to be developed to meet business goals of increasing subscription signups. My role was to set up designing thinking process by defining key personas, map out the various user journeys and create wireframes to validate the hypothesis using user research and iterating based on feedback.<br/><br/>
                <td>
                </td>
                <td></td>
              </tr>

              <tr>
                <td className="overline year"><h2>Design Principals</h2></td>
                <td>
                Firstly I applied Human-Centered Design and Lean UX processes to make sure that we prioritised the right features and my design decisions were supported by research and feedback from drivers and key stakeholders within the business.
                <div className="wrapper">
                <StaticImage
                        className="img"
                        src="../images/Autotrip_Design_Process.png"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/> 

                </td>
                <td></td>
              </tr>

              <tr>
              <td className="overline year"><h2>Building Empathy</h2></td>

                <td>During internal workshop sessions, I created personas and empathy maps, helping the team visualise the main types of drivers and sharing an understanding of their emotions and pain points.<br/><br/>

By building empathy we all start to understand the driver’s behavior, identifying problems we need to solve and guide us to meaningful innovation. As the project progresses I revise and adjust the personas and empathy maps based on actual research data.<br/><br/>
                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/Autotrip-Personas.jpg"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/> 
                </td>
                <td></td>
              </tr>

              <tr>
              <td className="overline year"><h2>Product Strategy</h2></td>

                <td>From research gathered we can now understand as a team who we are desigining for and the problems we are trying to solve. Defining the product vision and how we will measure success.<br/><br/>
                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/Autotrip-product-thinking.jpg"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/> 
                </td>
                <td></td>
              </tr>

              <tr>
              <td className="overline year"><h2>Journey Mapping</h2></td>

                <td>During internal workshops with key stakeholders I mapped out a user stories and a high level user journey which was used to create lo-fi wireframes of the screens needed with key functionality required.<br/><br/>
                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/Autotrip-User-Flow.jpg"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/> 
                </td>
                <td></td>
              </tr>

              

              <tr>
              <td className="overline year"><h2>Ideation</h2></td>

                <td>Mapping out the full user journey and key functional components of the mobile app<br/><br/>
                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/Autotrip-Functionality.png"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/> 
                </td>
                <td></td>
              </tr>    

              <tr>
              <td className="overline year"><h2>Storyboarding</h2></td>

                <td>Storyboards were developed to easily understand the flow of our customer interaction with the product, giving everyone on the project a clear sense of what’s 
                  important for users and where we could add innovation when looking for further improvements.<br/><br/>

                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/Autotrip-Storyboard.jpg"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/> 
                </td>
                <td></td>
              </tr>

              <tr>
              <td className="overline year"><h2>Design Trends</h2></td>

                <td>Finding inspiration before designing the app and what the future possibilities of solution could be to help drivers track trips quicker and more accurately.<br/><br/>

                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/Autotrip-Design-Trends0.jpg"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/> 
                </td>
                <td></td>
              </tr>

              <tr>
              <td className="overline year"><h2>Prototyping + Designs</h2></td>

                <td>I started designing specific sections of the product according to the user flow diagram. Designs were prepared in the form of click-through prototypes for feedback from stakeholders & users.

Interface elements were simultaneously added to the design system with the atomic approach. Setting up a global design system allowed me to make system-wide changes quickly during the iteration process.

Rapid prototyping allowed for quick usability testing and reiteration. Modern design tools like Adobe XD and Zeplin allowed me for flawless delivery of the layouts and design system to the development team.

Blues and green were used to convey trust and freshness, as we wanted to differentiate from competitors, copy was informal and unique to the Autotrip brand.<br/><br/>

                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/autotrip-iphone-screens.jpg"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/> 

                    Pattern library for developers to easily build components and maintain consistency:<br/><br/>

                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/Autotrip-Design-Library.jpg"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/> 

                </td>
                <td></td>
              </tr>

              <tr>
              <td className="overline year"><h2>Testing + Validation</h2></td>

                <td>I worked with an research agency to source a database of 500 drivers throughout the UK who currently submit business mileage claims. 
                  I worked on a survey together with stakeholders and build a lo-fidelity prototype to include to validate the user journeys and functionality. 
                  After recieving all the data I presented to everyone showing the feedback we got. Overall drivers like the idea and said it they would definetly use the app, 
                  it was also interesting that a lot of users were using Google Maps, so this was something I kept in mind while designing the live view + trips page to fit in with 
                  the user's mental model. There was also additional functionality we identified that we could include in future iterations.

                  <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/Autotrip-user-research.jpg"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/> 
                </td>
                <td></td>
              </tr>

                    <tr>
                      <td className="overline year"><h2>Outcomes</h2></td>

                      <td>I worked closely with the dev team to ensure a smooth design-into-code transition. I also performed design QA on the developed product to make sure it met the design specifications.<br/><br/>

Based on feedback during research I was also able to assist in prioritising features that would satisfy both user and business goals and define the future roadmap.<br/><br/>

Working on an end to end product design process within a cross functional team was a chance for me to really refine the product development process. Building a design library to rapidly create functionality to test, implementing user research to confirm if functionality really solves a pain point then iterating based on feedback from stakeholders and users. <br/><br/> 
                
<div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/Autotrip-Customer-Comment-01.png"
                        maxWidth={400}
                        maxHeight={40}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/>

                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/Autotrip-Customer-Comment-02.png"
                        maxWidth={400}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/>

                </td>
                      <td></td>
                    </tr>

                    <tr>
                      <td></td>
                      <td><a className="ViewProjects" href="../#projects">View Projects ></a></td>
                      <td></td>
                    </tr>
               
            </tbody>
            
          </table>
          
        </StyledTableContainer>
      </main>
    </Layout>
  );
};
ArchivePage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ArchivePage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            tech
            github
            external
            ios
            android
            company
          }
          html
        }
      }
    }
  }
`;

