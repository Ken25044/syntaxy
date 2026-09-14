import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

process.env.FIRESTORE_EMULATOR_HOST = '127.0.0.1:8080';
initializeApp({ projectId: 'demo-syntaxy' });
const db = getFirestore();

async function run() {
  const snap = await db.collection('questions').where('mode', '==', 'personalized').get();
  console.log('Total personalized questions:', snap.size);
  const map = {};
  snap.docs.forEach(d => {
    const text = d.data().english_text;
    map[text] = (map[text] || 0) + 1;
  });
  console.log(map);
  process.exit(0);
}
run();
