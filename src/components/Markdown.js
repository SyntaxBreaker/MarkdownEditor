import {useEffect} from 'react';
import styled from 'styled-components';

const MarkdownContainer = styled.section`
    width: 50%;
`;

const Form = styled.form`
    height: 100%;
    width: 100%;
`

const TextArea = styled.textarea`
    height: 100%;
    width: 100%;
    padding: .5rem;
    font-size: 16px;
    background-color: #daddd8;
    color: #1c1c1c;
`

function Markdown({markdown, setMarkdown}) {
    useEffect(() => {
        if(localStorage.getItem('markdown')) {
            setMarkdown(localStorage.getItem('markdown'));
        }
    }, [])

    const handleChange = event => {
        event.preventDefault();
        setMarkdown(event.target.value);
        localStorage.setItem('markdown', event.target.value);
    }

    return (
        <MarkdownContainer>
            <Form>
                <TextArea onChange={handleChange} value={markdown} />
            </Form>
        </MarkdownContainer>
    )
}

export default Markdown;