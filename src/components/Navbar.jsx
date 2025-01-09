import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
    const [navColour, updateNavbar] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Перевірка на мобільний пристрій

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
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: isMobile ? "0 10px" : "0 20px",
                }}
            >
                {/* Текст "AlexKost-poetry" */}
                <Typography
                    variant="h6"
                    sx={{
                        position: isMobile ? "relative" : "absolute",
                        left: isMobile ? "0" : "50%",
                        transform: isMobile ? "none" : "translateX(-50%)",
                        color: "white",
                        fontSize: isMobile ? "1.2rem" : "1.5rem",
                        fontWeight: "bold",
                        textAlign: isMobile ? "left" : "center",
                    }}
                >
                    AlexKost-Poetry
                </Typography>

                {/* Кнопки навігації */}
                <Box
                    sx={{
                        display: "flex",
                        gap: isMobile ? "10px" : "20px",
                        justifyContent: "flex-end",
                        marginLeft: "auto", // Додаємо автоматичний відступ, щоб кнопки завжди були праворуч
                    }}
                >
                    <Button
                        component={Link}
                        to="/"
                        onClick={() => updateNavbar(false)}
                        sx={{
                            color: "white",
                            fontSize: isMobile ? "0.9rem" : "1.2rem",
                            padding: isMobile ? "5px 10px" : "10px 20px",
                        }}
                    >
                        Home
                    </Button>

                    <Button
                        component={Link}
                        to="/about"
                        onClick={() => updateNavbar(false)}
                        sx={{
                            color: "white",
                            fontSize: isMobile ? "0.9rem" : "1.2rem",
                            padding: isMobile ? "5px 10px" : "10px 20px",
                        }}
                    >
                        About
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
