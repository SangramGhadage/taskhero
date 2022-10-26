
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function TaskHero() {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleTerms = () => {
        navigate('/Faq');
    };

    return (
        <div className={classes.root} style={{ backgroundColor: '#ffffff' }}>

            <Grid container spacing={1} style={{ backgroundColor: "#ffedcc" }}>
                <Grid item xs={12} style={{ textAlign: 'start', margin: '2% 0 0 3%' }}>
                    <Typography variant="h5" noWrap={true}
                        style={{
                            fontFamily: "Poppins",
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '2rem',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            color: '#000000',
                        }}>
                        <span className={classes.span}>task</span>hero
                    </Typography>
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={6}>

                        <div className={classes.header}>
                            <div className={classes.heading}>
                                <h2 style={{ fontWeight: "400",  fontSize: '2rem' }}>Do simple task & </h2>
                                <h2 style={{ fontWeight: "700", fontSize: '2rem' }}>Earn a lot of money</h2>
                                <Button className={classes.btnregister} style={{ marginRight: 20, fontSize: '1rem', fontWeight: 400, backgroundColor: '#4557dd', color: '#ffffff' }}>Download taskhero APK</Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={classes.header}>
                            <img src="Group 3921.png" alt="" className={classes.headerImage} />
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" noWrap={true}
                        style={{
                            fontFamily: "Poppins",
                            fontStyle: 'normal',
                            fontWeight: 700,
                            overflow: 'hidden',
                            fontSize: '2rem',
                            whiteSpace: 'nowrap',
                            color: '#000000',
                        }}>
                        Why join taskhero
                    </Typography>
                </Grid>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={4}>
                        <div className={classes.sectionHead}>
                            <div className={classes.sectionImg}>
                                <img src="Group 3930.png" alt="" />
                            <h6 className={classes.sectionPara}>Get Free Product</h6>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <div className={classes.sectionHead}>
                            <div className={classes.sectionImg}>
                                <img src="Group 3932.png" alt="" />
                            <h6 className={classes.sectionPara}>Get Rewarded <br /> For Your Opinion</h6>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.header}>
                            <div className={classes.sectionImg}>
                                <img src="Group 3933.png" alt="" />
                            <h6 className={classes.sectionPara} style={{padding: 0}}>Get Done With Tasks <br /> In Minutes</h6>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container style={{ backgroundColor: "#ffe4b5", paddingTop: '2%' }}>
                    <Grid item xs={12}>
                        <h2 style={{ fontWeight: 700, fontSize: '2rem' }}>Got Questions</h2>
                        <h2 style={{ fontWeight: 500, fontSize: '1.5rem' }}>We're happy to answer every one of them</h2>
                        <h5 style={{ fontWeight: 500, fontSize: '1rem' }}>Email Us On: help@haskhero.in</h5>
                        <h6 onClick={handleTerms} style={{ color: 'blue', cursor: 'pointer', fontSize: '1rem' }}>Terms & Conditions</h6>
                        <h6>TaskHero 2022. All Rights Reserved</h6>
                    </Grid>
                </Grid>
            </Grid>
        </div>


    );
}



const useStyles = makeStyles(() => ({
    root: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        display: 'flex',
        flexGrow: 1,
        backgroundColor: 'white',
        fontFamily: ['Poppins', 'Sans-Serif']
    },
    span: {
        fontWeight: 700
    },
    header: {
        height: '100%',
        width: '100%',
        // marginTop: 25px;
        overflow: 'hidden',

    },
    heading: {
        textAlign: "start",
        margin: '20% 0 0 0%',
        paddingLeft: "15%"
        // textAlign: 'center'
    },
    headerImage: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        marginTop: "2%",
    },
    sectionHead: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',

    },
    sectionImg: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        marginTop: "2%",
    },
    sectionPara: {
        fontSize: '1.3rem',
        fontWeight: 400,
        paddingTop: '5%'
    }


}));
