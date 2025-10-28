"use client";
import { useEffect, useState } from "react";
import {Card, CardMedia, CardContent, Typography, Box, Skeleton} from '@mui/material';
import PixelDisplay from "./PixelDisplay.jsx";
export default function PixelPost({ post }) {

    // pattern_ID
    // pattern_name
    // pattern_info: {
    //  width: 0,
    //  height: 0,
    //  colorConfig: ['#fff', '#fff']
    // }
    // description
    // date
    const { pattern_ID: id, pattern_name: name, pattern_info: info, description, date} = post;
    const author = post?.author || "Unknown";
    
    return(
        <>
            <Card sx={{marginBottom: 2, padding: 2, display: 'flex'}}>
                <PixelDisplay patternInfo={info} displayWidth={150} displayHeight={150}/>
                <Box sx={{padding: 2, width: "100%"}}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography >{name}</Typography>
                        
                        <Typography>{date.slice(0,10)}</Typography>
                    </Box>
                    <hr/>
                    <Typography color="textSecondary">{description}</Typography>
                    <Typography color="textSecondary" textAlign="end"> - {author}</Typography>
                </Box>

                
            </Card>
        </>
    )
}