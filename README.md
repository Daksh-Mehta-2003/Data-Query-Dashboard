# Gen AI Analytics Dashboard

A React-based dashboard prototype for visualizing data through natural language queries. This project demonstrates a modern approach to data visualization with an AI-powered interface.

## Features

- Natural language query input with AI-powered suggestions
- Real-time query processing simulation
- Interactive data visualization using charts
- Query history tracking
- Responsive and modern UI design
- State management with Redux

## Tech Stack

- React.js
- Redux Toolkit for state management
- Material-UI for components and styling
- Recharts for data visualization
- Modern JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Navigate to the project directory:
   ```bash
   cd dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   npm install recharts
   npm install @reduxjs/toolkit react-redux
   npm install @mui/material @emotion/react @emotion/styled
   npm install redux
   npm install @reduxjs/toolkit react-redux
   

4. Start the development server:
   ```bash
   npm start
   ```




The application will be available at `http://localhost:3000`.

## Usage

1. Enter your business question in the query input field
2. Select from AI-powered suggestions or type your own query
3. Submit the query to see visualized results
4. View your query history and reuse previous queries

## Project Structure

```
src/
├── components/
│   ├── QueryInput.js     # Query input with suggestions
│   ├── QueryHistory.js   # History of previous queries
│   └── ResultsDisplay.js # Data visualization component
├── store/
│   ├── store.js         # Redux store configuration
│   └── querySlice.js    # Query-related state management
├── utils/
│   └── mockData.js      # Mock data generation
├── App.js               # Main application component
└── index.js            # Application entry point
```

## Development

The project uses a modular architecture with the following key aspects:

- **Component-Based Structure**: Each feature is encapsulated in its own component
- **Redux State Management**: Centralized state management for queries and results
- **Mock Data Generation**: Simulated backend responses for demonstration
- **Material-UI Theming**: Consistent and customizable styling

## Deployment

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## Future Enhancements

- Integration with real backend services
- Advanced query processing capabilities
- More chart types and visualization options
- User authentication and saved queries
- Export functionality for charts and data

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
