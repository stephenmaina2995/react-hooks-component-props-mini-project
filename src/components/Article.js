import React from 'react';

const Article = ({ title, date, minutes, preview }) => {
  const currentDate = date ? date : 'January 1, 1970';
  const icon = minutes <= 30 ? '=' : '🍱';
  const icons = minutes <= 30 ? Math.floor(minutes / 5) : Math.floor(minutes / 10);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {currentDate}.{icon.repeat(icons)} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
