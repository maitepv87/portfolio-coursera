import formkitImg from "../images/formkit.png";
import firebaseImg from "../images/firebase.png";
import pokeImg from "../images/poke.png";
import gifImg from "../images/gif.png";
import mapImg from "../images/MAP.png";

export const projects = [
  {
    title: "Form Kit",
    description:
      "FormKit is a modern, accessible, and modular multi-step form built with React and TailwindCSS. It showcases real-world frontend patterns like custom hooks for managing state and validation, step-based navigation, and visual error handling. Its architecture is clean, scalable, and reusable demonstrating thoughtful UI structure, user-centric experience, and best practices in React development.",
    imageUrl: formkitImg,
    projectUrl: "https://formkit.maite.vercel.app",
  },
  {
    title: "Firebase Auth",
    description:
      "Firebase Auth is a testing lab built with React, Redux Toolkit, and Firebase, designed to explore efficient authentication and state management patterns.",
    imageUrl: firebaseImg,
    projectUrl: "https://firebase-auth-sigma-nine.vercel.app/",
  },
  {
    title: "Poke Toolkit",
    description:
      "Pokémon Toolkit is a fast and optimized React application that allows users to browse Pokémon data using the PokéAPI. It showcases best practices in frontend development, including Redux Toolkit for efficient state management, useMemo and useCallback for performance optimization, and a responsive UI with reusable components.",
    imageUrl: pokeImg,
    projectUrl: "https://poke-toolkit.vercel.app/",
  },
  {
    title: "GIF Explorer",
    description:
      "GIF Explorer is a fast and interactive React application that allows users to search, view, and favorite animated GIFs using the Giphy API. It follows best practices in frontend development, leveraging Context API for global state management, useMemo and useCallback for performance optimization, and responsive UI components built with Material UI.",
    imageUrl: gifImg,
    projectUrl: "https://gif-explorer-eight.vercel.app/",
  },
  {
    title: "Map Explorer",
    description:
      "A mapping application integrating OpenStreetMap API, React, TypeScript, and Context API for modular state management.",
    imageUrl: mapImg,
    projectUrl: "https://map-explorer-seven.vercel.app/",
  },
];
