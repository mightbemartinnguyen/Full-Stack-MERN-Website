import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'images/snake-game-code.png',
        thumbnail: 'images/snake-game-code.png',
        description: 'This is another project showing the game Snake written in Python. This version of the code also has a high score tracker.',
        originalHeight: '450px',
    },
    {
        original: 'images/turtle-crossing-project.png',
        thumbnail: 'images/turtle-crossing-project.png',
        description: 'This is Python project showing a game of a turtle crossing the road. The game also includes different levels, and a high score tracker.',
        originalHeight: '450px',
    },
    {
        original: 'images/editing-software.png',
        thumbnail: 'images/editing-software.png',
        description: 'Another hobby of mine is that I also do video editing. So this is a screenshot of some editing software.',
        originalHeight: '450px',
    },
    {
        original: 'images/bankCode.png',
        thumbnail: 'images/bankCode.png',
        description: 'Project of a bank account using inheritance and polymorphism in C++.',
        originalHeight: '450px',
    },
    {
        original: 'images/piano-synthesizer-view.jpeg',
        thumbnail: 'images/piano-synthesizer-view.jpeg',
        description: 'Synthesizers are the only instrument that I know how to play. This is mainly to help with DJing during parties.',
        originalHeight: '450px',
    },
    {
        original: 'images/usStatesCode.png',
        thumbnail: 'images/usStatesCode.png',
        description: 'Python project using a csv file to create a quiz game to learn about the US states.',
        originalHeight: '450px',
    },
    {
        original: 'images/picture-soccer-goal.jpg',
        thumbnail: 'images/picture-soccer-goal.jpg',
        description: 'Watching soccer is my favorite pastime. Unfortunately, there aren\'t many opportunities to play around my area as soccer is not as popular as other sports.',
        originalHeight: '450px',
    },
    {
        original: 'images/picture-music-mixer.jpeg',
        thumbnail: 'images/picture-music-mixer.jpeg',
        description: 'My dad and I occasionally DJ as a hobby on the weekends for parties, these can be both for family, friends, and as a paid gig.',
        originalHeight: '450px',
    },
    {
        original: 'images/SF-LOL-WC.jpeg',
        thumbnail: 'images/SF-LOL-WC.jpeg',
        description: 'View from Oracle Arena during the League of Legends World finals. This is one of my favorite hobbies, watching esports (competitive video games) competitions. Although I do tend to play much less nowadays.',
        originalHeight: '450px',
    },
 
];

function GalleryPage() {
    return (
        <>
            <h2>Gallery</h2>
            <p>Welcome to the gallery showcasing various projects and hobbies.</p>
            <article>
                <ImageGallery items={images} />
            </article>
        </>
    );
}

export default GalleryPage;