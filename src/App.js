import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import "./css/App.css";

function App() {
  function StrToLan(inputString) {
    const parts = inputString.split("|");

    // Check if the split parts array has two parts for the left and right side of '|'
    if (parts.length === 2) {
      // Get the browser's language
      const language = navigator.language || navigator.userLanguage;

      // Check if the browser's language is Turkish
      if (language === "tr" || language.startsWith("tr-")) {
        // Return the right side of '|'
        return parts[1];
      } else {
        // Return the left side of '|'
        return parts[0];
      }
    } else {
      // If input does not contain '|', return the whole string or an error message
      return inputString || 'Input string does not contain "|" character';
    }
  }

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Hero />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Skills
              StrToLan={StrToLan}
              title={StrToLan("My Expertise|Benim Yeteneklerim")}
              content={StrToLan("ENGLISH CONTENT|TURKISH CONTENT")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ContactMe StrToLan={StrToLan} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
