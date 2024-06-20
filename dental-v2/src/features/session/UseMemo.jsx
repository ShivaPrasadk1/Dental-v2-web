import React, { useState, useMemo } from 'react';

const UseMemo = () => {
//   const [items, setItems] = useState([
//     { id: 1, name: 'Item 1', category: 'A' },
//     { id: 2, name: 'Item 2', category: 'B' },
//     { id: 3, name: 'Item 3', category: 'A' },
//     { id: 4, name: 'Item 4', category: 'C' },
//     { id: 5, name: 'Item 5', category: 'A' },
//   ]);

//   const categoryToCountMap = useMemo(() => {
//     console.log('Calculating category count...');
//     const countMap = {};
//     items.forEach(item => {
//       countMap[item.category] = (countMap[item.category] || 0) + 1;
//     });
//     return countMap;
//   }, [items]); // Re-compute only when 'items' change

//   const handleAddItem = () => {
//     setItems([
//       ...items,
//       { id: items.length + 1, name: `Item ${items.length + 1}`, category: 'A' },
//     ]);
//   }

//   return (
//     <div>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>{item.name} - Category: {item.category}</li>
//         ))}
//       </ul>
//       <p>Category Counts:</p>
//       <ul>
//         {Object.keys(categoryToCountMap).map(category => (
//           <li key={category}>{category}: {categoryToCountMap[category]}</li>
//         ))}
//       </ul>
//       <button onClick={handleAddItem}>Add Item</button>
//     </div>
//   );
const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);


    const handleAddRandom = () => {
    setNumbers([...numbers, Math.floor(Math.random() * 10)]);
    }

  // Function to calculate sum (without useMemo)
  const calculateSum = () => {
    console.log('Calculating sum...');
    return numbers.reduce((acc, curr) => acc + curr, 0);
  };

  const sum = calculateSum(); // Sum is recalculated on every render

  return (
    <div re>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <p>Sum: {sum}</p>
      <button onClick={handleAddRandom}>Add random</button>
    </div>
  );
};

export default UseMemo;
