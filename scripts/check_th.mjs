import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serviceAccount = JSON.parse(readFileSync(path.join(__dirname, 'serviceAccountKey.json'), 'utf8'));

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const snap = await db.collection('questions').get();
  let found = false;
  snap.docs.forEach(d => {
    const data = d.data();
    const str = JSON.stringify(data);
    if (str.includes('"th"') || str.includes(' th ') || str.includes(' th"') || str.includes('"th ')) {
      console.log('FOUND in DB:', d.id);
      console.log('ENGLISH TEXT:', data.english_text);
      console.log('OPTIONS:', data.options);
      found = true;
    }
  });
  if (!found) console.log('Not found in DB');
  console.log('Done checking ' + snap.size + ' questions');
  process.exit(0);
}
run();
