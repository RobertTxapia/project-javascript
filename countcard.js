let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 2:
    case 2:
    case 2:
    case 2:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  if (count > 0) {
    return 'Bet';
  } else {
    return 'Holt';
  }
}

cc(2);
cc(3);
cc(4);
cc(5);
cc(6);
