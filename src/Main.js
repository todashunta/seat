import { createContext, useContext, useEffect, useState } from "react";
import { SeatContext } from "./Seat";
import { inputDataContext } from "./Seat";
import "./scss/seat.scss";

function Main() {
    return (
        <main className="flex justify-around items-center flex-col">
            <TeacherDesk></TeacherDesk>
            <DrawArea></DrawArea>
            <OptionArea></OptionArea>
        </main>
    )
}

function TeacherDesk() {
    return (
        <div>
            <div className="h-20 w-40 border-2 rounded-2xl flex justify-center items-center text-lg">教卓</div>
        </div>
    )
}

function DrawArea() {
    const { seat, setSeat } = useContext(SeatContext)
    return (
        <div className="w-4/5 m-2 draw-area">
            {seat.map((rows) => <DrawTr key={rows[0].id} rows={rows}></DrawTr>)}
        </div>
    )
}

function DrawTr(props) {
    const { seatNum } = useContext(inputDataContext)
    const rows = props.rows
    useEffect(() => {
        const seatAreaWidth = document.querySelector('.draw-area').clientWidth
        const seatAreaHeight = document.querySelector('.draw-area').clientHeight
        document.documentElement.style.setProperty('--seat-width', (seatAreaWidth / seatNum.rowNum) + 'px')
        document.documentElement.style.setProperty('--seat-height', (seatAreaHeight / seatNum.columnNum) + 'px')

    })
    return (
        <div className="flex h-24 draw-area-tr">
            {rows.map(value =>
                <div key={value.id} className="draw-area-td border-2 rounded-2xl text-center">
                    {value.name}
                </div>
            )}
        </div>
    )
}

function OptionArea() {
    const { seatNum } = useContext(inputDataContext)
    const { seat, setSeat } = useContext(SeatContext)
    function updateSeat() {
        let firstSeatValue = []
        let firstSeatValueSave = []
        for (let i = 0; i < seatNum.columnNum; i++) {
            for (let j = 0; j < seatNum.rowNum; j++) {
                firstSeatValueSave.push({ id: (seatNum.columnNum * i) + j, name: 'name', row: i, column: j })
            }
            firstSeatValue.push(firstSeatValueSave)
            firstSeatValueSave = []
        }
        setSeat(firstSeatValue)
    }

    function updateRowNum(e) {
        seatNum.setRowNum(e.target.value)
        updateSeat()
    }
    function updateColumnNum(e) {
        seatNum.setColumnNum(e.target.value)
        updateSeat()
    }
    return (
        <div className="flex w-4/5 h-28 items-center justify-around">

            <div className="flex flex-col justify-around h-20">
                <button className="bg-red-500 bg-gradient-to-t from-red-400 hover:opacity-80 box-border active:border-2  border-red-700  transition-opacity rounded-md w-28 h-8 shadow-lg text-white font-bold">Change</button>
                <button className="bg-green-500 bg-gradient-to-t from-green-400 hover:opacity-80 box-border active:border-2  border-green-700  transition-opacity rounded-md w-28 h-8 shadow-lg text-white font-bold">Reset</button>
            </div>
            <div className="flex flex-col justify-around h-20">
                <label className="">
                    列:
                    <input type="number" min="1" max="1000" value={seatNum.rowNum} onChange={e => updateRowNum(e)} className="
                    bg-blue-100
                    rounded-md
                    text-center
                    ml-2
                    w-16
                    "></input>
                </label>

                <label className="">
                    行:
                    <input type="number" min="1" max="1000" value={seatNum.columnNum} onChange={e => updateColumnNum(e)} className="
                    bg-blue-100
                    rounded-md
                    text-center
                    ml-2
                    w-16
                    "></input>
                </label>
            </div>
        </div>
    )
}
export default Main;