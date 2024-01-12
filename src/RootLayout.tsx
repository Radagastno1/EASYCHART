import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import "./index.css";

export default function RootLayout() {
  return (
    <div className="flex flex-col h-screen">
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          height: "3rem",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              color: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <NavLink to="/">
                <Typography
                  variant="h4"
                  className="flex flex-1 justify-center"
                  style={{
                    color: "black",
                    fontWeight: "light",
                    letterSpacing: "1px",
                  }}
                >
                  EASY CHART
                </Typography>
              </NavLink>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <main className="bg-neutral-900 flex flex-1 flex-col">
        <Outlet />
      </main>

      <footer className="flex bg-neutral-900"></footer>
    </div>
  );
}
