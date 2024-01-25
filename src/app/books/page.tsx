"use client";
import { Box, Button, Card, CardActions, CardContent, InputLabel, Typography } from "@mui/material";
import React, { useState } from "react";

function BookManagement() {
  const [backGroundColor, setBackGroundColor] = useState("F4F5FA");

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Adding book
        </Typography>
        <Typography variant="h5" component="div">
          test1
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          test 2
        </Typography>
        <Typography variant="body2">test 3</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={{ backgroundColor: backGroundColor }}>
        {card}
      </Card>
    </Box>
  );
}

export default BookManagement;
