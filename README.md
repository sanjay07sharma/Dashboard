# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Chart.js Setup and Usage

### Installation

1. **Using npm:**

   ```bash
   npm install chart.js
   ```

2. **Using CDN:**

   Add the following script tag to your HTML:

   ```html
   <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
   ```

### Basic Setup

1. **HTML Structure:**

   Create a `<canvas>` element in your HTML where the chart will be rendered:

   ```html
   <canvas id="myChart" width="400" height="200"></canvas>
   ```

2. **JavaScript Initialization:**

   Initialize Chart.js by adding the following JavaScript code:

   ```javascript
   // Import Chart.js if using modules
   // import Chart from 'chart.js';

   // Get the context of the canvas element we want to use
   var ctx = document.getElementById('myChart').getContext('2d');

   // Create a new Chart instance
   var myChart = new Chart(ctx, {
       type: 'bar', // Specify the type of chart (e.g., 'bar', 'line', 'pie')
       data: {
           labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
           datasets: [{
               label: '# of Votes',
               data: [12, 19, 3, 5, 2, 3, 7],
               backgroundColor: [
                   'rgba(255, 99, 132, 0.2)',
                   'rgba(54, 162, 235, 0.2)',
                   'rgba(255, 206, 86, 0.2)',
                   'rgba(75, 192, 192, 0.2)',
                   'rgba(153, 102, 255, 0.2)',
                   'rgba(255, 159, 64, 0.2)',
                   'rgba(255, 99, 132, 0.2)'
               ],
               borderColor: [
                   'rgba(255, 99, 132, 1)',
                   'rgba(54, 162, 235, 1)',
                   'rgba(255, 206, 86, 1)',
                   'rgba(75, 192, 192, 1)',
                   'rgba(153, 102, 255, 1)',
                   'rgba(255, 159, 64, 1)',
                   'rgba(255, 99, 132, 1)'
               ],
               borderWidth: 1
           }]
       },
       options: {
           scales: {
               y: {
                   beginAtZero: true
               }
           }
       }
   });
   ```

### Customization

- **Change Chart Type:**
  Modify the `type` property in the `Chart` constructor (e.g., 'line', 'pie').

- **Update Data:**
  Change the `data` property within the `datasets` array.

- **Modify Appearance:**
  Customize colors, borders, and other visual aspects in the `datasets` object and `options` property.

### Documentation

For more detailed configuration and advanced features, refer to the [Chart.js documentation](https://www.chartjs.org/docs/latest/).


---

## Recharts.js Setup and Usage

### Installation

1. **Using npm:**

   ```bash
   npm install recharts
   ```

2. **Using yarn:**

   ```bash
   yarn add recharts
   ```

### Basic Setup

1. **React Component Setup:**

   First, ensure you have React and ReactDOM installed in your project.

2. **Create a Chart Component:**

   Import the necessary components from Recharts and create a chart component. For example, here's how to set up a basic bar chart:

   ```javascript
   // Import necessary components from Recharts
   import React from 'react';
   import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

   // Sample data for the chart
   const data = [
     { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
     { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
     { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
     { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
     { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
     { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
     { name: 'July', uv: 3490, pv: 4300, amt: 2100 },
   ];

   // Define the chart component
   const SimpleBarChart = () => (
     <BarChart
       width={600}
       height={300}
       data={data}
       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
     >
       <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="name" />
       <YAxis />
       <Tooltip />
       <Legend />
       <Bar dataKey="uv" fill="#8884d8" />
       <Bar dataKey="pv" fill="#82ca9d" />
     </BarChart>
   );

   export default SimpleBarChart;
   ```

3. **Using the Chart Component:**

   In your main component or App file, import and use the `SimpleBarChart` component:

   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom';
   import SimpleBarChart from './SimpleBarChart'; // Adjust the path as needed

   const App = () => (
     <div>
       <h1>My Recharts Example</h1>
       <SimpleBarChart />
     </div>
   );

   ReactDOM.render(<App />, document.getElementById('root'));
   ```

### Customization

- **Change Chart Type:**
  Use different components like `LineChart`, `PieChart`, `AreaChart`, etc., based on your needs.

- **Update Data:**
  Modify the `data` array to reflect the data you want to visualize.

- **Customize Appearance:**
  Adjust properties of `Bar`, `Line`, `Pie`, and other chart components to customize colors, labels, tooltips, and more.

### Documentation

For further customization and advanced usage, refer to the [Recharts documentation](https://recharts.org/en-US/).
