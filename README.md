# Stock Tracker

The Stock Tracker application allows users to track and monitor stocks and their performance. The Stock Tracker is built using [React](https://reactjs.org/) and IEX Cloud API to request for latest stock prices.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

The Stock Tracker provides a user-friendly interface for tracking and analyzing stocks. It fetches real-time stock data from a third-party API and displays the data in a visually appealing manner, allowing users to monitor the performance of their favorite stocks.

## Features

- View detailed information about stocks, including current price, market cap, volume, etc.
- Save favorite stocks to track and monitor.
- Historical data for stocks, including opening and closing prices, high and low values.

## Installation

To run the Stock Tracker locally, follow these steps:

1. Clone the repository or download the source code as a ZIP file.
2. Navigate to the project directory in your terminal.
3. Install the dependencies for both the client and server by running the command:
   ```
   npm install
   ```
4. Create a `.env` file in the root of the server directory and provide the necessary environment variables. Refer to the `.env.example` file for the required variables.
5. Start the client and server concurrently by running the command:
   ```
   npm run dev
   ```
6. Access the Stock Tracker in your web browser at `http://localhost:3000`.

## Usage

1. find and view information about specific stocks.
2. Explore the stock details, including current price, market cap, volume, and more.
3. Save favorite stocks to your watchlist for easy access and monitoring.

## API

The Stock Tracker relies on a third-party API to fetch real-time stock data i.e, IEX Cloud API to request for latest stock prices. To use the application, you need to obtain an API key from a supported API provider. Once you have the API key, update the `.env` file with the necessary configuration variables.

## Contributing

Contributions to the Stock Tracker are welcome! If you would like to contribute to add feture such as ;-
-search for your favorite stock
-create a watchlist
-user signin and registration
-graph and charts to show stock data 
-set alarm and notification when stock hits certain prices
-UI fixes





## License

The Stock Tracker is open source and released under the [MIT License](LICENSE). You are free to use, modify, and distribute the code as per the license terms.



## Acknowledgments

The Stock Tracker relies on the availability of third-party APIs and open-source libraries. We would like to acknowledge the contributions of these providers and the developer community, as well as the availability of free and accessible tools that make projects like this possible.
