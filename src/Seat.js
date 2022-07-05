import { createContext, useState } from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'


export const SeatContext = createContext()
export const inputDataContext = createContext()

class seatValue {
    constructor(id, name, row, column) {
        this.id = id
        this.name = name
        this.row = row
        this.column = column
    }
}
let firstSeatValue = []
let firstSeatValueSave = []
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        firstSeatValueSave.push(new seatValue((4 * i) + j, 'name', i, j))
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
    const inputDataValue = {
        seatNum: {
            rowNum,
            setRowNum,
            columnNum,
            setColumnNum
        }
    }
    return (
        <div>
            <SeatContext.Provider value={seatValue}>
                <inputDataContext value={inputDataValue}>
                    <Header />
                    <Main />
                    <Footer />
                </inputDataContext>
            </SeatContext.Provider>
        </div>
    )
}

export default Seat;