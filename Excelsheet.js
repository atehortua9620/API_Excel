import { google } from 'googleapis';
import fs from 'fs';

const credentials = JSON.parse(fs.readFileSync('./credentials.json'));

async function escribirEnSheet(values) {
  // Autenticación con Google
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const spreadsheetId = 'TU_ID_DE_HOJA'; // <- el ID está en la URL del Google Sheet
  const range = 'https://docs.google.com/spreadsheets/d/1_jEUZUUyZuKO2ilRPOFJaKG6Z__3KZDCreWtBT8Gjzo/edit?gid=0#gid=0'; // o la hoja que uses

  // Escribir los datos
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'RAW',
    requestBody: {
      values,
    },
  });

  console.log('✅ Datos enviados correctamente a Google Sheets');
}

export default escribirEnSheet;
