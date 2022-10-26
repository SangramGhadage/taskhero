import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


export default function Faq() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Grid container>
                <Grid item xs={12} style={{ textAlign: 'start', margin: '2% 0 2% 3%' }}>
                    <h1
                        style={{
                            fontFamily: "Poppins",
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '2rem',
                            overflow: 'hidden',
                            color: '#000000',
                        }}>
                        <span className={classes.span}>task</span>hero
                    </h1>
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'start', margin: '0% 0 1% 3%' }}>
                    <h2
                        style={{
                            fontFamily: "Poppins",
                            fontStyle: 'normal',
                            fontSize: '1.7rem',
                            fontWeight: 700,
                            color: '#000000',
                        }}>
                        TaskHero Terms & Conditions
                    </h2>
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'start', margin: '0% 0 2% 3%' }}>
                    <h3  
                        style={{
                            fontFamily: "Poppins",
                            fontStyle: 'normal',
                            fontSize: '1rem',
                            fontWeight: 400,
                            color: '#000000',
                        }}>
                        Effective as of xx/xx/xxxx
                    </h3>
                </Grid>
                </Grid>
                <div className={classes.root} style={{height: '90vh'}}>
                <Accordion className={classes.root}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{marginLeft: '2%'}}
                    >
                        <Typography>1. Introduction & Enrolment</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.root}>
                        <Typography style={{marginLeft: '3%'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae consectetur nemo enim ratione nostrum quo sequi necessitatibus obcaecati dolore blanditiis.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.root}>
                    <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        style={{marginLeft: '2%'}}

                    >
                        <Typography>2. TaskHero Services & Rewards</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{marginLeft: '3%'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.root}>
                    <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        style={{marginLeft: '2%'}}
                    >
                        <Typography>3. Register Account & Role Of TaskHero</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{marginLeft: '3%'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.root}>
                    <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        style={{marginLeft: '2%'}}
                    >
                        <Typography>4. Misuse & Additional Services</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{marginLeft: '3%'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.root}>
                    <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        style={{marginLeft: '2%'}}
                    >
                        <Typography>5. Problem, Resolution, Communication</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{marginLeft: '3%'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.root}>
                    <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        style={{marginLeft: '2%'}}
                    >
                        <Typography>6. General Clauses</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{marginLeft: '3%'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion >
                <Accordion className={classes.root}>
                    <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        style={{marginLeft: '2%'}}
                    >
                        <Typography>7. Customer Support</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{marginLeft: '3%'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
            </div>
        </>
    )
}

const useStyles = makeStyles(()=> ({
    root: {
        backgroundColor: '#ffedcc',
        fontFamily: ['Poppins', 'Sans-Serif']
    },
    span: {
        fontWeight: 700
    },
}))