
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend, PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import { Link } from "react-router-dom";

const data1 = [{ name: 'Lunes', 'Semana Actual': 500, 'Semana Pasada': 550 },
{ name: 'Martes', 'Semana Actual': 600, 'Semana Pasada': 230 },
{ name: 'Miercoles', 'Semana Actual': 700, 'Semana Pasada': 870 },
{ name: 'Jueves', 'Semana Actual': 800, 'Semana Pasada': 500 },
{ name: 'Viernes', 'Semana Actual': 1000, 'Semana Pasada': 1300 },
{ name: 'Sabado', "Semana Actual": 500, 'Semana Pasada': 600 },
{ name: 'Domingo', "Semana Actual": 300, 'Semana Pasada': 500 }
];

const data2 = [
    { "name": "Enero", "Ventas": 4000, "Gastos": 2400 },
    { "name": "Febrero", "Ventas": 3000, "Gastos": 1398 },
    { "name": "Marzo", "Ventas": 2000, "Gastos": 1800 },
    { "name": "Abril", "Ventas": 2780, "Gastos": 1908 },
    { "name": "Mayo", "Ventas": 1890, "Gastos": 2800 },
    { "name": "Junio", "Ventas": 4390, "Gastos": 1800 },
];

const data02 = [
    { "name": "Esteban Dadul", "value": 5567 },
    { "name": "Carlos Arango", "value": 6398 },
    { "name": "Judith Pérez", "value": 8800 },
    { "name": "Alexander Rangel", "value": 4800 }
];


const COLORS = ['#B3CCFF', '#5F6A85', '#7BA8FF', '#76D4FE', '#11AAFF', '#0094FF'];


