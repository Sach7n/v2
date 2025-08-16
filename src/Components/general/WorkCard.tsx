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
        justifyContent: "center",
      }}
    >
      {data &&
        data.map((item, index) => (
          <WorkCard1
            key={index}
            {...item}
            desc={item.shortDesc || item.detailedDesc} // Map to desc
            link={item.live} // Map to link (adjust property name as needed)
          />
        ))}
    </Paper>
  );
}
