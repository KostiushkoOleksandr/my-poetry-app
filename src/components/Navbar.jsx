import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <AppBar
            position="fixed"
            sx={{
                width: "100%",
                backgroundColor: navColour ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(5px)",
                boxShadow: "none",
                transition: "background-color 0.3s",
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-start" }}>
                    {/* Логотип або назва */}
                    {/* <img src={logo} alt="brand" style={{ width: "40px", marginRight: "10px" }} /> */}
                </Box>

                <Box sx={{ display: "flex", gap: "20px" }}>
                    <Button
                        component={Link}
                        to="/"
                        onClick={() => updateNavbar(false)}
                        sx={{ color: "white", fontSize: "1.2rem" }}
                    >
                        Home
                    </Button>

                    <Button
                        component={Link}
                        to="/about"
                        onClick={() => updateNavbar(false)}
                        sx={{ color: "white", fontSize: "1.2rem" }}
                    >
                        About
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
