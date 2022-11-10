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
          <h1 className="big-heading">Digital Assistant Improvements</h1>
          <p className="subtitle">Client: HSBC<br/> Role: Lead UX Designer
           </p>
        </header>
    
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../images/HSBC-Fusion-DA.png"
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
                There were concerns on the current experience and wanted to improve the user journey before launching to a broader audience. Improving the user journey will help reduce support tickets and improve the procurement experience for HSBC employees.<td>
                </td>
                <td></td>
              </tr>

              <tr>
                <td className="overline year"><h2>Design Sprints</h2></td>
                <td>
                Firstly I setup a design sprint to help break down the problem and help us ideate solutions to solve the problem at hand.
                <div className="wrapper">
                <StaticImage
                        className="img"
                        src="../images/HSBC-01.jpg"
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
              <td className="overline year"><h2>Introductions & Stakeholder Mapping</h2></td>

                <td>Mapping out the various stakeholders in the business and understand the project goals from their perspective.<br/><br/>
                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/HSBC-02.jpg"
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
              <td className="overline year"><h2>Reviewing Personas & Journey Map</h2></td>

                <td>Reviewing personas so we can understand who we are desiging for<br/><br/>
                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/HSBC-03.jpg"
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

                <td>Based on key pain points I formulated "How might we..." questions to help kick start the ideation process.<br/><br/>
                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/HSBC-04.jpg"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div>
                    <br/><br/>
                    <ul>
                      <li>Improving the invoices status layout to make information & status clearer.</li>
                      <li>Searching for invoices was too complex in the chat window so better to drive users to Fusion for complex searches</li>
                    </ul>
                    <br/><br/> 
                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/HSBC-05.jpg"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div>
                    <br/><br/>
                    <ul>
                      <li>Improving the information layout and highlighting which expenses have been raised</li>
                      <li>Searching for expenses was too complex in the chat window so better to drive users to Fusion for complex searches</li>
                    </ul>
                    <br/><br/> 
                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/HSBC-06.jpg"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/>
                    <ul>
                      <li>Removing the carousel as it did not add value and felt like a microsite instead a conversation experience.</li>
                      <li>Starting the conversation by asking the user to type their query and then guide them
                      <li>Add the ability to easily reset the conversation if they get stuck.</li>
                    </ul>
                    <br/><br/>  
                </td>
                <td></td>
              </tr>    

              <tr>
              <td className="overline year"><h2>Conversation Flow</h2></td>

                <td>Co-created the full conversation flow and improved experience with the customer and tech leads. Tech leads were able to take the flow and build a demo of the application to gather further user feedback. <br/><br/>

                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/HSBC-07.jpg"
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
              <td className="overline year"><h2>Takeaways</h2></td>

                <td>After presenting the live demo of the flow and UIs we gathered feedback to further improve the experience by:<br/>
                <ul>
                  <li>Removing the reset conversation button and allowing the user to type "Menu".</li>
                  <li>Adding a carousel option for multiple answers to FAQ questions to reduce vertical scrolling.</li>
                </ul>
                  
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

