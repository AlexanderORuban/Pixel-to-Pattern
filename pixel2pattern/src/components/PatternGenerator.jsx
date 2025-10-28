import Box from "@mui/material/Box";
import { Typography, Card, Slider } from "@mui/material";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";

export default function PatternGenerator({patternInfo}) {

    const [widthMultiplier, setWidthMultiplier] = useState(1.0);
    const [pattern, setPattern] = useState([]);

    useEffect(() => {
        generatePattern();
    }, [patternInfo, widthMultiplier])

    // width
    // height
    // colorConfig - [#000, #000, #000] color array
    const colors = patternInfo.colorConfig;
    const width = patternInfo.width;

    const generatePattern = () => {
        let rows = 1;
        let currentRowContents = `Row ${rows}: `;
        let groupSize = 1;
        let tempPattern = [];
        for(let i = 0; i< colors.length-1; i++) {
             // Check to see if we need to move to another row
            if((i + 1) % width == 0) {
                currentRowContents += (groupSize * widthMultiplier) + " S.C. in " + colors[i];
                tempPattern.push(currentRowContents);
                rows++;
                currentRowContents = `Row ${rows}: `;
                groupSize = 1;
            } else{
                // Check if color is part of a group
                if(colors[i] === colors[i+1]) groupSize++;
                else {
                    currentRowContents += (groupSize * widthMultiplier) + " S.C. in " + colors[i] + ", ";
                    groupSize = 1;
                }
            }
        }

        currentRowContents += (groupSize * widthMultiplier) + " S.C. in " + colors[colors.length-1];
        tempPattern.push(currentRowContents);

        setPattern(tempPattern);

    }

    return(
    <Box sx={{ p: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>Pattern Generator</Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Slider value={widthMultiplier} onChange={(e, v) => setWidthMultiplier(v)} min={0.5} max={5} step={0.5} valueLabelDisplay="auto" sx={{ flex: 1 }}/>
            <TextField size="small" type="number" label="×" value={widthMultiplier} onChange={(e) => setWidthMultiplier(parseFloat(e.target.value))} sx={{ width: 70 }} />
        </Box>

        <Divider sx={{ my: 1 }} />

        {pattern.length ? (
        <Box component="ul" sx={{ pl: 2, lineHeight: 1.6, m: 0}}>
            {pattern.map((row, i) => (
            <li key={i} style={{ fontSize: "0.9rem" }}>
                {row}
            </li>
            ))}
        </Box>
        ) : (
        <Typography variant="body2" color="text.secondary">
            Generating pattern...
        </Typography>
        )}
    </Box>
    );
}