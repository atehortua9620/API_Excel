const axios = require('axios');
const ExcelJS = require('exceljs');
const fs = require('fs');

// API URL in a variable    
const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

// Nombre del archivo Excel
const FILE_NAME = 'datos_api.xlsx';

async function adquireData(params) {
 try {
    // 1. Obtener datos desde la API
    const response = await axios.get(API_URL);
    console.log(response.data)

      } catch (error) {
    console.error('❌ Error:', error.message);
  }
    
}

adquireData();
module.exports = adquireData;