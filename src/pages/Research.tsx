import type { FunctionComponent } from 'react';
import WindowCard from '../components/general/WindowCard';
import TextLink from '../components/general/TextLink';
import CollapsibleSection from '../components/general/CollapsibleSection';
import Panel from '../components/general/Panel';

type ResearchProps = object;

const researchTopics = [
  {
    title: "Search-Based Software Engineering",
    description: "Using search-based techniques to solve complex software engineering problems, such as test case generation and software repair.",
    icon: "🔍",
    members: "Everyone in the group!"
  },
  {
    title: "Software Testing",
    description: "Automated testing techniques, test case generation, and test optimization for modern software systems.",
    icon: "🧪",
    members: "Mark Harman, Maria Kechagia, Justyna Petke, Federica Sarro, Dario Asprone"
  },
  {
    title: "Program Repair",
    description: "Automatically fixing bugs in software systems using search-based machine learning techniques.",
    icon: "🔧",
    members: "Mark Harman, Maria Kechagia, Carol Hanna, Justyna Petke, Federica Sarro"
  },
  {
    title: "Project Management",
    description: "Using data analytics and machine learning to improve software project management, including effort estimation and risk prediction.",
    icon: "📊",
    members: "Mark Harman, Maria Kechagia, Carol Hanna, Justyna Petke, Federica Sarro"
  },
  {
    title: "Genetic Improvement",
    description: "Using search-based techniques to automatically improve software systems for performance and other qualities.",
    icon: "🧬",
    members: "Mark Harman, Justyna Petke, Federica Sarro, Carol Hanna"
  },
  {
    title: "Predictive Models for SE",
    description: "Developing predictive models to forecast software quality, maintainability, and other key metrics using machine learning.",
    icon: "📈",
    members: "Federica Sarro"
  },
  {
    title: "Software Fairness",
    description: "Developing predictive models to forecast software quality, maintainability, and other key metrics using machine learning.",
    icon: "⚖️",
    members: "Mark Harman, Federica Sarro"
  },
  {
    title: "Software Optimisation",
    description: "Applying machine learning to solve software engineering challenges including code generation and bug prediction.",
    icon: "⚙️",
    members: "Mark Harman, Maria Kechagia, Justyna Petke, Federica Sarro, Mar Zamorano"
  }
];

// const researchProjects = [
//   {
//     title: "Bias Mitigation Survey",
//     paperName: "Bias Mitigation for Machine Learning Classifiers: A Comprehensive Survey, Journal on Responsible Computing",
//     venue: "Journal on Responsible Computing",
//     description: "This paper provides a comprehensive survey of bias mitigation methods for achieving fairness in Machine Learning (ML) models. We collect a total of 341 publications concerning bias mitigation for ML classifiers. These methods can be distinguished based on their intervention procedure (i.e., pre-processing, in-processing, post-processing) and the technique they apply. We investigate how existing bias mitigation methods are evaluated in the literature. In particular, we consider datasets, metrics and benchmarking. Based on the gathered insights (e.g., What is the most popular fairness metric? How many datasets are used for evaluating bias mitigation methods?), we hope to support practitioners in making informed choices when developing and evaluating new bias mitigation methods.",
//     links: [
//       { text: "Preprint", url: "https://solar.cs.ucl.ac.uk/pdf/hort2023fairness.pdf" },
//       { text: "Online Appendix", url: "https://docs.google.com/spreadsheets/d/1kOmbKLMiFgHRSXvgM-O8OW4YKeDIGN0cPPeCGQOMnnA/edit?gid=0#gid=0" },
//     ],
//     authors: [
//       "Max Hort",
//       "Zhenpeng Chen",
//       "Jie Zhang",
//       "Federica Sarro",
//       "Mark Harman",
//     ],
//     acknolwedgement: "EPIC",
//   },
//   {
//     title: "Fairea",
//     paperName: "A Model Behaviour Mutation Approach to Benchmarking Bias Mitigation Methods",
//     venue: "ESEC/FSE 2021",
//     description: "The increasingly wide uptake of Machine Learning (ML) has raised the significance of the problem of tackling bias (i.e., unfairness), making it a primary software engineering concern. In this paper, we introduce Fairea, a model behaviour mutation approach to benchmarking ML bias mitigation methods. We also report on a largescale empirical study to test the effectiveness of 12 widely-studied bias mitigation methods. Our results reveal that, surprisingly, bias mitigation methods have a poor effectiveness in 49% of the cases. In particular, 15% of the mitigation cases have worse fairness-accuracy trade-offs than the baseline established by Fairea; 34% of the cases have a decrease in accuracy and an increase in bias. Fairea has been made publicly available for software engineers and researchers to evaluate their bias mitigation methods.",
//     links: [
//       { text: "Preprint", url: "https://solar.cs.ucl.ac.uk/pdf/hort2021fairea.pdf" },
//       { text: "Replication Package", url: "https://github.com/maxhort/Fairea" },
//     ],
//     authors: [
//       "Max Hort",
//       "Jie Zhang",
//       "Federica Sarro",
//       "Mark Harman",
//     ],
//     acknolwedgement: "EPIC",
//   },
//   {
//     title: "Learning From Mistakes",
//     paperName: "Machine Learning Enhanced Human Expert Effort Estimates",
//     venue: "IEEE TSE",
//     description: "Learning From Mistakes (LFM) is a novel approach to predictive modeling for software engineering. The core idea underlying our proposal is to automatically learn from past estimation errors made by human experts, in order to predict the characteristics of their future misestimates, therefore resulting in improved future estimates. We show the feasibility of LFM by investigating whether it is possible to predict the type, severity and magnitude of errors made by human experts when estimating the development effort of software projects, and whether it is possible to use these predictions to enhance future estimations. To this end we conduct a thorough empirical study investigating 402 maintenance and new development industrial software projects. The results of our study reveal that the type, severity and magnitude of errors are all, indeed, predictable. Moreover, we find that by exploiting these predictions, we can obtain significantly better estimates than those provided by random guessing, human experts and traditional machine learners in 31 out of the 36 cases considered (86%), with large and very large effect sizes in the majority of these cases (81%). This empirical evidence opens the door to the development of techniques that use the power of machine learning, coupled with the observation that human errors are predictable, to support engineers in estimation tasks rather than replacing them with machine-provided estimates.",
//     links: [
//       { text: "Preprint", url: "http://www0.cs.ucl.ac.uk/staff/F.Sarro/resource/papers/TSE2020_LFM.pdf" },
//       { text: "Publisher Link", url: "https://ieeexplore.ieee.org/abstract/document/9272884" },
//       { text: "Appendix", url: "https://solar.cs.ucl.ac.uk/os/lfm/LFM-Appendix.pdf" },
//     ],
//     authors: [
//       "Federica Sarro",
//       "Rebecca Moussa",
//       "Alessio Petrozziello",
//       "Mark Harman", ,
//     ],
//     acknolwedgement: "EPIC",
//   },
// ]

