import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const D1Contain = () => {
    // Testing
    const [isId, setIsId] = useState();
    const [isName, setIsName] = useState();

    let jsonData

    // Basic Data
    const [CP, setCP] = useState(0);
    const [EP, setEP] = useState(0);
    const [MP, setMP] = useState(0);
    const [UR, setUR] = useState(0);
    const [MUR, setMUR] = useState(0);

    // Cal Data
    const [DV, setDV] = useState(0);
    const [GP, setGP] = useState(0);
    const [DGR, setDGR] = useState(0);

    // Date Data
    const [MonSP, setMonSP] = useState(0);
    const [MonLP, setMonLP] = useState(0);
    const [MonCC, setMonCC] = useState(0);
    const [MonCCR, setMonCCR] = useState(0);

    const [TueSP, setTueSP] = useState(0);
    const [TueLP, setTueLP] = useState(0);
    const [TueCC, setTueCC] = useState(0);
    const [TueCCR, setTueCCR] = useState(0);

    const [WedSP, setWedSP] = useState(0);
    const [WedLP, setWedLP] = useState(0);
    const [WedCC, setWedCC] = useState(0);
    const [WedCCR, setWedCCR] = useState(0);

    const [ThuSP, setThuSP] = useState(0);
    const [ThuLP, setThuLP] = useState(0);
    const [ThuCC, setThuCC] = useState(0);
    const [ThuCCR, setThuCCR] = useState(0);

    const [FriSP, setFriSP] = useState(0);
    const [FriLP, setFriLP] = useState(0);
    const [FriCC, setFriCC] = useState(0);
    const [FriCCR, setFriCCR] = useState(0);

    const [SatSP, setSatSP] = useState(0);
    const [SatLP, setSatLP] = useState(0);
    const [SatCC, setSatCC] = useState(0);
    const [SatCCR, setSatCCR] = useState(0);

    const [SunSP, setSunSP] = useState(0);
    const [SunLP, setSunLP] = useState(0);
    const [SunCC, setSunCC] = useState(0);
    const [SunCCR, setSunCCR] = useState(0);


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

    function createDataBasic(CurPower, ExpPower, MaxPower, UseRate, MaxUseRate) {
        return { CurPower, ExpPower, MaxPower, UseRate, MaxUseRate };
    }

    const rowsBasic = [
        // CP , EP , MP , UR , MUR
        createDataBasic(<h1>{CP}</h1>, <h1>{EP}</h1>, <h1>{MP}</h1>, <h1>{UR}</h1>, <h1>{MUR}</h1>)
    ]

    function createDataStatus(Divice, GenPower, DGRate) {
        return { Divice, GenPower, DGRate };
    }

    const rowsStatus = [
        // DV , GP , DGR
        createDataStatus(<h1>{DV}</h1>, <h1>{GP}</h1>, <h1>{DGR}</h1>)
    ]

    function createDataDate(name, mon, tue, wed, thu, fri, sat, sun) {
        return { name, mon, tue, wed, thu, fri, sat, sun };
    }

    const rows = [
        // SP , LP , CC , CCR , B
        createDataDate('淨尖峰供電能力', <h1>{MonSP}</h1>, <h1>{TueSP}</h1>, <h1>{WedSP}</h1>, <h1>{ThuSP}</h1>, <h1>{FriSP}</h1>, <h1>{SatSP}</h1>, <h1>{SunSP}</h1>),
        createDataDate('尖峰負載', <h1>{MonLP}</h1>, <h1>{TueLP}</h1>, <h1>{WedLP}</h1>, <h1>{ThuLP}</h1>, <h1>{FriLP}</h1>, <h1>{SatLP}</h1>, <h1>{SunLP}</h1>),
        createDataDate('被轉容量', <h1>{MonCC}</h1>, <h1>{TueCC}</h1>, <h1>{WedCC}</h1>, <h1>{ThuCC}</h1>, <h1>{FriCC}</h1>, <h1>{SatCC}</h1>, <h1>{SunCC}</h1>),
        createDataDate('被轉容量率', <h1>{MonCCR}</h1>, <h1>{TueCCR}</h1>, <h1>{WedCCR}</h1>, <h1>{ThuCCR}</h1>, <h1>{FriCCR}</h1>, <h1>{SatCCR}</h1>, <h1>{SunCCR}</h1>),
        createDataDate('被轉容量', <h1>{isId}</h1>, <h1>{isId}</h1>, <h1>{isId}</h1>, <h1>{isId}</h1>, <h1>{isId}</h1>, <h1>{isId}</h1>, <h1>{isId}</h1>),
    ]

    return (
        <div className="d1Contain">

            <div className='d1Contain-Contain'>
                <div className='d1Contain-Contain-Grid1'>
                    <TableContainer component={Paper} className='Table'>
                        <Table
                        // sx={{ minWidth: 650 }} aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">目前用電量</TableCell>
                                    <TableCell align="center">預估最高用電</TableCell>
                                    <TableCell align="center">最大供電能力</TableCell>
                                    <TableCell align="center">使用率</TableCell>
                                    <TableCell align="center">尖峰使用率</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowsBasic.map((row) => (
                                    <TableRow
                                    // key={row.name}
                                    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">{row.CurPower}</TableCell>
                                        <TableCell align="center">{row.ExpPower}</TableCell>
                                        <TableCell align="center">{row.MaxPower}</TableCell>
                                        <TableCell align="center">{row.UseRate}</TableCell>
                                        <TableCell align="center">{row.MaxUseRate}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <div className='d1Contain-Contain-Grid2'>
                    <TableContainer component={Paper} className='Table'>
                        <Table
                        // sx={{ minWidth: 650 }} aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">裝置容量</TableCell>
                                    <TableCell align="center">淨發電量</TableCell>
                                    <TableCell align="center">容量比(%)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowsStatus.map((row) => (
                                    <TableRow
                                    // key={row.name}
                                    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">{row.Divice}</TableCell>
                                        <TableCell align="center">{row.GenPower}</TableCell>
                                        <TableCell align="center">{row.DGRate}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
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
                    <button onClick={FetchClick}>Fetch</button>
                    <p>{isId}</p>
                    <p>{isName}</p>
                </div>
            </div>

        </div>
    )
}
export default D1Contain;