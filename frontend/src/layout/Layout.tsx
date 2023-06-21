import { Box } from ".././utils/uiCore";
import { ReactNode } from "react";
import { useStyles } from "./style";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
const classes = useStyles()

  return (
    <Box className={classes.layoutMain} >
      {children}
    </Box>
  );
};
