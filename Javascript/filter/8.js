data = [
    { name: 'Event 1', date: '2023-09-10' },
    { name: 'Event 2', date: '2023-10-15' },
    { name: 'Event 3', date: '2023-09-20' },
    { name: 'Event 4', date: '2023-07-25' },
  ];

  edate = '2023-10-15';
  newd = data.filter(e => e.date >= edate ? e.date : 0);
  console.log(newd);  