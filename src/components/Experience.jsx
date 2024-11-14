import { Box, Divider, Flex, Heading, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text } from '@chakra-ui/react';

const experiences = [
  {
    id: "exp1",
    title: "Consultant - Insights & Data",
    company: "Sogeti",
    duration: "FEB 2022 - PRESENT",
    categories: [
      {
        name: "Strategic Leadership & Technical Oversight",
        items: [
          "Led the BigID Data Retention and Remediation (R&R) team, driving technical direction and seamless application integration.",
          "Explored BigID's capabilities in Retention, Remediation, and Data Cataloging, designing and executing a successful proof of concept to demonstrate their versatility and alignment with compliance requirements.",
          "Contributed significantly to PI Planning sessions, emphasizing proactive collaboration and future-proofing project directions.",
          "Capitalized on BigID training certifications to deepen product knowledge, enhancing team expertise and project outcomes.",
          "Authored and presented an effective implementation and communication plan, ensuring clarity and direction for all stakeholders."
        ]
      },
      {
        name: "Data Governance & Application Solutions",
        items: [
          "Spearheaded the creation and testing of retention policies, data remediation strategies, and cataloging workflows using BigID, optimizing configurations for business needs and compliance.",
          "Leveraged BigID Data Catalog to classify, organize, and enhance metadata quality, ensuring efficient data discovery.",
          "Utilized Informatica EDC to analyze data lineage, uncovering critical insights for data governance and efficiency improvements.",
          "Collaborated with stakeholders to integrate data lineage insights using Informatica EDC, enabling enhanced governance and compliance strategies.",
          "Crafted questionnaires for investigative activities, streamlining data source evaluations and ensuring accurate data lineage insights.",
          "Developed comprehensive training materials, runbooks, and intuitive flow diagrams for BigID R&R applications, improving team enablement, streamlining operations and ensuring workflow clarity.",
          "Presented product demonstrations for BigID R&R applications, showcasing solutions and project achievements to stakeholders."
        ]
      },
      {
        name: "Project Management & Collaboration",
        items: [
          "Managed Jira workflows, including sprints, features, and stories, driving team productivity and meeting project milestones.",
          "Delivered consistent weekly updates on R&R progress, fostering transparency in project status and deliverables.",
          "Initiated and hosted review and stand-up sessions, fostering a cohesive team environment and real-time project updates.",
          "Coordinated cross-team collaborations to ensure alignment of objectives and harmonious work processes."
        ]
      }
    ],
    skills: ["BigID", "Data Analytics", "SQL"]
  },
  {
    id: "exp2",
    title: "Data Management Engineer",
    company: "Pearson",
    duration: "MAY 2021 - FEB 2022",
    categories: [
      {
        name: "Data Extraction, Transformation, & Loading (ETL)",
        items: [
          "Provided data to support the academic and financial operations of the school; Extract, Transform and Load (ETL) student data from school data system to state reporting systems.",
          "Interpreted technical file specifications, export and import data to fulfill requirements, and document steps for replication and audit preparation."
        ]
      },
      {
        name: "Reporting & Documentation",
        items: [
          "Planned and organized target date/deadline timelines and tracking systems for all required reports and ensure timely submission of all reports.",
          "Created and maintained SQL Server Reports to accommodate state reporting and corporate requirements.",
          "Assisted with developing procedures and oversee implementation of procedures for reporting to external audiences including state agencies, funding sources, school boards, partner organizations, etc."
        ]
      },
      {
        name: "Data Management & Quality Assurance",
        items: [
          "Managed data sets with student, staff, and course information. Partner with school personnel and, program and district liaisons to monitor and track data for inconsistencies, research discovered inconsistencies, develop a plan for correction and future prevention.",
          "Maintained departmental process and procedure documentation."
        ]
      }
    ],
    skills: ["Data Analytics", "Python (Programming Language)", "SQL"]
  }
];

const Experience = () => {
  return (
    <Box id="experience" 
      p={100}
      px={{ base: "2rem", md: "12rem", lg: "28rem" }}
      bgGradient="linear(to-b, purple.100, purple.300)" 
      color="purple.900">
      <VStack spacing={4} align="start">
        <Flex align="center" justify="space-between" w="100%">
          <Heading as="h2" size="xl" paddingRight={8}>/.experience</Heading>
          <Divider 
            orientation="horizontal" 
            borderWidth="1px"
            borderColor="purple.800"
          />
        </Flex>
        <Accordion allowToggle allowMultiple>
          {experiences.map((exp) => (
            <AccordionItem key={exp.id}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text as="span" fontWeight="bold" fontSize="lg">{exp.title}</Text> @ 
                    <Text as="span" fontWeight="bold" fontSize="lg" ml={1}>{exp.company}</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text fontWeight="normal">{exp.duration}</Text>
                {exp.categories && (
                  <VStack align="start" spacing={2}>
                    {exp.categories.map((category, categoryIndex) => (
                      <Box key={categoryIndex}>
                        <Text fontWeight="bold">{category.name}</Text>
                        <VStack align="start" spacing={1}>
                          {category.items.map((desc, descIndex) => (
                            <Text key={descIndex} fontWeight="normal">▸ {desc}</Text>
                          ))}
                        </VStack>
                      </Box>
                    ))}
                  </VStack>
                )}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>
    </Box>
  );
};

export default Experience;
