import {useEffect} from 'react';
import styled from 'styled-components';

const MarkdownContainer = styled.section`
    width: 50%;
`;

const TextArea = styled.textarea`
    height: 100%;
    width: 100%;
    background-color: silver;
`

function Markdown({markdown, setMarkdown}) {
    useEffect(() => {
        if(markdown) {
            localStorage.setItem('markdown', markdown);
        }
    }, [markdown]);

    useEffect(() => {
        if(localStorage.getItem('markdown')) {
            setMarkdown(localStorage.getItem('markdown'));
        }
    }, [])

    const handleChange = event => {
        event.preventDefault();
        setMarkdown(event.target.value);
    }

    return (
        <MarkdownContainer>
            <TextArea onChange={handleChange} value={markdown} />
        </MarkdownContainer>
    )
}

export default Markdown;