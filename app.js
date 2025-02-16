// app.js

// Kreiranje React komponente
function App() {
    return (
        <div>
            <h1>Zdravo, svete!</h1>
            <p>Ovo je React komponenta u HTML-u.</p>
        </div>
    );
}

// Renderovanje komponente u HTML element sa id "root"
ReactDOM.render(<App />, document.getElementById('root'));