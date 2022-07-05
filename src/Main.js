import { createContext, useContext, useEffect, useState } from "react";
import { SeatContext } from "./Seat";
import { inputDataContext } from "./Seat";

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
        <div className="w-4/5 m-2 ">
            <table className="w-full">
                <tbody className="w-full">
                    {seat.map((rows) => <DrawTr key={rows[0].id} rows={rows}></DrawTr>)}
                </tbody>
            </table>
        </div>
    )
}

function DrawTr(props) {
    const rows = props.rows
    return (
        <tr className="h-24">
            {rows.map(value =>
                <td key={value.id} className="">
                    <div className="w-full h-24 border-2  rounded-2xl flex items-center justify-center">{value.name}</div>
                </td>
            )}
        </tr>
    )
}

function OptionArea() {
    const inputDataValue = useContext(inputDataContext)
    return (
        <div className="flex w-4/5 h-28 items-center justify-around">

            <div className="flex flex-col justify-around h-20">
                <button className="bg-red-500 bg-gradient-to-t from-red-400 hover:opacity-80 box-border active:border-2  border-red-700  transition-opacity rounded-md w-28 h-8 shadow-lg text-white font-bold">Change</button>
                <button className="bg-green-500 bg-gradient-to-t from-green-400 hover:opacity-80 box-border active:border-2  border-green-700  transition-opacity rounded-md w-28 h-8 shadow-lg text-white font-bold">Reset</button>
            </div>
            <div className="flex flex-col justify-around h-20">
                <label className="">
                    列:
                    {/* <input type="number" min="1" max="1000" value={seatNum.rowNum} onChange={e => seatNum.setRowNum(e.target.value)} className="
                    bg-blue-100
                    rounded-md
                    text-center
                    ml-2
                    w-16
                    "></input> */}
                </label>

                <label className="">
                    行:
                    {/* <input type="number" min="1" max="1000" value={seatNum.columnNum} onChange={e => seatNum.setColumnNum(e.target.value)} className="
                    bg-blue-100
                    rounded-md
                    text-center
                    ml-2
                    w-16
                    "></input> */}
                </label>
            </div>
        </div>
    )
}
export default Main;