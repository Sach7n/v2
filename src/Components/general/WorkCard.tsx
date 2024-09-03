import Paper from "@mui/material/Paper";
import data from "./data";
import WorkCard1 from "./WorkCard1";

export default function MediaCard() {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "row",
        background: "transparent",
        boxShadow: "none",
      }}
    >
      {data && data.map((item, index) => <WorkCard1 {...item} key={index} />)}
    </Paper>
  );
}
