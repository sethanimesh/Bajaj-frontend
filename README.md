
# React Front-End for Backend Integration

## Overview

This project is a React-based front-end application designed to interact with a REST API that processes JSON data, returning specific information such as numbers, alphabets, and the highest lowercase alphabet from the input. The application accepts JSON inputs, sends them to the backend API, and displays the result based on user-selected options.

## Features

- **Input Field**: Allows the user to input a valid JSON.
- **Validation**: Ensures that the input follows the proper JSON format.
- **Dropdown Filters**: Allows users to filter the response by selecting "Alphabets," "Numbers," or "Highest Lowercase Alphabet."
- **Dynamic Rendering**: Renders the filtered results based on user input and selection.

## Tech Stack

- **React.js**: For building the UI components and handling frontend logic.
- **Axios**: For making API calls to the backend.
- **CSS**: Basic styling for UI elements.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sethanimesh/Bajaj-frontend.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file at the root directory and add your backend API URL:

```bash
REACT_APP_BACKEND_URL=https://your-backend-api-url.com/bfhl
```

4. Start the development server:

```bash
npm start
```

Your application will be running on [http://localhost:3000](http://localhost:3000).

## Usage

1. **Enter JSON**: The input field accepts JSON data in the following format:

    ```json
    { "data": ["A", "B", "1", "2", "a"] }
    ```

2. **Submit**: After submitting the JSON, the app will make a POST request to the backend.

3. **Select Filters**: After receiving a valid response, a multi-select dropdown will appear where you can choose what to display (Alphabets, Numbers, or Highest Lowercase Alphabet).

4. **View Results**: The filtered response is displayed based on your selection.

## Example

- Input:

    ```json
    { "data": ["A", "B", "1", "2", "z", "m"] }
    ```

- After submitting and selecting filters for **Alphabets** and **Highest Lowercase Alphabet**, the output will be:

    ```
    Alphabets: A, B, z, m
    Highest Lowercase Alphabet: z
    ```

## Deployment

To deploy the project, follow the steps for your chosen platform (Netlify/Vercel/Firebase/etc.):

1. Build the project:

```bash
npm run build
```

2. Deploy using the appropriate platform instructions (e.g., Netlify drag-and-drop, Vercel CLI).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Built as part of a full-stack challenge involving both frontend and backend development.
- Special thanks to [Bajaj Finserv Health Challenge] for providing the project requirements.

