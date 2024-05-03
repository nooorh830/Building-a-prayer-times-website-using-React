// import React from 'react'

// add By Nora
// import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';











export default function MainContent({ x, city }) {
    // console.log(x);
    console.log(city);

    const paryTime = x.data.timings
    // console.log(paryTime)


    const calender = x.data.date
    // console.log(calender)





    return (
        <>
            <Grid container spacing={2} style={{ width: "100%", justifyContent: "space-around", flexDirection: "row-reverse" }}>
                <Grid xs={12} md={5}>
                    <div className="text" id="text-dox">

                        <h1>مواقيت الصلاة ليوم {calender.hijri.weekday.ar}</h1>
                        <p> التاريخ بالهجري :  {calender.gregorian.date} </p>
                        <p> التاريخ بالميلادي : {calender.hijri.date}</p>

                        <div className="icon">

                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                            >

                                <RefreshIcon />
                            </IconButton>

                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                            >

                                <VolumeUpIcon />
                            </IconButton>

                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                            >

                                <LocationOnIcon />
                            </IconButton>

                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                            >

                                <CalendarMonthIcon />
                            </IconButton>

                        </div>
                    </div>
                </Grid>

                <Grid xs={12} md={5}>
                    <TableContainer component={Paper}>
                        <Table>

                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" colSpan={2}><h2>{city}</h2></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" colSpan={2} >صلاه الفجر بعد 20:15:11 </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center" colSpan={2}>  مضى على صلاه العشاء 50 دقيقه </TableCell>
                                </TableRow>

                            </TableHead>

                            <TableBody>


                                <TableRow>
                                    <TableCell > العصر {paryTime.Asr} </TableCell>
                                    <TableCell align="right"> الفجر {paryTime.Fajr} </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> المغرب {paryTime.Sunset}</TableCell>
                                    <TableCell align="right"> الشروق {paryTime.Sunrise}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>العشاء {paryTime.Isha} </TableCell>
                                    <TableCell align="right"> الظهر {paryTime.Dhuhr} </TableCell>
                                </TableRow>


                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>

            </Grid>




        </>
    )

}

