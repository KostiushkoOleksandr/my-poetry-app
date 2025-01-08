import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                width: "100%", // На всю ширину екрана
                backgroundColor: "rgba(255, 255, 255, 0.8)", // Прозрачный светлый фон
                color: "#212121", // Тёмный текст для контраста
                py: 3,
                px: 2,
                position: "fixed", // Прижимаємо футер до низу
                bottom: 0, // Відстань від низу екрана
                left: 0, // Вирівнювання до лівого краю
                backdropFilter: "blur(10px)", // Матовий ефект
                boxShadow: "0 -2px 6px rgba(0, 0, 0, 0.1)", // Легкая тень
            }}
        >
            <Grid container spacing={3} alignItems="center">
                {/* Left Section */}
                <Grid item xs={12} sm={4} textAlign="center">
                    <Typography variant="h6">Oleksandr Kostiushko</Typography>
                </Grid>

                {/* Center Section */}
                <Grid item xs={12} sm={4} textAlign="center">
                    <Typography variant="body1">Copyright © {year} AlexKost</Typography>
                </Grid>

                {/* Right Section (Social Icons) */}
                <Grid item xs={12} sm={4} textAlign="center">
                    <Box>
                        <IconButton
                            href="https://github.com/KostiushkoOleksandr"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: "#212121" }} // Тёмный цвет для иконок
                        >
                            <GitHub />
                        </IconButton>
                        <IconButton
                            href="https://www.linkedin.com/in/oleksandr-kostiushko-591677222/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: "#212121" }}
                        >
                            <LinkedIn />
                        </IconButton>
                        <IconButton
                            href="https://www.instagram.com/alexkost_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: "#212121" }}
                        >
                            <Instagram />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;
