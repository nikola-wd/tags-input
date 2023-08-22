import { useState } from 'react';
import TagsInput from './components/TagsInput';
import './index.css';

function App() {
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTrySubmit = () => {
    console.log('Tried Submi');
  };

  return (
    <>
      <TagsInput
        className="flex-1"
        tags={keywords}
        setTags={setKeywords}
        minTags={2}
        maxTags={5}
        tagMinChars={2}
        tagMaxChars={12}
        disabled={loading}
        placeholder={`Type ${2} - ${5} keywords ...`}
        onSubmit={handleTrySubmit}
      />
    </>
  );
}

export default App;
