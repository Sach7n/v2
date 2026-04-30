import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type experience = {
  title: string;
  company: string;
  logo?: any;
  description: string[];
  techs: string;
  time: string;
};

const experience: experience[] = [
  {
    title: "Full Stack Developer",
    company: "Pay.com.au",
    description: [
      "Implemented comprehensive payment processing flows, including PayID, PayTo, and international FX payments, to expand the platform's financial services offering.",
      "Integrated a custom 3D Secure (3DS) authentication service to enhance transaction security and minimize fraudulent card activity.",
      "Streamlined complex financial operations by building a reconciliation system to ensure accurate accounting and transaction matching across all payment methods.",
      "Wrote automated cron jobs for efficient batch processing of payments and refunds, significantly improving operational speed and reliability.",
      "Collaborated with product and compliance teams to ensure all payment solutions met industry standards and regulatory requirements.",
    ],
    techs: "React, Node.js, Express, PostgreSQL, MongoDB, AWS",
    time: "May 2024 - Present",
  },
  {
    title: "Full Stack Developer",
    company: "Royal Bank of Canada",
    // logo: logo1,
    description: [
      "Engineered validation rules in Node.js to enforce complex business logic across client account relationships and account types, ensuring integrity of all incoming requests.",
      "Built dynamic query builders tailored to distinct business requirements, significantly improving system flexibility and reducing ad-hoc data access patterns.",
      "Designed and owned back-end logic orchestration across validation, interpolation, and query optimization layers, reducing data retrieval latency across core workflows.",
      "Migrated multiple stored procedures to JavaScript logic, eliminating database-level coupling and improving overall system efficiency by 35%.",
      "Established end-to-end testing standards using Postman collections, validating integration across all back-end service boundaries.",
    ],
    techs: "Node.js, GraphQL, SQL, Express, Jest, React, TypeScript",
    time: "March 2022 - February 2024",
  },
  {
    title: "Frontend Developer",
    company: "Telus Mobility Corporation",
    // logo: bits,
    description: [
      "Built responsive, high-performance UIs in React and Redux across two distinct telecom platforms, each serving 10,000+ internal agents.",
      "Engineered comprehensive dashboards and agent-facing views within a standalone application, handling complex state and real-time data requirements.",
      "Architected micro-frontend modules that composed into a shared shell application, enabling independent deployment and team ownership across feature areas.",
      "Maintained 90%+ test coverage across all React components using Jest, enforcing a test-first standard adopted across the wider front-end team.",
      "Partnered with UX/UI designers on pixel-accurate implementations that drove a 25% improvement in key user experience metrics.",
    ],
    techs: "React, Redux, TypeScript, Bootstrap, Node.js, Express, MongoDB",
    time: "January 2020 - March 2022",
  },
];

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`experience-tabpanel-${index}`}
      aria-labelledby={`experience-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `experience-tab-${index}`,
    "aria-controls": `experience-tabpanel-${index}`,
  };
}

export default function ExperienceTabs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          minHeight: { md: "400px" },
        }}
      >
        {/* Tabs */}
        <Box
          sx={{
            borderRight: { md: 1 },
            borderBottom: { xs: 1, md: 0 },
            borderColor: theme.palette.primary.main,
            minWidth: { md: "200px" },
            mb: { xs: 2, md: 0 },
          }}
        >
          <Tabs
            orientation={isMobile ? "horizontal" : "vertical"}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons={isMobile ? "auto" : false}
            value={value}
            onChange={handleChange}
            aria-label="Experience tabs"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: theme.palette.primary.main,
                width: isMobile ? "100%" : "2px",
                height: isMobile ? "2px" : "auto",
              },
              "& .MuiTab-root": {
                textAlign: "left",
                alignItems: "flex-start",
                minHeight: "48px",
                color: theme.palette.text.secondary,
                fontFamily: theme.typography.fontFamily,
                fontSize: "0.9rem",
                fontWeight: 500,
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: theme.palette.primary.main,
                  backgroundColor: `${theme.palette.primary.main}08`,
                },
                "&.Mui-selected": {
                  color: theme.palette.primary.main,
                  backgroundColor: `${theme.palette.primary.main}10`,
                },
              },
            }}
          >
            {experience.map((exp, index) => (
              <Tab
                key={index}
                label={exp.company}
                {...a11yProps(index)}
                sx={{
                  justifyContent: "flex-start",
                  px: 3,
                  py: 2,
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Tab Panels */}
        <Box sx={{ flex: 1, pl: { md: 4 } }}>
          {experience.map((exp, index) => (
            <TabPanel key={index} value={value} index={index}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Job Title and Company */}
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {exp.title}{" "}
                  <Box
                    component="span"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 500,
                    }}
                  >
                    @ {exp.company}
                  </Box>
                </Typography>

                {/* Time Period */}
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontFamily: theme.typography.fontFamily,
                    mb: 3,
                    fontSize: "0.9rem",
                  }}
                >
                  {exp.time}
                </Typography>

                {/* Job Description */}
                <Box component="ul" sx={{ pl: 0, m: 0 }}>
                  {exp.description.map((item, descIndex) => (
                    <Box
                      component="li"
                      key={descIndex}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        mb: 2,
                        listStyle: "none",
                        "&::before": {
                          content: '"▹"',
                          color: theme.palette.primary.main,
                          fontSize: "1.2rem",
                          mr: 2,
                          mt: 0.5,
                          fontFamily: theme.typography.fontFamily,
                          flexShrink: 0,
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.6,
                          fontSize: "1rem",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Technologies */}
                <Box sx={{ mt: 3 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontFamily: theme.typography.fontFamily,
                      fontSize: "0.9rem",
                      fontWeight: 500,
                    }}
                  >
                    Technologies: {exp.techs}
                  </Typography>
                </Box>
              </motion.div>
            </TabPanel>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
