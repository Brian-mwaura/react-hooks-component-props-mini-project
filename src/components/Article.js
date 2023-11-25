import React from 'react';

function Article({ title, date, preview }) {
    const minutesToRead = Math.ceil(preview.length / 100);
    const coffeeCups = Math.ceil(minutesToRead / 5);
    const bentoBoxes = Math.ceil(minutesToRead / 10);

    const renderCoffeeCups = () => {
        let cups = '';
        for (let i = 0; i < coffeeCups; i++) {
            cups += '☕️';
        }
        return cups;
    };

    const renderBentoBoxes = () => {
        let boxes = '';
        for (let i = 0; i < bentoBoxes; i++) {
            boxes += '🍱';
        }
        return boxes;
    };

    return (
        <article>
            <h3>{title}</h3>
            <small>{date || 'January 1, 1970'}</small>
            <p>{preview}</p>
            <span>
                {minutesToRead < 30 ? renderCoffeeCups() : renderBentoBoxes()}{' '}
                {minutesToRead} min read
            </span>
        </article>
    );
}

export default Article;