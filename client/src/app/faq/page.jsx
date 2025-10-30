"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import {
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Card,
    Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQPage() {
    const faqs = [
        {
            question: "What is Pixel-to-Pattern?",
            answer:
                "Pixel-to-Pattern transforms pixel art into beginner-friendly crochet patterns, generating detailed, row-by-row stitch instructions.",
        },
        {
            question: "How do I create a crochet pattern?",
            answer:
                "Go to the Create page, upload or draw your pixel art, and the app will generate rows showing how many stitches of each color you need per row. Example: Row 1: 28 sc (white) • Row 2: 9 sc (white), 10 sc (yellow), 9 sc (white).",
        },
        {
            question: "Can I view other users’ creations?",
            answer:
                "Yes! The Read section lets you browse all submitted patterns and view each one’s stitch-by-stitch instructions.",
        },
        {
            question: "Can I edit my pattern after creating it?",
            answer:
                "Yes! You can edit them by clicking on a pattern on the home page, clicking the edit pencil button on the pattern once in it, and then editing and saving it with the save button.",
        },
        {
            question: "How do I delete a pattern?",
            answer:
                "Not yet implemented.",
        },
        {
            question: "What technologies power Pixel-to-Pattern?",
            answer:
                "The frontend is built with Next.js and Material UI, the backend uses Node.js and Express, and data is stored in a MySQL database managed by Sequelize.",
        },
        {
            question: "Can I run the project locally?",
            answer:
                "Yes! Clone the repository, install dependencies in both the server and client folders, create a .env file with your DB and server credentials in the root, an .env.local in the client, and in the root run each side with npm run dev.",
        },
        {
            question: "How is the project deployed?",
            answer:
                "Pixel-to-Pattern is containerized with Docker and published to GitHub Container Registry (GHCR). It can be deployed on a virtual machine using docker-compose.",
        },
    ];

    return (
        <>
            <NavBar />
            <Container maxWidth="md" sx={{ py: 6 }}>
                <Card
                    sx={{
                        p: 4,
                        backgroundColor: "white",
                        borderRadius: "2em",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                    }}
                >
                    <Box textAlign="center" mb={4}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: "bold",
                                mb: 1,
                                background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Frequently Asked Questions
                        </Typography>
                        <Typography color="text.secondary">
                            Find answers about creating, editing, and managing your crochet patterns.
                        </Typography>
                    </Box>

                    <Box>
                        {faqs.map((item, idx) => (
                            <Accordion
                                key={idx}
                                sx={{
                                    mb: 1.5,
                                    borderRadius: "1em !important",
                                    boxShadow: "none",
                                    "&:before": { display: "none" },
                                    border: "1px solid #e0e0e0",
                                }}
                            >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="subtitle1" fontWeight="600">
                                        {item.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="text.secondary" sx={{ pl: 1 }}>
                                        {item.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Card>
            </Container>
        </>
    );
}
