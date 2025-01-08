import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { ref, onValue } from "firebase/database";
import {
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "./Footer.jsx";
import Navbar from "../components/Navbar.jsx";

function Home() {
    const [poems, setPoems] = useState([]);
    const [expanded, setExpanded] = useState(false); // Состояние для отслеживания активного аккордеона

    useEffect(() => {
        const poemsRef = ref(database, "poems");
        onValue(poemsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const loadedPoems = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setPoems(loadedPoems);
            } else {
                setPoems([]);
            }
        });
    }, []);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false); // Устанавливаем состояние в зависимости от того, открыт ли аккордеон
    };

    return (
        <Container maxWidth="md" style={{ marginTop: "80px", marginBottom: "200px" }}> {/* Увеличил нижний отступ */}
            <Navbar />
            <Grid container spacing={3}>
                {poems.length > 0 ? (
                    poems.map((poem) => (
                        <Grid item xs={12} key={poem.id}>
                            {/* Гармошка */}
                            <Accordion
                                expanded={expanded === poem.id}
                                onChange={handleAccordionChange(poem.id)}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel-${poem.id}-content`}
                                    id={`panel-${poem.id}-header`}
                                >
                                    <Typography variant="h6">{poem.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {/* Вміст вірша */}
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        dangerouslySetInnerHTML={{
                                            __html: poem.text, // Відображення HTML
                                        }}
                                    />
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ marginTop: "1rem" }}
                                    >
                                        Автор: {poem.author}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Створено: {new Date(poem.createdAt).toLocaleString()}
                                    </Typography>
                                    <iframe
                                        src="https://drive.google.com/file/d/1lQFZgdjwNuvjoOBtA0Eka9bu-uv5yJLu/preview"
                                        width="100%"
                                        height="60"
                                        frameBorder="0"
                                        style={{
                                            borderRadius: "10px",
                                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                            marginTop: "1rem",
                                        }}
                                        onLoad={(e) => {
                                            const iframe = e.target;
                                            if (expanded === poem.id) {
                                                iframe.contentWindow.document.querySelector("audio")?.play();
                                            }
                                        }}
                                    ></iframe>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    ))
                ) : (
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        align="center"
                        sx={{ width: "100%", marginTop: "2rem" }}
                    >
                        Наразі немає жодного вірша.
                    </Typography>
                )}
            </Grid>
            <Footer />
        </Container>
    );
}

export default Home;
