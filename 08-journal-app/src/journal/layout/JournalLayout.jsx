import { Box, Toolbar } from "@mui/material"
import { Navbar, SideBar } from "../components";

const drawerWidth = 240;
export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex'}} className="animete__animeted animate__fadeIn animete__faster">
        { <Navbar drawerWidth={ drawerWidth }/>}
        { <SideBar drawerWidth={ drawerWidth } />}

        <Box
          component='main'
          sx={{ flexGrow: 1, p: 3}}
        >
          {/* Toolbar */}
          <Toolbar />

          { children }
        </Box>
    </Box>
  )
}