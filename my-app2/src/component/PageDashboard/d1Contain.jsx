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

    // Light 
    let MonCBG = document.getElementById('MonCBG')
    let TueCBG = document.getElementById('TueCBG')
    let WedCBG = document.getElementById('WedCBG')
    let ThuCBG = document.getElementById('ThuCBG')
    let FriCBG = document.getElementById('FriCBG')
    let SatCBG = document.getElementById('SatCBG')
    let SunCBG = document.getElementById('SunCBG')

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
            .catch((error) => console.log('Error : ', error));
    }

    const UpdateUI = () => {
        setIsId(jsonData.Id)
        setIsName(jsonData.Name)
        rows[0].id = jsonData.Id
        rows[0].firstName = jsonData.Name

        MonCBG.style.background = "yellow"
        TueCBG.style.background = "red"
        WedCBG.style.background = "blue"
        ThuCBG.style.background = "gray"
        FriCBG.style.background = "orange"
        SatCBG.style.background = "pink"
        SunCBG.style.background = "green"
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
        createDataDate(<h1>淨尖峰供電能力</h1>, <h1>{MonSP}</h1>, <h1>{TueSP}</h1>, <h1>{WedSP}</h1>, <h1>{ThuSP}</h1>, <h1>{FriSP}</h1>, <h1>{SatSP}</h1>, <h1>{SunSP}</h1>),
        createDataDate(<h1>尖峰負載</h1>, <h1>{MonLP}</h1>, <h1>{TueLP}</h1>, <h1>{WedLP}</h1>, <h1>{ThuLP}</h1>, <h1>{FriLP}</h1>, <h1>{SatLP}</h1>, <h1>{SunLP}</h1>),
        createDataDate(<h1>被轉容量</h1>, <h1>{MonCC}</h1>, <h1>{TueCC}</h1>, <h1>{WedCC}</h1>, <h1>{ThuCC}</h1>, <h1>{FriCC}</h1>, <h1>{SatCC}</h1>, <h1>{SunCC}</h1>),
        createDataDate(<h1>被轉容量率</h1>, <h1>{MonCCR}</h1>, <h1>{TueCCR}</h1>, <h1>{WedCCR}</h1>, <h1>{ThuCCR}</h1>, <h1>{FriCCR}</h1>, <h1>{SatCCR}</h1>, <h1>{SunCCR}</h1>),
        createDataDate(<h1>被轉狀態</h1>,
            <canvas className="point" id="MonCBG"></canvas>,
            <canvas className="point" id="TueCBG"></canvas>,
            <canvas className="point" id="WedCBG"></canvas>,
            <canvas className="point" id="ThuCBG"></canvas>,
            <canvas className="point" id="FriCBG"></canvas>,
            <canvas className="point" id="SatCBG"></canvas>,
            <canvas className="point" id="SunCBG"></canvas>)
    ]

    return (
        <div className="d1Contain">

            <div className='d1Contain-Contain'>
                <div className='d1Contain-Contain-Title1'>
                    <h1>今日電力資訊</h1>
                </div>

                <div className='d1Contain-Contain-Title2'>
                    <h1>發電率</h1>
                </div>

                <div className='d1Contain-Contain-Title3'>
                    <h1>本週電力資訊</h1>
                </div>

                <div className='d1Contain-Contain-Title4'>
                    <h1>燈號說明</h1>
                </div>

                <div className='d1Contain-Contain-Grid1'>
                    <TableContainer component={Paper} className='Table'>
                        <Table
                        // sx={{ minWidth: 650 }} aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"><h1>目前用電量()</h1></TableCell>
                                    <TableCell align="center"><h1>預估最高用電()</h1></TableCell>
                                    <TableCell align="center"><h1>最大供電能力()</h1></TableCell>
                                    <TableCell align="center"><h1>使用率(%)</h1></TableCell>
                                    <TableCell align="center"><h1>尖峰使用率(%)</h1></TableCell>
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
                                    <TableCell align="center"><h1>裝置容量</h1></TableCell>
                                    <TableCell align="center"><h1>淨發電量</h1></TableCell>
                                    <TableCell align="center"><h1>容量比(%)</h1></TableCell>
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
                                    <TableCell align="center"><h1>一</h1></TableCell>
                                    <TableCell align="center"><h1>二</h1></TableCell>
                                    <TableCell align="center"><h1>三</h1></TableCell>
                                    <TableCell align="center"><h1>四</h1></TableCell>
                                    <TableCell align="center"><h1>五</h1></TableCell>
                                    <TableCell align="center"><h1>六</h1></TableCell>
                                    <TableCell align="center"><h1>日</h1></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                    // key={row.name}
                                    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align='center'>{row.name}</TableCell>
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
                    <canvas className="point"></canvas>
                </div>

                <div className='d1Contain-Contain-Grid5'>
                    <canvas className="point"></canvas>
                </div>

                <div className='d1Contain-Contain-Grid6'>
                    <canvas className="point"></canvas>
                </div>

                <div className='d1Contain-Contain-Grid7'>
                    <canvas className="point"></canvas>
                </div>

                <div className='d1Contain-Contain-Grid8'>
                    <canvas className="point"></canvas>
                </div>

                <div className='d1Contain-Contain-Grid9'>
                    <h1>供電充裕</h1>
                </div>

                <div className='d1Contain-Contain-Grid10'>
                    <h1>供電吃緊</h1>
                </div>

                <div className='d1Contain-Contain-Grid11'>
                    <h1>供電警戒</h1>
                </div>

                <div className='d1Contain-Contain-Grid12'>
                    <h1>限電警戒</h1>
                </div>

                <div className='d1Contain-Contain-Grid13'>
                    <h1>限電準備</h1>
                </div>

                <div className='d1Contain-Contain-GridTest'>
                    <button onClick={FetchClick}>Test</button>
                    <p>{isId}</p>
                    <p>{isName}</p>
                </div>
            </div>

        </div>
    )
}
export default D1Contain;