import React from "react";
import { Box, Typography, Container } from "@mui/material";
import NavBar from "../components/Navbar.jsx";

function About() {
    return (
        <Container
            maxWidth="md"
            sx={{
                marginTop: { xs: "80px", sm: "100px" },  // Адаптуємо відступ для мобільних і більших екранів
                textAlign: "center",
                paddingX: { xs: "16px", sm: "0" } // Додаємо відступи зліва та справа для мобільних
            }}
        >
            <NavBar />
            <Typography variant="h3" component="h1" gutterBottom>
                Про мене
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    fontSize: { xs: "1rem", sm: "1.2rem" }, // Менший шрифт для мобільних
                    marginTop: "20px",
                    lineHeight: "1.8"
                }}
            >
                Привіт! Я — Олександр Костюшко, програміст та автор поезії.
                Почав писати вірші, надихнувшись життєвими подіями та емоціями,
                які не завжди можна висловити простими словами. Для мене поезія стала
                способом передати душевний стан, розповісти про мрії, надії та враження від навколишнього світу.
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    fontSize: { xs: "1rem", sm: "1.2rem" }, // Менший шрифт для мобільних
                    marginTop: "20px",
                    lineHeight: "1.8"
                }}
            >
                Моя мета — надихати інших, ділитися емоціями через творчість
                та поєднувати це з технічними досягненнями у сфері IT. Дякую, що завітали на цю сторінку,
                сподіваюся, ви знайдете тут щось, що зворушить вашу душу.
            </Typography>
        </Container>
    );
}

export default About;
