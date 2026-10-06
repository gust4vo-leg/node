import mysql from 'mysql2/promise';

export function criarPool() {
    return mysql.createPool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASS || '',
        database: process.env.DB_NAME,
        waitForConnections: true, // Permite fila, se estivere False, as 11º conexão retorna erro
        connectionLimit: 10, // Limite máx de conexões simultaneas
        queueLimit: 0  
    })
}