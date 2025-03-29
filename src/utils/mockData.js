export const generateMockData = (query) => {
  // Simulate different types of data based on query content
  if (query.toLowerCase().includes('sales') || query.toLowerCase().includes('revenue')) {
    return {
      type: 'line',
      data: [
        { name: 'Jan', value: 4000 },
        { name: 'Feb', value: 3000 },
        { name: 'Mar', value: 5000 },
        { name: 'Apr', value: 4500 },
        { name: 'May', value: 6000 },
        { name: 'Jun', value: 7000 },
      ],
      xAxis: 'Month',
      yAxis: 'Sales ($)',
      title: 'Sales Trends'
    };
  }

  if (query.toLowerCase().includes('products')) {
    return {
      type: 'bar',
      data: [
        { name: 'Product A', value: 3500 },
        { name: 'Product B', value: 2800 },
        { name: 'Product C', value: 4200 },
        { name: 'Product D', value: 3100 },
        { name: 'Product E', value: 5600 },
      ],
      xAxis: 'Products',
      yAxis: 'Units Sold',
      title: 'Product Performance'
    };
  }

  // Default response
  return {
    type: 'pie',
    data: [
      { name: 'Category A', value: 400 },
      { name: 'Category B', value: 300 },
      { name: 'Category C', value: 300 },
      { name: 'Category D', value: 200 },
    ],
    title: 'Data Distribution'
  };
};

export const processQuery = (query) => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      resolve(generateMockData(query));
    }, 1500);
  });
}; 