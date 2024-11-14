import { Box, Divider, Heading, Text, VStack, Flex, List, ListItem, ListIcon, Link, Grid } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const skills = [
  {
    id: "1",
    skill: "BigID"
  },
  {
    id: "2",
    skill: "SQL"
  },
  {
    id: "3",
    skill: "Python"
  }
];

const expertise = [
  {
    id: "4",
    expertise: "Informatica EDC"
  },
  {
    id: "5",
    expertise: "Data Analytics"
  },
  {
    id: "6",
    expertise: "Data Science"
  }
];

const AboutMe = () => {
  return (
    <Box id="about"
    px={{ base: "2rem", md: "12rem", lg: "28rem" }}
    bg="purple.100" 
    color="purple.900"
    py={100}>
      <VStack spacing={4} align="start">
        <Flex align="center" justify="space-between" w="100%">
          <Heading as="h2" size="xl" paddingRight={8}>/.about.me</Heading>
          <Divider 
            orientation="horizontal" 
            borderWidth="1px"
            borderColor="purple.800"
          />
        </Flex>
        <Text>
          Currently I am a Consultant within the <Link href="https://www.us.sogeti.com/what-we-do/insights--data/" bg="purple.300" borderRadius="md" px={1} _hover={{ color: 'white' }} isExternal>Insights & Data</Link> practice at <Link href="https://www.us.sogeti.com/" bg="purple.300" borderRadius="md" px={1} _hover={{ color: 'white' }} isExternal>Sogeti</Link>. In this capacity, I take on a pivotal role for our client as the Tech Lead for the BigID Data Retention and Remediation team. My responsibilities encompass overseeing the technical aspects of application development and deployment, ensuring alignment with business requirements, leading the team in troubleshooting and refining solutions, and liaising with stakeholders to guarantee the applications meet and exceed expectations.
        </Text>
        <Text>
          Here are my skills and areas of expertise:
        </Text>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
            <List spacing={2}>
              {skills.map((s) => (
                <ListItem key={s.id}>
                  <ListIcon as={CheckCircleIcon} color="purple.500" />
                  {s.skill}
                </ListItem>
              ))}
            </List>
            <List spacing={2}>
              {expertise.map((e) => (
                <ListItem key={e.id}>
                  <ListIcon as={CheckCircleIcon} color="purple.500" />
                  {e.expertise}
                </ListItem>
              ))}
            </List>
        </Grid>
      </VStack>
    </Box>
  );
};

export default AboutMe;
