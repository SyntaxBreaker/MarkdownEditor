import { useEffect } from 'react';
import styled from 'styled-components';
import {marked} from 'marked';

const PreviewContainer = styled.section`
    width: 50%;
`;

const PreviewBody = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    overflow-y: scroll;
    padding: 1.5rem;
    
    * {
        margin: .5rem 0;
    }
`;

function Preview({markdown, setMarkdown}) {
    useEffect(() => {
        if(markdown === '' && localStorage.getItem('markdown')) {
            setMarkdown(localStorage.getItem('markdown'));
        }
    }, []);

    return (
        <PreviewContainer>
            <PreviewBody dangerouslySetInnerHTML={{__html: marked.parse(markdown)}} />
        </PreviewContainer>
    )
}

export default Preview;