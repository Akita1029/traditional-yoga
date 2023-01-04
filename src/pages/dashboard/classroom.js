import { Box, Paper } from "@mui/material"
import React from "react"

const Classroom = () => {
    return (
        <div className="dashboard-container expandable">
            <div className="text-primary">Live Classroom</div>
            <div className="text-primary">Resources</div>
            <Paper
            variant="outlined"
                sx={{
                p: 2,
                borderRadius: 2,
                maxWidth: 500,
                flexGrow: 1,
                borderColor: "#FE6731"
                }}
            >
            </Paper>
        </div>
    )
}

export default Classroom