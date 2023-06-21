import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { getLocalStorageItem, removeLocalStorage } from "../../utils/appUtils";
import { useNavigate } from "react-router-dom";
import { paths } from "../../path/path";

interface HeaderProps {
  heading?: string;
}

export const Header = ({ heading }: HeaderProps) => {
  const userData = getLocalStorageItem("user");
  const navigate = useNavigate()

  const handleClick = () => {
    if (userData) {
      removeLocalStorage();
      window.location.reload();
    }
  };

  const handleNavigate = (path:string)=>{
    navigate(path)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {heading && heading}
          </Typography>
          <Button onClick={()=>handleNavigate(paths.list_order)} color="inherit" sx={{ flexGrow: 1 }}>
            Your Orders
          </Button>
          <Button onClick={()=>handleNavigate(paths.add_order)}color="inherit" sx={{ flexGrow: 5 }}>
            Add Order
          </Button>
          <Button onClick={handleClick} color="inherit">
            {userData ? "Logout" : ""}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
