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
    title: "In A Pulse",
    logo: logo1,
    description: ["Working on a cross-platform On-Demand Delivery app that provides same-day delivery service",
      "Build REST APIs and GraphQL APIs for the back-end, Develop front-end using React and Material UI",
      "Integrate APIs like Stripe, SendGrid Email, Google Maps, Twilio SMS, Google & Facebook Sign in",
      "MailChimp, and Geocoding API in the app, Was a part of a team where back-end was developed using Nodejs",
      "AWS Amplify, DynamoDB, API Gateway, AppSync, Cognito, AWS Lambda, and S3, Worked in an agile environment",
      "Collaborated with the business team and created functional requirements for the developers"],
    techs: "Reactjs, Material UI, Nodejs, Express, React Native, DynamoDB, AWS Amplify, Twilio, Stripe",
    time: "March 2022 -"
  },

  {
    title: "Benchmark IT services",
    logo: bits,
    description: ["Designed and developed Front end for the company, mainly the login page, sign up page and dashboards",
      "I was involved with UI/UX team to develop components with Reactjs, HTML and Pure CSS (Sometime Bootstrap, Material UI) and forward it to the full stack developers,so they do not have to worry about pixel perfection.",
      "The company used agile methodology and required attention to detail because performance was the key element. We used cypress.io for testing.",
      "Developed pixel perfect cross browser layouts.",
      "Developed JavaScript required to make best UI/UX experience.",
      "Developed responsive layout to meet current web standards.",
      "Worked in a team to design the schema for the backend and created a database using Node and Mongo"],
    techs: "Reactjs, Redux, Typescript, Bootstrap, Nodejs, Express, MongoDB, Vults,Digital Ocean",
    time: "July 2019 - March 2022"
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
