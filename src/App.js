import './App.css';
import CreativeInput from './UI Components/CreativeInput';
import ImageFeed from './UI Components/ImageFeed';
import SearchBar from './UI Components/InputBar';

function App() {
  return (
    <>
      <CreativeInput children={<SearchBar></SearchBar>}></CreativeInput>
      <ImageFeed></ImageFeed>
    </>
  );
}

export default App;
