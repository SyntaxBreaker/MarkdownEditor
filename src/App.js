import {useState} from 'react';
import styled from 'styled-components';
import Markdown from './components/Markdown';
import Preview from './components/Preview';

const Container = styled.div`
  display: flex;
  flex-director: row;
  width: 100%;
  height: 100%;
`;

function App() {
  const [markdownValue, setMarkdownValue] = useState('');

  return (
      <Container>
        <Markdown markdown={markdownValue} setMarkdown={setMarkdownValue} />
        <Preview markdown={markdownValue} setMarkdown={setMarkdownValue} />
      </Container>
  );
}

export default App;