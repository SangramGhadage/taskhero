
import { Button, Grid, Typography } from "@material-ui/core";
import { createTheme, makeStyles, useTheme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function TaskHero() {
    const classes = useStyles();
    const theme = useTheme();
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleTerms = () => {
        navigate('/Faq');
    };

    return (
        <div className={classes.root} style={{ backgroundColor: '#ffffff' }}>

            <Grid container spacing={1} style= {{backgroundColor: "#ffedcc"}}>
                <Grid item xs={12} style={{ textAlign: 'start', margin: '2% 0 0 3%' }}>
                    <Typography variant="h5" noWrap={true}
                        style={{
                            fontFamily: "Poppins",
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '2rem',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            color: '#000000',
                        }}>
                        <span className={classes.span}>task</span>hero
                    </Typography>
                </Grid>
                <Grid item xs={12} md= {6}>
                    <center>
                    <div className={classes.header}>
                        <div className={classes.heading}>
                            <h2 style={{ fontWeight: "400" }}>Do simple task and & </h2>
                            <h2 style={{ fontWeight: "700" }}>Earn a lot of money</h2>
                            <Button className={classes.btnregister} style={{ marginRight: 20, fontSize: 12.5, fontWeight: 400, backgroundColor: '#4557dd', color: '#ffffff' }}>Download taskhero APK</Button>
                        </div>
                    </div>
                    </center>
                </Grid>
                <center>
                <Grid item xs={6}>
                    <div className={classes.header}>
                        <img src="Group 3921.png" alt="" className={classes.headerImage} />
                    </div>
                </Grid>
                </center>
                <Grid item xs={12}>
                    <Typography variant="h4" noWrap={true}
                        style={{
                            fontFamily: "Poppins",
                            fontStyle: 'normal',
                            fontWeight: 700,
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            color: '#000000',
                        }}>
                        Why join taskhero
                    </Typography>
                </Grid>
                <Grid container >
                    <Grid item xs={12} md={4} className={classes.sectionImg}>
                        <div >
                            <img src="Group 3930.png" alt= "" />
                            <h6>Get Free Product</h6>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.sectionImg}>
                        <div >
                            <img src="Group 3932.png" alt=""  />
                            <h6>Get Rewarded <br/> For Your Opinion</h6>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.sectionImg}>
                        <div>
                            <img src="Group 3933.png" alt=""  />
                            <h6>Get Done With Tasks <br/> In Minutes</h6>
                        </div>
                    </Grid>
                </Grid>
                <Grid container style= {{backgroundColor: "#ffe4b5"}}>
                    <Grid item xs={12}>
                        <h2 style={{fontWeight: 700}}>Got Questions</h2>
                        <h2>We're happy to answer every one of them</h2>
                        <h5>Email Us On: help@haskhero.in</h5>
                        <h6 onClick= {handleTerms} style={{color: 'blue', cursor: 'pointer'}}>Terms & Conditions</h6>
                        <h6>TaskHero 2022. All Rights Reserved</h6>
                    </Grid>
                </Grid>
            </Grid>
        </div>


    );
}



const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        backgroundColor: 'white',
        fontFamily: ['Poppins', 'Sans-Serif']
    },
    span: {
        fontWeight: 700
    },
    header: {
        height: '70vh',
        width: "100%",

    },
    heading: {
        textAlign: "start",
        margin: '25% 0 0 0%',
        paddingLeft: "15%"
    },
    headerImage: {
        height: "100%",
        width: "100%",
        marginTop: "-7%"
    },
    sectionImg: {
        height: "350px",
        width: "200px",
        textAlign: "center"
    },
    image: {
       
    }


}));