export const Inicio = () => {
    return (

        <>
            <section className="flex flex-col justify-items-start items-start w-[100%] overflow-y-scroll overflow-x-hidden">

                <div className="flex flex-col m-6 text-black text-3xl font-semibold font-['Nunito Sans']" >
                    <h2>REPORTES</h2>
                </div>

                <div className=" w-[100%] flex flex-row justify-items-center justify-items-stretch items-stretch">

                    <div className="CuentasPorCobrar w-[100%] h-[130px] card justify-center bg-slate-500 shadow-lg ml-6 m-3 rounded-md">

                        <div className=" flex flex-col left-[20px] top-[20px] absolute text-white text-4xl font-extrabold">$ 2.500.000,00</div>

                        <div className=" flex flex-row justify-end items-end">
                            <div className=" w-32 h-6 left-[20px] top-[70px] absolute text-white text-xl leading-none">Cuentas por cobrar</div>
                            <img className=" w-24 h-35 mt-[35px] pr-4 pb-0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVR4nO3SMQ6EMAxE0bn/pf82plmhFIaQgcxrQyR/HCleAlPaPkQmuLoRmSAhRSbozpOQSchGyujvzKKnNvKZkBVISJEJuvMkZBKykSITdOdJyCRkI0Um6M6zRQh/RmcdSsiuT2sFElJkgu48o4vH2dk33EAJ2fVprUBCikzQnWd08Tg7+4YbKCG7Pq0VSEiRCbrzJGQSshFT6q7SjULv8AOerbCyY2D5PAAAAABJRU5ErkJggg=="></img>
                        </div>
                    </div>

                    <div className="hidden-ms CuentasPorPagar w-[100%] h-[130px] card justify-center  bg-slate-500 shadow-lg m-3 rounded-md">

                        <div className="left-[20px] top-[20px] absolute text-white text-4xl font-extrabold">$ 500.000,00</div>

                        <div className=" flex flex-row justify-end">
                            <div className=" w-32 h-6 left-[20px] top-[70px] absolute text-white text-xl font-bold leading-none">Cuentas por pagar</div>
                            <img className=" w-24 h-35 mt-[35px] pr-4 pb-0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVR4nO3SMQ6EMAxE0bn/pf82plmhFIaQgcxrQyR/HCleAlPaPkQmuLoRmSAhRSbozpOQSchGyujvzKKnNvKZkBVISJEJuvMkZBKykSITdOdJyCRkI0Um6M6zRQh/RmcdSsiuT2sFElJkgu48o4vH2dk33EAJ2fVprUBCikzQnWd08Tg7+4YbKCG7Pq0VSEiRCbrzJGQSshFT6q7SjULv8AOerbCyY2D5PAAAAABJRU5ErkJggg=="></img>
                        </div>

                    </div>

                    <div className="Group3 w-[100%] h-[130px] card justify-center  bg-teal-500 shadow-lg m-3 rounded-md">
                        <div className=" left-[20px] top-[20px] absolute text-white text-4xl font-extrabold">$ 5.000.000,00</div>

                        <div className=" flex flex-row justify-end">
                            <div className="w-32 h-6 left-[20px] top-[80px] absolute text-white text-xl font-bold leading-none">Ventas</div>
                            <img className="w-24 h-35 mt-[40px] pr-6 pb-0" src="data:image/png;base64,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" />
                        </div>


                    </div>

                    <div className="'Semana Actual' w-[100%] h-[130px] card justify-center  bg-sky-500 shadow-lg mr-6 m-3 rounded-md">
                        <div className=" left-[20px] top-[20px] absolute text-white text-4xl font-extrabold">$ 5.000.000,00</div>

                        <div className=" flex flex-row justify-end">
                            <div className="w-32 h-6 left-[20px] top-[80px] absolute text-white text-xl font-bold leading-none">Utilidad</div>
                            <img className="w-24 h-35 mt-[45px] pr-6 pb-0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADOklEQVR4nO3czW9NQRjH8VEs1MtCLQmJVrpvSGi9JiLRaCvRiH8CRcLeS8oOOyRIX0ST/hVoLRT/AHbeRZpotAm+MrkjQuXcKzkz55n290nu9t5nZpJz5s55fsc5ERERERERERERESkXsAW4AtwHxkr8DAMDwMqSS164gJ3ADHE9A1ZVPdYsAE9J42zVYzUPWA78SLQg41WPNwvA20QLcrXqsWYBOJNgMb4A7VWPNQvAEuAk8DLC5WsWeAhsr3qcIiIiIosYsAnoBfpL/BwBtvrtpMtr67st1F7mXPQAGxst4hLwnXj8/rvFGQesAyYizoOf4wv1ijhMGiPOOOBeornoKypiNFERX4EmZxSwFJhLNBfDRYWMJCoihwWZtbAgfYmKyOGSNVr5JSsUcjHyTf1BJjf1lrABieUbcL7RYjaErVnZ294OlxmgI9K2d33VYxMRERFZxIBOYDLC0YFvFHgFnMjhxJfaSe9AqLnsJoe5cHC5o14R7QnaJ73TzjjStAHNFLYBAddJ440zDniXaC6uFRUxnqgIfzSzzBmFlVZS4FyiIp4444CpyputfWt8aJGP3T7Z6YwDukKtMU3VjSP4EElooRwqOaTiQy+DQKvLBNAGXI4Q2BkKu83mqscoIiIiskiFbe+pkKUue9vrM99tDdZxCLhVcg1j4Tu7s8iphz+GzxMcqHXVqWOQ+C6Zz6lbODqh9mcsxTmS/43NpnPqFg4XgWOkc9T64WKq4/fXBTXsIp0u0zl1Cw+ogKbwxDK2iaInl2Zy6v6xIvAoQrOxvwS8AI7Xe4RLrY3zDvCZ8vnvvA2srVODcuoiIiIiC5uFnDq1Q84DJdfQH76zoZdPKqceAPuAj8TzAdjrCiin/nsi1gCfiM//xuqCBVFOPfHLC7xe9w/KqVcTzfZ6ChZEOXVjlyzl1H/xN9xw443lPbDHFVBOff6ENAP7I2x7/Xeu+I86lFMXERERWXgs5NSpNTncBaYp33RooCh8Z5dy6n+2AT0mvkkDbUD2c+rAbmw0yimn7qmV1F6zdauRZmvl1P96u3ZshW+VVk59/oR0AzcjBHZuAAcbrEE5dREREREREREREXFZ+AmVPBb6nwofWQAAAABJRU5ErkJggg=="></img>
                        </div>

                    </div>

                </div>

                <section className="w-[97%]">
                    <div className="flex flex-col w-[100%] h-[500px] card justify-center  shadow-lg ml-6 mr-6 m-3 rounded-md">

                        <div className="flex flex-row items-center justify-between mt-7 ml-10 mr-10">
                            <div className="text-black text-3xl font-normal font-['Nunito']">Utilidad</div>
                            <Link to="/analisis">
                                <div className="text-right text-blue-400 text-xl font-extralight font-['Nunito'] underline decoration-solid">Ver reporte</div>
                            </Link>

                        </div>

                        <div className="flex flex-row items-center justify-between m-3 ml-10 mr-10">
                            <div className="text-black text-5xl font-bold font-['Nunito']">$ 887,00</div>

                            <div className="flex flex-row items-center">
                                <img className="w-14 h-25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABR0lEQVR4nO2ZS07DMBCGfSbOACIVzwOwAakqHKEzuR6syDi9AF1wCMoCfmQcqanzUDZE4zKfNJv4+elPvHCcMwzDMI6REvVlKJczjKpgyC5WVbgcIdTnBP/B8AhFkE9CfeVyluAcZRhV0SfRlilRXbucJTgHGZ4ooVqG4C/iyXSw0a+ezSfPZBfGOg0QZNFNQr4J1WNPEvepTDwA5EalBEOeQnsqEsfUD6pkCLJIX6e2xJDImEwJfzurxBpyFhbuSvhlu9+QSNO2bMYcyDDkdDYRgkiPxCrtNybStK+6Mv51NhGGf0k/7IF+oyKBeCjsZQj++c8F9otvTgi+Zsh2DX831G+KSCDMEeZiiA9zO21MFVEPm4gyLBFtWCLasES0YYlowxLRhiWiDUtEG0eUiGxbNyRvLlfo9wJP3kNl+6PHMAzD+Bf8ACsnSZJaKpmqAAAAAElFTkSuQmCC" />
                                <div className="text-right text-teal-300 text-5xl font-bold font-['Nunito']">62,57%</div>
                            </div>

                        </div>

                        <ResponsiveContainer width="96%" height="95%">
                            <LineChart data={data1} margin={{ top: 20, right: 20, bottom: 30, left: 0 }}>
                                <Legend align='right' />
                                <Line type="monotone" dataKey="Semana Actual" stroke="#7BA8FF" strokeWidth={3} />
                                <Line type="monotone" dataKey="Semana Pasada" stroke="#5F6A85" strokeWidth={3} />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                            </LineChart>

                        </ResponsiveContainer>

                    </div>

                    <div className="flex flex-row w-[100%] ml-6 mt-6">

                        <div className="flex flex-col w-[50%] h-[400px] card shadow-lg ml-0 mr-6 m-3 rounded-md">

                            <div className="flex flex-row items-start mt-4 ml-10 mr-10">
                                <div className="text-black text-3xl font-normal font-['Nunito']">Ventas</div>
                            </div>

                            <ResponsiveContainer width="95%" height="95%">
                                <BarChart data={data2} margin={{ top: 30, right: 20, bottom: 35, left: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="Ventas" fill="#7BA8FF" />
                                    <Bar dataKey="Gastos" fill="#5F6A85" />
                                </BarChart>
                            </ResponsiveContainer>

                        </div>



                        <div className="flex flex-col w-[52%] h-[400px] card shadow-lg m-3 mr-0 rounded-md">

                            <div className="flex flex-row items-start mt-4 ml-10 mr-10">
                                <div className="text-black text-3xl font-normal font-['Nunito']">Ventas - Vendedor</div>
                            </div>

                            <ResponsiveContainer width="95%" height="95%">
                                <PieChart>
                                    <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={0} innerRadius={60} outerRadius={140} fill="#7BA8FF" label>
                                        {data02.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Legend layout='vertical' align='right' verticalAlign='middle' />
                                </PieChart>
                            </ResponsiveContainer>

                        </div>

                    </div>

                </section>

            </section>


        </>

    );

}