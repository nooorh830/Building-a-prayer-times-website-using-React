// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
//add by Nora
import BedtimeIcon from '@mui/icons-material/Bedtime';
import GTranslateIcon from '@mui/icons-material/GTranslate';
// import { GradeOutlined } from '@mui/icons-material';
//selsct
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//axios
import axios from 'axios';

import MainContent from './mainContent';
import Container from '@mui/material/Container';

import { useState, useEffect } from 'react';
// import { useForkRef } from '@mui/material';






export default function Header() {

    // country 
    const [selectCity, setSelectCity] = useState({
        displayName: "دبي",
        apyName: "Rigth",
        capital: "Riyadh"
    })
    // console.log(selectCity)

    const handleCityChange = (event) => {
        console.log(event.target.value.displayName)
        setSelectCity(event.target.value.displayName)

    };




    const getTimings = async () => {
        const response = await axios.get("http://api.aladhan.com/v1/timingsByCity?city=Dubai&country=United%20Arab%20Emirates&method=8");
        // console.log(response.data)
        setTimings(response.data)


    };
    useEffect(() => {
        getTimings();
    }, [])

    const [timings, setTimings] = useState({
        "data": {
            "timings": {
                "Fajr": "03:00",
                "Sunrise": "05:00",
                "Dhuhr": "11:00",
                "Asr": "15:00",
                "Sunset": "18:00",
                "Maghrib": "18:00",
                "Isha": "19:00",
                "Imsak": "03:00",
                "Midnight": "23:00",
                "Firstthird": "22:000",
                "Lastthird": "01:00"
            },
            "date": {
                "hijri": {
                    "date": "20-10-1445",
                    "weekday": {
                        "en": "Al Athnayn",
                        "ar": "السبت "
                    },
                },
                "gregorian": {
                    "date": "29-04-2024",
                }
            }
        }
    });
    // console.log(timings)





    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className="top-header" position="static">
                    <Toolbar>
                        <div style={{ minWidth: "120px" }}>
                            <IconButton
                                size="small"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"

                                sx={{ mr: 2 }}

                            >

                                <BedtimeIcon fontSize="inherit"></BedtimeIcon>
                            </IconButton>

                            <IconButton
                                size="small"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                            >

                                <GTranslateIcon fontSize="inherit" />
                            </IconButton>
                        </div>

                        <Box sx={{ minWidth: 120 }}>
                            <FormControl style={{ minWidth: "150px" }}>
                                <InputLabel id="demo-simple-select-label"> غير الدوله </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="غير الدوله"
                                    onChange={handleCityChange}
                                >
                                    <MenuItem key={1} value={{
                                        displayName: "السعودية",
                                        apyName: "SA",
                                        capital: "Riyadh"
                                    }}>السعودية</MenuItem>
                                    <MenuItem key={2} value={{
                                        displayName: "الإمارات",
                                        apyName: "AE",
                                        capital: "Abu Dhabi"
                                    }}>الإمارات</MenuItem>
                                    <MenuItem key={3} value={{
                                        displayName: "البحرين",
                                        apyName: "BH",
                                        capital: "Manama"
                                    }}>البحرين</MenuItem>
                                    <MenuItem key={4} value={{
                                        displayName: "مصر",
                                        apyName: "EG",
                                        capital: "Cairo"
                                    }}>مصر</MenuItem>

                                </Select>
                            </FormControl>
                        </Box>



                    </Toolbar>
                </AppBar>
            </Box >
            <Container maxWidth="xl" style={{
                display: 'flex',
                alignItems: 'center',
                height: "calc(100vh - 70px)",
            }}>
                <MainContent x={timings} city={selectCity.displayName} ></MainContent>
            </Container>
        </>
    );
}
