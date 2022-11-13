import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const D1Contain = () => {
    const [isId, setIsId] = useState();
    const [isName, setIsName] = useState();

    let jsonData

    const FetchClick = () => {
        console.log('HIHIHI')

        fetch('http://127.0.0.1:5000')
            .then((response) => response.json())
            .then((json) => {
                jsonData = json
                console.log(jsonData)
                // console.log(typeof (jsonData))
                // console.log(jsonData.Id)
                // console.log(jsonData.Name)
                UpdateUI()
            })
            .catch((error) => console.log(error));
    }

    const UpdateUI = () => {
        setIsId(jsonData.Id)
        setIsName(jsonData.Name)
        rows[0].id = jsonData.Id
        rows[0].firstName = jsonData.Name
    }

    function createData(name, mon, tue, wed, thu, fri, sat, sun) {
        return { name, mon, tue, wed, thu, fri, sat, sun };
    }

    const rows = [
        // S , L , C , P , B
        createData('淨尖峰供電能力', 159, 6.0, 24, 4.0),
        createData('尖峰負載', 237, 9.0, 37, 4.3),
        createData('被轉容量', 262, 16.0, 24, 6.0),
        createData('被轉容量率', 305, 3.7, 67, 4.3),
        createData('被轉容量', <h1>{isId}</h1>, 16.0, 49, 3.9),
    ]

    return (
        <div className="d1Contain">

            <div className='d1Contain-Contain'>
                <div className='d1Contain-Contain-Grid1'>
                </div>

                <div className='d1Contain-Contain-Grid2'>
                    <button onClick={FetchClick}>Fetch</button>
                    <p>{isId}</p>
                    <p>{isName}</p>
                </div>

                <div className='d1Contain-Contain-Grid3'>
                    <TableContainer component={Paper} className='Table'>
                        <Table
                        // sx={{ minWidth: 650 }} aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center">星期一</TableCell>
                                    <TableCell align="center">星期二</TableCell>
                                    <TableCell align="center">星期三</TableCell>
                                    <TableCell align="center">星期四</TableCell>
                                    <TableCell align="center">星期五</TableCell>
                                    <TableCell align="center">星期六</TableCell>
                                    <TableCell align="center">星期日</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                    // key={row.name}
                                    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align='right' component="th" scope="row">{row.name}</TableCell>
                                        <TableCell align="center">{row.mon}</TableCell>
                                        <TableCell align="center">{row.tue}</TableCell>
                                        <TableCell align="center">{row.wed}</TableCell>
                                        <TableCell align="center">{row.thu}</TableCell>
                                        <TableCell align="center">{row.fri}</TableCell>
                                        <TableCell align="center">{row.sat}</TableCell>
                                        <TableCell align="center">{row.sun}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <div className='d1Contain-Contain-Grid4'>
                    4
                </div>
            </div>

        </div>
    )
}
export default D1Contain;