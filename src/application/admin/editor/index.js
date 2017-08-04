/**
 * Created by Jack on 4/13/2017.
 */

import React from 'react';
import Radium from 'radium'

// import Katex from 'katex'

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            content: props.content,
        };
    }

    render() {
        return (
            <div className="editor-container">
                <input id="article-title"
                       placeholder="Article's title here" value={this.state.title}/>
                <textarea ref="editor" id="article-content">{this.state.content}</textarea>
            </div>
        );
    }
}

export default Editor;
