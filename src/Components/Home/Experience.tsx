import Text from "../general/Text";
import ExperienceTabs from "../general/ExperienceTabs";
import { Container } from "@mui/material";
import { motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/material";

export default function Experience() {
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

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <Text title="Where I've Worked" numbered center={isMobile} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ExperienceTabs />
        </motion.div>
      </motion.div>
    </Container>
  );
}
