import React from 'react';

const Question = () => {
        return (
                <div className='bg-light p-5 mt-5'>
                        <h3>Question-1: What are the difference between props and state?</h3>
                        <h5 className='mb-3'>Answer: The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component</h5>

                        <h3>Question-2:How does useState work React Native?</h3>
                        <h5 className='mb-3'>Answer: useState is a function that accepts the initial state as an argument and returns a state value and a function to update this value. This ensures that the React preserves the state between re-renders.</h5>

                        <h3>Question-3: What does useEffect do other than load data?</h3>
                        <h5 className='mb-3'>Answer: After rendering finishes, useEffect will check the list of dependency values against the values from the last render, and will call your effect function if any one of them has changed.</h5>

                        <h3>Question-4: What is React and how does it works?</h3>
                        <h5 className='mb-3'>Answer:                         ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components. It's important to note that ReactJS is not a JavaScript framework.</h5>
                </div>
        );
};

export default Question;