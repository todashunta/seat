import logo from './img/logo.svg'


function Header() {
    return (
        <header className="flex items-center justify-between">
            <Logo></Logo>
            <Mode></Mode>
        </header >
    )
}

function Logo() {
    return (
        <div className='flex items-center ml-6 mt-6 bg-blue-100 rounded-xl p-2'>
            <img src={logo} className="w-16 h-16"></img>
            <h1 className="font-bold text-3xl text-blue-400">ChangeSeat</h1>
        </div>
    )
}

function Mode() {
    return (
        <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer m-4 mr-10" >
            <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Color Mode</span>
        </label >
    )
}

export default Header;