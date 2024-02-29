import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExperienceCard from './ExperienceCard';
import logo1 from "../../images/logo.png"
import bits from "../../images/bits.png"

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
//added type
type experience = {
  title: string,
  logo: any,
  description: any,
  techs: string,
  time: string
}
const experience: experience[] = [
  {
    title: "Royal Bank of Canada",
    logo: logo1,
    description: ["Specialized in crafting validation rules in Node.js, ensuring the integrity of incoming requests through intricate business logic. Implemented logic for client account relationships, client-client relationships, and various account types across different client and account categories.",
      "Played a pivotal role in the creation of dynamic queries tailored to distinct business needs, augmenting the system's flexibility through the power of Node.js.",
      "Contributed significantly to the orchestration of back-end logic, emphasizing validation, interpolation, query organization, and optimization of data retrieval processes.",
      "Leveraged Node.js for coding, executed SQL queries for database interactions, and upheld code quality with thorough Jest test cases for each module prior to initiating pull requests (PRs).",
      "Successfully converted a multitude of stored procedures to JavaScript logic, streamlining database interactions and amplifying the overall system efficiency.",
      "Conducted end-to-end testing using Postman, validating the seamless integration of diverse back-end components."],
    techs: "Nodejs, GraphQL, SQL, Express, JEST, Helios, React",
    time: "March 2022 - February 2024"
  },

  {
    title: "Telus Mobility Corporation",
    logo: bits,
    description: ["Played a crucial role in the development of responsive and intuitive user interfaces using ReactJS and Redux for two distinct telecom projects.",
      "Contributed significantly to an End-to-End project, creating dashboards and views within a stand-alone application for telecom agents. Incorporated ReactJS and Redux to manage state efficiently.",
      "Played an integral role in a Micro-frontends project, contributing to the development of multiple standalone micro front ends that seamlessly integrated into a main shell application. Utilized ReactJS and Redux to modularize features and ensure a consistent user experience.",
      "Ensured code quality and functionality through comprehensive testing, employing JEST to validate ReactJS components in both projects."],
    techs: "Reactjs, Redux, Typescript, Bootstrap, Nodejs, Express, MongoDB, Vults,Digital Ocean",
    time: " January 2020 - March 2022"
  }

]
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'info.dark', color: "info.main" }}>
          <Tabs value={value} onChange={handleChange}
            indicatorColor="secondary" textColor='inherit' aria-label="basic tabs example" centered>
            {experience.map((items, index) => <Tab key={index} label={items.title} {...a11yProps(index)} />)}
          </Tabs>
        </Box>
        <Box >
          {experience.map((items, index) =>
            
            <TabPanel key={index} value={value} index={index} >
              <ExperienceCard
                  logo={items.logo}
                  description={items.description}
                  techs={items.techs}
                  time={items.time}
                />
             </TabPanel>
          )}
        </Box>
      </Box>

    </>
  );
}
