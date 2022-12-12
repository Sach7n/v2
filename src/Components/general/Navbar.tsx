import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import { Link } from "react-scroll";
import pdf from "./New_frontend_v2.pdf"

interface LinkTabProps {
  label?: string;
  href?: string;
}

interface LinkProps {
  activeClass?: any
  to: any
  spy?: any
  smooth?: any
  offset?: any
  duration?: any
  children?: any
  handleClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

type NavTabs = {
  name: string;
  link: any;
}

const NavList: NavTabs[] = [
  { name: "Home", link: "home" },
  { name: "Experience", link: "experience" },
  { name: "Work", link: "work" },
]

function LinkTab(props: LinkProps) {
  return (
    <Box
      sx={{
        padding: "1% 2% 0 2%",
        "> a": {
          color: "info.main",
          '&:hover': {
            color: "info.dark",
            cursor: "pointer"

          }
        },

      }}>
      <Link {...props}/>
    </Box>

  );
}

export default function NavTabs() {

  return (
    <Box sx={{ width: '100%', position: "fixed" }}>
      <Tabs centered>
        {NavList.map((item, index) =>
          <LinkTab
            key={index}
            activeClass="active"
            to={item.link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>{item.name}</LinkTab>
        )}
        <Box sx={{
          padding: "1% 2%",
           "> a": {
            color: "info.main",
            '&:hover': {
              color: "info.dark",
              cursor: "pointer",
              textDecoration:"underline"
            }
          },
        }}><a href={pdf} target="_blank" rel="noopener noreferrer">Resume</a></Box>
      </Tabs>
    </Box>
  );
}