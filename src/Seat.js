import { createContext, useState } from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'


export const SeatContext = createContext()
export const inputDataContext = createContext()

let firstSeatValue = []
let firstSeatValueSave = []
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        firstSeatValueSave.push({ id: (4 * i) + j, name: 'name', row: i, column: j })
    }
    firstSeatValue.push(firstSeatValueSave)
    firstSeatValueSave = []
}
function Seat() {
    const [seat, setSeat] = useState(firstSeatValue)
    const seatValue = {
        seat,
        setSeat
    }
    const [rowNum, setRowNum] = useState(4)
    const [columnNum, setColumnNum] = useState(4)
    const [number, setNumber] = useState(true)
    const [name, setName] = useState(true)
    const [sex, setSex] = useState(false)
    const inputDataValue = {
        seatNum: {
            rowNum,
            setRowNum,
            columnNum,
            setColumnNum
        },
        isShow: {
            number,
            setNumber,
            name,
            setName,
            sex,
            setSex,
        }
    }


    return (
        <div>
            <SeatContext.Provider value={seatValue}>
                <inputDataContext.Provider value={inputDataValue}>
                    <Header />
                    <Main />
                    <Footer />
                </inputDataContext.Provider>
            </SeatContext.Provider>
        </div>
    )
}

export default Seat;