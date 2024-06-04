import React, { useState } from "react";

function SpellCheckApp() {

  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };


  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    // Implement a basic spelling check and correction
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const correctedText = correctedWords.join(" ");

    // Set the suggested text (first corrected word)
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setSuggestedText(firstCorrection || "");
  };




  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
};













// // Define a custom dictionary of words and their corrections


// class SpellCheckApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputText: "",
//       suggestedText: "",
//     };
//   }

//   handleInputChange = (e) => {
//     const text = e.target.value;
//     this.setState({ inputText: text });

//     // Implement a basic spelling check and correction
//     const words = text.split(" ");
//     const correctedWords = words.map((word) => {
//       const correctedWord = customDictionary[word.toLowerCase()];
//       return correctedWord || word;
//     });

//     const correctedText = correctedWords.join(" ");

//     // Set the suggested text (first corrected word)
//     const firstCorrection = correctedWords.find(
//       (word, index) => word !== words[index]
//     );
//     this.setState({ suggestedText: firstCorrection || "" });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Spell Check and Auto-Correction</h1>
//         <textarea
//           value={this.state.inputText}
//           onChange={this.handleInputChange}
//           placeholder="Enter text..."
//           rows={5}
//           cols={40}
//         />
//         {this.state.suggestedText && (
//           <p>
//             Did you mean: <strong>{this.state.suggestedText}</strong>?
//           </p>
//         )}
//       </div>
//     );
//   }
// }

export default SpellCheckApp;

























// import logo from './logo.svg';
// import './App.css';

// function App() {

//   function handleSubmit(e) {
//     e.preventDefault();

//   }


//   return (
//     <div className="App">
//       <h1>Login Page</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Username:</label>
//         <input/>
//         <br/>
//         <label>Username:</label>
//         <input/>
//         <br/>
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
