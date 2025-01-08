import { useState } from "react";
import { database } from "../services/firebase";
import { ref, push } from "firebase/database";

import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
} from "@mui/material";

function AdminPanel() {
    const [form, setForm] = useState({
        title: "",
        text: "",
        musicUrl: "",
        author: "Oleksandr Kostiushko",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleAddPoem = async () => {
        if (!form.title || !form.text || !form.musicUrl) {
            alert("Будь ласка, заповніть усі поля.");
            return;
        }

        // Заміна нових рядків на <br /> для збереження форматування
        const formattedText = form.text.replace(/\n/g, "<br />");

        const poem = {
            ...form,
            text: formattedText,  // Зберігаємо форматований текст
            createdAt: new Date().toISOString(),
        };

        try {
            const poemsRef = ref(database, "poems");
            await push(poemsRef, poem);
            alert("Вірш успішно додано!");
            setForm({
                title: "",
                text: "",
                musicUrl: "",
                author: "Oleksandr Kostiushko",
            });
        } catch (error) {
            console.error("Error adding poem:", error);
        }
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
            <Box
                component="form"
                sx={{
                    marginBottom: "2rem",
                    padding: "2rem",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Typography variant="h5" gutterBottom align="center">
                    Додати новий вірш
                </Typography>
                <TextField
                    label="Назва вірша"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Текст вірша"
                    name="text"
                    value={form.text}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                />
                <TextField
                    label="URL музики"
                    name="musicUrl"
                    value={form.musicUrl}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddPoem}
                    fullWidth
                    style={{ marginTop: "1rem" }}
                >
                    Додати вірш
                </Button>
            </Box>
        </Container>
    );
}

export default AdminPanel;
