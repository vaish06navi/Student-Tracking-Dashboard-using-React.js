// Generate random integer within a range
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // Generate random Indian names
  const generateRandomName = () => {
    const firstNames = ['Aarav', 'Vihaan', 'Advik', 'Kabir', 'Ayaan', 'Arjun', 'Reyansh', 'Aniket', 'Aryan', 'Shaurya'];
    const lastNames = ['Sharma', 'Verma', 'Gupta', 'Singh', 'Patel', 'Reddy', 'Pandey', 'Mehta', 'Shah', 'Yadav'];
    const firstName = firstNames[getRandomInt(0, firstNames.length - 1)];
    const lastName = lastNames[getRandomInt(0, lastNames.length - 1)];
    return `${firstName} ${lastName}`;
  };
  
  export const studentData = Array.from({ length: 20 }, (_, index) => ({
    name: generateRandomName(),
    attendance: getRandomInt(70, 100),
    performance: getRandomInt(60, 95),
  }));
  
  export const streamData = [
    { name: 'Engineering', value: getRandomInt(1, 5) },
    { name: 'Medicine', value: getRandomInt(1, 5) },
    { name: 'Law', value: getRandomInt(1, 5) },
    { name: 'Arts', value: getRandomInt(1, 5) },
  ];
  
  export const scholarshipData = [
    { year: 2020, count: getRandomInt(0, 3) },
    { year: 2021, count: getRandomInt(0, 3) },
    { year: 2022, count: getRandomInt(0, 3) },
    { year: 2023, count: getRandomInt(0, 3) },
    { year: 2024, count: getRandomInt(0, 3) },
  ];
  