const Research: FunctionComponent<ResearchProps> = () => {
  return (
    <div className='content'>
      <div className='page-title'>Research</div>
      <WindowCard title='intro.txt'>
        The SOLAR group is based at{' '}
        <TextLink
          url='https://www.ucl.ac.uk/'
          text='University College London'
        />{' '}
        (
        <TextLink
          url='https://www.ucl.ac.uk/computer-science/'
          text='Department of Computer Science'
        />
        , <TextLink url='https://www.ucl.ac.uk/crest/' text='CREST' />) and is
        led by{' '}
        <TextLink
          url='http://www0.cs.ucl.ac.uk/staff/F.Sarro/'
          text='Prof. Federica Sarro'
        />
        .
        <p>
          Our research pushes the boundaries of automated approaches in Software
          Engineering, especially in the areas of software development, testing,
          repair, optimisation and analytics.
        </p>
        {/* We carry out cutting-edge research on Machine Learning for Software Engineering and Software Engineering for Machine Learning, with a focus on automatic software testing, repair, and optimisation, software fairness, and predictive analytics for project management and quality assurance.  */}
        <p>
          Our group has strong expertise in empirical software engineering,
          search-based software engineering, software analytics, software
          fairness, genetic improvement of software, software testing and
          repair, project managment, machine learning for software engineering,
          and software engineering for machine learning.
        </p>
        <p>
          We have obtained several international awards and generous{' '}
          <TextLink url='funding.html' text='funding' /> for our research, and
          have also collaborated with both large software companies, including
          Facebook and Google, and start-ups.
        </p>
        <p>
          We promote and embrace open science by sharing whenever possible the artefacts accompanying our{' '}
          <TextLink url='/publications' text='research papers' /> and {' '}
          <TextLink
            url='https://www.youtube.com/channel/UCZjGXjbG8p581_BleLioBFA'
            text='talks'
          />
          .
        </p>
      </WindowCard>

      <br />

      <CollapsibleSection id="research-projects" title="Our Research Areas" open={true}>
        <div className="research-grid">
          {researchTopics.map((topic) => (
            <Panel>
              <div className="topic-icon">{topic.icon}</div>
              <div className="panel-title">{topic.title}</div>
              <b>Members:</b> {topic.members}
              {/* <br />
              <b>Description:</b> {topic.description} */}
            </Panel>
          ))}
        </div>
      </CollapsibleSection>

      {/* <CollapsibleSection id="research-topics" title="Projects" open={true}>
        <div className="research-grid">
          {researchProjects.map((project) => (
            <Panel url="" icon="expand">
              <div className="panel-title">{project.title}</div>
              <b>Paper:</b> {project.paperName} ({project.venue})
              <br />
              *Add modal here*
            </Panel>
          ))}
        </div>
      </CollapsibleSection> */}


    </div>
  );
};

export default Research;
