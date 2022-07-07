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
    const { seatNum } = useContext(inputDataContext)
    useEffect(() => {

        let updateSeatValue = []
        let updateSeatValueSave = []
        for (let i = 0; i < seatNum.columnNum; i++) {
            for (let j = 0; j < seatNum.rowNum; j++) {
                updateSeatValueSave.push({ id: (seatNum.columnNum * i) + j, name: 'name', number: 0, sex: 'M', row: i, column: j, top: 0, left: 0 })
            }
            updateSeatValue.push(updateSeatValueSave)
            updateSeatValueSave = []
        }

        const seatAreaWidth = document.querySelector('.draw-area').clientWidth
        const seatAreaHeight = document.querySelector('.draw-area').clientHeight
        document.documentElement.style.setProperty('--seat-width', (seatAreaWidth / seatNum.rowNum) + 'px')
        document.documentElement.style.setProperty('--seat-height', (seatAreaHeight / seatNum.columnNum) + 'px')

        updateSeatValue.forEach((rows) => {
            rows.forEach((value) => {
                value.top = (seatAreaHeight / seatNum.columnNum) * value.row
                value.left = (seatAreaWidth / seatNum.rowNum) * value.column
                value.number = value.id + 1
            })
        })

        setSeat(updateSeatValue)

    }, [seatNum.rowNum, seatNum.columnNum])

    return (
        <div className=" m-2 draw-area relative">
            {seat.map((rows) => <DrawTr key={rows[0].id} rows={rows}></DrawTr>)}
        </div>
    )
}

function DrawTr(props) {
    const { seatNum, isShow } = useContext(inputDataContext)
    const rows = props.rows

    return (
        <>
            {rows.map(value =>
                <div key={value.id} className="draw-area-td " id={'seat-' + value.id} style={{ top: value.top + 'px', left: value.left + 'px' }}>
                    {(isShow.number) && <span>{value.number}</span>}
                    {(isShow.name) && <span>{value.name}</span>}
                    {(isShow.sex) && <span>{value.sex}</span>}

                </div>
            )
            }
        </>
    )
}

function OptionArea() {
    const { seatNum, isShow } = useContext(inputDataContext)

    function updateRowNum(e) {
        seatNum.setRowNum(e.target.value)
    }
    function updateColumnNum(e) {
        seatNum.setColumnNum(e.target.value)
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
                    <input type="number" min="1" max="50" value={seatNum.rowNum} onChange={e => updateRowNum(e)} className="
                    bg-blue-100
                    rounded-md
                    text-center
                    ml-2
                    w-16
                    "></input>
                </label>

                <label className="">
                    行:
                    <input type="number" min="1" max="50" value={seatNum.columnNum} onChange={e => updateColumnNum(e)} className="
                    bg-blue-100
                    rounded-md
                    text-center
                    ml-2
                    w-16
                    "></input>
                </label>
            </div>
            <div className="flex flex-col justify-around h-20">
                <label className="">
                    <input type="checkbox" checked={!isShow.number} onChange={() => { isShow.setNumber(!isShow.number) }} className="
                    bg-blue-100
                    rounded-md
                    text-center
                    ml-2
                    w-8
                    "></input>
                    番号の非表示
                </label>
                <label className="">
                    <input type="checkbox" checked={!isShow.name} onChange={() => { isShow.setName(!isShow.name) }} className="
                    bg-blue-100
                    rounded-md
                    text-center
                    ml-2
                    w-8
                    "></input>
                    名前の非表示
                </label>
                <label className="">
                    <input type="checkbox" checked={!isShow.sex} onChange={() => { isShow.setSex(!isShow.sex) }} className="
                    bg-blue-100
                    rounded-md
                    text-center
                    ml-2
                    w-8
                    "></input>
                    性別の非表示
                </label>
            </div>
        </div>
    )
}
export default Main;