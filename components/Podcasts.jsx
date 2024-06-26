import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Grid } from "@material-ui/core";
import Image from "next/image";

{/* Import projects images */}
import ututo from '../public/assets/ututo.png'

function Podcasts() {
  return (
    <div id="opensource" className="w-full md:h-screen p-2 pt-16">
      <div className="max-w-[1240px] m-auto">
        <br/>
        <p className="uppercase text-xl tracking-widest text-[#000] mb-5">Podcasts</p>
        <p className="py-2 text-gray-600">
          Ututo Nights
        </p>
        <br/>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  Chapter 01
                </Typography>
                <CardMedia style={{ width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src={ututo} alt="Ututo Logo" width={300} height={150} />
                </CardMedia>
                <br/>
                <Button variant="contained" color="secondary" href="https://open.spotify.com/episode/2qT9jtxwdbP6IuZ7Ehv1tM?si=6255287fbc554993" target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  Listen chapter
                </Button>
              </CardContent>
            </Card>
          </Grid>
          {/* Repeat the above Grid item structure for other cards */}
        </Grid>
      </div>
    </div>
  );
}

export default Podcasts;
