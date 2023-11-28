
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend, PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import { Link } from "react-router-dom";
import React from 'react';
import jsPDF from 'jspdf';

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

export const Analisis = () => {
    const handleDescargarPDF = () => {
        // Crear un nuevo objeto jsPDF
        const pdf = new jsPDF();
    
        // Agregar contenido vacío o personalizado según tus necesidades
        pdf.text('Documento PDF vacío', 20, 20);
    
        // Descargar el PDF
        pdf.save('ReporteUtilidad.pdf');
      };

    return (
        <>
        <section className="flex flex-col justify-items-start items-start w-[100%] overflow-y-scroll overflow-x-hidden">

            <div className="flex flex-col m-6 text-black text-3xl font-semibold font-['Nunito Sans']" >
                <h2>ANALISIS</h2>
            </div>

            <section className="w-[97%]">
                <div className="flex flex-col w-[100%] h-[500px] card justify-center  shadow-lg ml-6 mr-6 m-3 rounded-md">

                    <div className="flex flex-row items-center justify-between mt-7 ml-10 mr-10">
                        <div className="text-black text-3xl font-normal font-['Nunito']">Utilidad</div>
                        <Link to="/analisis">
                            <div className="text-right text-xl font-extralight font-['Nunito']">
                            <div>
                        </div>Ver reporte</div>
                        <button className="text-right text-blue-400 text-xl font-extralight font-['Nunito'] underline decoration-solid" onClick={handleDescargarPDF}>Descargar PDF</button>
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
                                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={140} fill="#7BA8FF" label>
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