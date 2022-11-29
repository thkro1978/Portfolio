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
      <Helmet title="Project" />

      <main>
        <header ref={revealTitle}>
          <h1 className="big-heading">Onboarding Portal</h1>
          <p className="subtitle">Client: Tungsten Network<br/> Role: Lead UX Designer
           </p>
        </header>
    
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../images/TN-Invoice-Status.png"
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
                <td className="overline year"><h2>Project Goals</h2></td>

                <td>To improve Tungsten Network's supplier portal experience and become a more customer-led organisation an initiative was created to implement design thinking processes into the business. 
                  My role was to help lead the customer research and facilitation of design thinking workshops. These workshops were used to understand our customers better to deliver creative solutions 
                  and help solve common pain points. After each key project milestone, I would provide updates to c-suite executives and heads of departments.<br/><br/>
                </td>
                <td></td>
              </tr>

              <tr>
              <td className="overline year"><h2>Customer research</h2></td>

                <td>For the first phase, we interviewed 35 customers to understand our customer's jobs to be done, where they are struggling and what success looks like to them. 
                  We then collaboratively defined our personas, collected interview quotes, and sorted them into key topics.<br/><br/>
                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/TN-01.jpg"
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

                <td>Based on customer feedback and business goals the team decided to focus on improving the invoice status journey and experience. 
                  This part of the supplier journey provides the most value to suppliers as it is critical for them to get paid on time and improve business cash flow. 
                  During this phase, we mapped out the current journey and highlighted where we could improve and reduce the steps. 
                  We also looked at other experiences we thought were "best in class" to help with the brainstorming session. 
                  Collaboratively we mapped out the screens and designed an experience that we thought would be the best experience for our customers.<br/><br/>
                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/TN-02.jpg"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/> 
                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/TN-03.png"
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
              <td className="overline year"><h2>Prototyping + Testing </h2></td>

                <td>Interactive high fidelity protoypes were created for user testing and feedback. Using hotjar, I ran a survey on the portal asking the users to view the new status page prototype with open ended questions to get there feelings and detailed unbiased feedback. 
                  This helped us get customer perspective of the design using a low-cost prototype requiring no development. Quickly identify if we are going in the right direction and iterating based on feedback.<br/><br/>
                
                    </td>
                <td></td>
              </tr>

              <tr>
              <td className="overline year"><h2>Designs</h2></td>
              <td>
                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/TN-05.jpg"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/> 

                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/TN-04.jpg"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/> 
                </td>
                </tr>

            <tr>
              <td className="overline year"><h2>Outcomes </h2></td>

                <td>After business analysis and technical scoping, it was decided to de-scope the improvements due to the lack of resources and the time it would take to change the protal. 
                  Based on this we decided to make improvements to the current UI copy and self help tool to better guide the user, as this required the least amount of development work until more resources could be assigned.
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
