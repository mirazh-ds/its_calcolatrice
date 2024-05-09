const frutta = 'Fragole';
switch (frutta) {
  case 'Arancie':
    console.log('Le arancie costano 2 euro.');
    break;
  case 'Fragole':
  case 'Mele':
    console.log('Fragole e mele costano 3 euro.');
    break;
  default:
    console.log(`Non abbiamo più ${frutta}.`);
}