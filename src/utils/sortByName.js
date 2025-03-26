export const sortByName = (a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    
    return nameA.localeCompare(nameB, undefined, { numeric: true });
  };
  