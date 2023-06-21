import { Box } from ".././utils/uiCore";
import { ReactNode } from "react";
import { useStyles } from "./style";
import { Header } from "./header";

interface LayoutProps {
  children: ReactNode;
  heading?:string
}

export const Layout = ({ children,heading }: LayoutProps) => {
const classes = useStyles()

  return (
    <Box className={classes.layoutMain} >
      <Header heading={heading}/>
      {children}
    </Box>
  );
};
