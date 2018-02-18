import React, { Component } from 'react'
import DropZone from 'react-dropzone'

class App extends Component {
    render() {
        return(
            <div>
                <h1>Upload Files</h1>

                <DropZone onDrop={file => {
                    var formData = new FormData()
                    formData.append('file', file[0])

                    fetch('http://localhost:4000/upload', {
                        method: 'POST',
                        body: formData
                    })
                }}>

                </DropZone>
            </div>
        )
    }
}

export default App