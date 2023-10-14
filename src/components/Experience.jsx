import { Box, Divider, Flex, Heading, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text } from '@chakra-ui/react';

const experiences = [
  {
    id: "exp1",
    title: "Consultant - Insights & Data",
    company: "Sogeti",
    duration: "FEB 2022 - PRESENT",
    categories: [
      {
        name: "Technical Leadership & Strategy",
        items: [
          "Led the BigID Data Retention and Remediation (R&R) team for the client, driving the technical direction and ensuring seamless application integration.",
          "Contributed significantly to PI Planning sessions, emphasizing proactive collaboration and future-proofing project directions.",
          "Thoroughly investigated BigID's R&R capabilities, providing critical insights into application potential.",
          "Designed and executed a successful proof of concept highlighting the versatility of R&R applications within BigID."
        ]
      },
      {
        name: "Project Management & Reporting",
        items: [
          "Managed Jira sprints, features, and stories, driving team productivity and meeting project milestones.",
          "Consistently documented and communicated weekly R&R updates, ensuring transparency in project progression.",
          "Initiated and hosted review and stand-up sessions, fostering a cohesive team environment and real-time project updates.",
          "Fostered collaborations with other teams, ensuring aligned objectives and harmonious work processes."
        ]
      },
      {
        name: "Application Development & Testing",
        items: [
          "Spearheaded the creation and testing of retention policies and data remediation strategies, ensuring optimal configuration for business needs.",
          "Developed comprehensive training material and runbook for R&R applications in BigID, elevating the knowledge base and streamlining operations.",
          "Created intuitive flow diagrams for BigID R&R applications, ensuring clarity in workflow execution.",
          "Developed and presented product demonstrations for BigID R&R applications, showcasing project achievements to stakeholders."
        ]
      },
      {
        name: "Training & Communication",
        items: [
          "Capitalized on BigID training modules and certifications to deepen product knowledge, enhancing team expertise and project outcomes.",
          "Authored and presented an effective implementation and communication plan, ensuring clarity and direction for all stakeholders.",
          "Crafted questionnaires for investigative activities, streamlining data source evaluations."
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
