import './App.css';
import Navbar from './Navbar';
import BlogEntries from './BlogEntries.json'
import AdBanner from './AdBanner';

function App() {
  return(
    <div>
      <Navbar />
      <AdBanner />
      <main className="max-w-xl mx-auto mt-8">
        {BlogEntries.map((entry, idx) => (
          <div key={idx} className="mb-8 p-4 border rounded shadow">
            <h3 className="text-xl font-bold">{entry.title}</h3>
            <small className="text-gray-500">
              <em>{entry.date}</em>
            </small>
            <p className="mt-2">{entry.body}</p>
          </div>
        ))}
      </main> 
    </div>
  );
}

export default App;
