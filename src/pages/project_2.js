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
              src="../images/TN-Onboarding-1.png"
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
                <td className="overline year"><h2>Design Principals</h2></td>
                <td>
                <table>
                  <tr>
                    <th>Empathise</th><th>Ideate</th><th>Build, Measure + Learn</th>
                  </tr>
                  <tr>
                    <td className="tech">Understanding the business goals and what success looks like for stakeholders. Interviewing users to understand their jobs to be done, where they are struggling, and where we can add value.</td>
                    <td className="tech">Mapping out the various user journeys with pains and gains. Identifying key user outcomes to ideate and build low fidelity wireframes during internal workshops.</td>
                    <td className="tech">Creating hi-fidelity wireframes using a design library for consistency. Recruiting users to gather feedback and validating the design before creating epics/stories to be picked for development.<br/><br/></td>
                  </tr>
                </table>
                <div className="wrapper">
                <StaticImage
                        className="img"
                        src="../images/TN-HCAI.png"
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

                <td>Together with the Product Manager, BA and Technical Leads, we collaborativley workshoped with various stakeholders and teams to 
                understand the "As is" back office process. After a number of workshops we collaborativley defined the "To be" backend process using 
                story mapping techniques to help create seamless user journeys, the relevant email notifications to be sent and key functional requirements.<br/><br/>
                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/TN-Persona.jpg"
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
                        src="../images/TN-Storyboarding.jpg"
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
              <td className="overline year"><h2>Task Flow Diagrams</h2></td>

                <td>Mapping out the user journey for each persona and all the touchpoints and required UIs after full analysis. 
                  Task flow helped to show all the screens required and how they fit within the happy and unhappy customer paths.<br/><br/>

                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/TN-Task-Flow-Diagram.jpg"
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

                <td>The last phase would be iterating on lo-fi wireframes with the team, presenting back to stakeholders and customers 
                for further feedback before building hi-fi wireframes with the UI designer. During this phase, we presented final UIs 
                for the last round of customer feedback before handing it over for development. Customers agreed that the new process and 
                designs are a big improvement over the current offline process and had also suggested several improvements which we considered 
                and highlighted to include in the final designs.<br/><br/>

                <b>Customer Feedback</b><br/><br/>
                I want to know more about how the subscription model will work, how do I upgrade and downgrade my account?<br/>
I don't see a summary of items I am purchasing while entering my card details<br/>
Our company has multiple billing contacts and need to be able to manage that.<br/><br/>

                <b>Action points based on feedback</b><br/><br/>

                We added FAQs section which is linked to an external Salesforce knowledge based platform mainted by customer support.<br/>
On checkout it was also mentioned it would be helpful to include a summary of the items to be purchased while completing the transaction.<br/>
In many instances there are multiple billing contacts for larger customers so we add the ability to manage multiple contacts.<br/><br/>
                </td>
                <td></td>
              </tr>

              <tr>
              <td className="overline year"><h2>Designs</h2></td>

                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/TN-Buyer_Portal_Suppliers.png"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/> 

                    Supplier Onboarding Portal<br/>

                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/TN-Onboarding.png"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/> 

                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/TN-Upload_Files.png"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/> 

                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/TN-Questionnaire.png"
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
                        src="../images/TN-Design_Library.png"
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
                      <td className="overline year"><h2>Challenges</h2></td>

                      <td>Business stakeholders were hesitant to get feedback from customers on the designs and pricing models due to the sensitive nature of Tungsten's business model of charging WebForm suppliers. Competitors pricing models are free for suppliers using Webform and only charge when they integrate. The portal also has poor user experience and is a challenge for suppliers to submit their invoices. My suggestion was to introduce a freemium to premium model, and also improve the user experience of the portal so customers can see value and more likely to upgrade.<br/><br/>
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
