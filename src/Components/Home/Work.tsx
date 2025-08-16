import { useMediaQuery, useTheme, Container } from "@mui/material";
import Text from "../general/Text";
import { motion } from "framer-motion";
import WorkGrid from "../general/WorkGrid";
import WorkExpandable from "../general/WorkExpandable";
import WorkCarousel from "../general/WorkCarousel";
// Import the old components as fallback
import WorkCard from "../general/WorkCard";
import WorkSwiper from "../general/WorkSwiper";

type DisplayMode = "modal" | "expandable" | "carousel" | "legacy";

interface WorkProps {
  displayMode?: DisplayMode;
}

export default function Work({ displayMode = "legacy" }: WorkProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const renderWorkComponent = () => {
    switch (displayMode) {
      case "modal":
        return <WorkGrid />;
      case "expandable":
        return <WorkExpandable />;
      case "carousel":
        return <WorkCarousel />;
      case "legacy":
      default:
        // Use your original components as fallback
        return isMobile ? <WorkSwiper /> : <WorkCard />;
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 6, md: 12 } }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <Text title="Featured Projects" center={isMobile} />
        </motion.div>

        <motion.div variants={itemVariants}>{renderWorkComponent()}</motion.div>
      </motion.div>
    </Container>
  );
}
