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
                <td className="overline year"><h2>Problem</h2></td>

                <td>It takes up to 9 months to onboard a high volume integrated supplier and start transacting on the network. In that time there is high churn rate and a loss of potential revenue while the supplier is not transacting on the network.

Too much time is spent manually onboarding the supplier, dealing with support queries and reminding the supplier and their buyer to complete outstanding tasks.<br/><br/>
                </td>
                <td></td>
              </tr>

              <tr>
              <td className="overline year"><h2>Product Vision</h2></td>

                <td>
                <b>"Getting suppliers on our network faster, with full visibility and improved communication between both buyer and supplier"</b><br/><br/>
                  For suppliers, who want to get paid better, the supplier connect portal is an onboarding platform, that allows suppliers to onboard on 
                  their own using an automated self service tool. Providing a faster way to get on the network as well as increasing visibility to both buyer
                   and supplier. Unlike the current process which lacks automation and is prone to human error, our self service platform will remove manual processes,
                    allowing suppliers to onboard as quickly as possible. <br/><br/>
                    
                   

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

                <td>Together with the sales and implementation team, we identified key users and those who are currently struggling to onboard. I then interviewed customers to understand them better to build out personas, empathy maps and journey maps highlighting their pain points during onboarding and where we need to improve. I then presented these personas back to business to help build a common understanding of our customers and what we need to focus on during ideation.<br/><br/> 
                    Some of the main pain points were:<br/>
                      <ul>
                        <li>Not understanding the amount of work involved and full visibility of the process.</li>
                        <li>Too much back and forth via emails between the customer, supplier, project manager and implementation team.</li>
                        <li>The time taken to create the test file took too long as the amount of documentation was overwhelming to them.</li>
                        <br/><br/>
                      </ul>
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
              <td className="overline year"><h2>Journey Mapping</h2></td>

                <td>While mapping the customer journey I was able to highlight parts the journey where the customer was struggling.<br/><br/>
                Questionnaire - Some parts of the implementation require a more technical person to assist with the set-up instead of the account owner<br/><br/>
                Creating the test file - Documentation was overwhelming and caused delays in customer sending their first invoice scenario<br/><br/>
                Approval of PDF example - There are communication delays and too many errors on the final step of the implementation process<br/><br/>
                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/TN-Customer_Journey_Map.png"
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

                <td>To develop the customer journey I facilitated workshops with key project stakeholders across the business. Using our personas and 'How might we questions' to collaboratively brainstorm and wireframe ideas to help visualise the solution and features which will help onboard customers fast and start transacting.<br/><br/>
                eg: How might we help supplier complete their implementation within timelines?<br/><br/>
                Priming the user by showing the key steps and what they need to do<br/>
Highlight the value of joining the network on the first login/registration screen<br/>
Clear signposting and countdown clock to keep the user engaged and complete the steps quicker<br/>
Allow the customer to easily pick up where they left off with a dashboard of steps completed, activity log and dates/times to complete the next steps<br/>
Allow live chat between buyer and supplier to resolve issues quicker<br/><br/>
                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/TN-Ideation.jpg"
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

                <td>The last phase would be creating hi-fi prototypes and gathering customer feedback before handing it over for development. Customers agreed that the new process and 
                designs are a big improvement over the current offline process and had also suggested several improvements which we considered 
                and highlighted to include in the final designs.<br/><br/>

                <b>Customer Feedback (Positive)</b><br/><br/>
                "Process is a lot simplier, best to do it online. I can login and see were I am at and what needs to be done"<br/>
                "Big improvement, self service is the way forward"<br/>
                "I can see the minimum requirements to create an invoice file, within hours I can create a test file"<br/><br/>

                <b>Action points based on feedback</b><br/><br/>

                - Allow for exporting of data and images for presentations<br/>
                - Show start dates and ETA of when they will finish their implemantation<br/>
                - Explain why fields are mandatory, which are country or customer compliant<br/>
                - Customer asking to input too many requirements so need to add a query button on certain mandatory fields<br/>
                - Split the questionnaire into technical and AR questions<br/>
                - Supplier would like to notify the customer if they are having issues using livechat communication<br/><br/>
                </td>
                <td></td>
              </tr>

              <tr>
              <td className="overline year"><h2>Designs</h2></td>

                <td>Supplier reporting tool for accounts payable department to monitor supplier onboarding:<br/><br/>

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

                      <td>One of the biggest challenges was uncovering manual back-office processes which needed to be understood, scoped, and digitised. 
                  This took a lot of extra time and effort but was necessary to improve the end-user experience, solve key pain points and align with business goals 
                  to fully automate the onboarding process. <br/><br/> 
                  Another challenge was educating stakeholders to follow more agile and user-focused processes, by gathering 
                  user feedaback and presenting research insights we helped to remove bias and keep them involved along the journey. They see that a lack of research 
                  would also mean risks of doing re-work later on. Once the demonstrable product has been developed it will be released to a small number of customers 
                  to test, allowing us to present a minimal piloted project to gather more data and insights before a full release to all customers.<br/><br/>
                </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="overline year"><h2>Outcomes</h2></td>

                      <td>After a succesful beta we have launched the product to all customers.<br/><br/> 

<ul>
  <li>On average customers were able to complete their integration in 71 days, which was well within the initial target of 90 days.</li> 
  <li>Implementation agents noticed higher engagement rates and urgency from the supplier to complete their integration.</li>
</ul>

During beta we identified key product enhancements based on user feedback and analysis of our KPIs which included the following:<br/><br/> 

<ul>

  <li>Not enough steps are automated and require manual processes which are prone to error and delays</li>
  <li>Master map documentation could be further improved to make changes easier for the supplier</li>
  <li>Allowing Custom Map option to the journey to reduce the changes to the supplier ERP and onboard even faster</li>
  <li>Allowing sales to upsell current Web Form to start the self-service journey</li>
</ul>

<b>Next Step: Adding Custom Map to the journey</b><br/>
Mapping out the future customer journey and story mapping the fuctional requirements, helping to build alignment within the 
cross functional team and visualise key requirements.<br/><br/>

                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/TN-Custom-Map-1.jpg"
                        maxWidth={990}
                        quality={100}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Headshot"
                      />
                    </div><br/><br/> 

                    <div className="wrapper">
                      <StaticImage
                        className="img"
                        src="../images/TN-Custom-Map-2.jpg"
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
