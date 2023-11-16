import Grid from '@mui/material/Unstable_Grid2';
import {Box, CssBaseline} from '@mui/material';

function Layout() {
  return (
        <Box style={{display: "flex", height: "100vh"}}>
            <CssBaseline/>
            <Grid container sx={{flexGrow: 1}}>
                <Grid item flexBasis={200}  >NAVIGATION</Grid>
                <Grid item flex={1} spacing={8}>
                    <Grid xs={4}   >HEADER</Grid>
                    <Grid xs={4}   >USER INPUT</Grid>
                    <Grid xs={4}  >THREAD</Grid>
                </Grid>
                <Grid item flex={1}>
                    <Grid xs={3}  >SEARCH</Grid>
                    <Grid xs={3}  >CONTAINER 1</Grid>
                    <Grid xs={3}  >CONTAINER 2</Grid>
                    <Grid xs={3}  >CONTAINER 3</Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Layout;