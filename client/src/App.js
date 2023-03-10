import React, {useEffect, useState } from 'react'; 
import { Container, AppBar, Grow, Grid, Typography } from '@material-ui/core'; 
//import hook
//dispatch an action
import { useDispatch } from 'react-redux';
//create an action
import { getPosts } from './actions/posts';
import memories from './images/memories.png';
//import components
import Posts from './components/Posts/Post';
import Form from './components/Form/Form';

import useStyles from './styles'



const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
    <Container maxWidth='lg'>
        <AppBar className ={classes.appBar} position='static' color='inherit'>
            <Typography className = {classes.heading} variant='h2' align='center'>
                Memories
            </Typography>
            <img className = {classes.image} src={memories} alt='memories' height='60' />
        </AppBar>
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {/* You wnt to get the current id for the form so that you can edit it */}
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
    );
} 

export default App;