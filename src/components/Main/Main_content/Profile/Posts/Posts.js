import './Posts.css'
import React from 'react';

const Posts = () => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }



    return (
        <div className='Content posts'>
            <div className="Content__container">
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost} type="button">Нажми на меня</button>
            </div>

        </div>
    )
}

export default Posts;