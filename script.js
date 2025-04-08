const Quotes = [
    { author: 'Walt Disney', message: 'The best way to get started is to quit talking and begin doing.' },
    { author: 'Nelson Mandela', message: 'It always seems impossible until it\'s done.' },
    { author: 'Albert Einstein', message: 'Life is like riding a bicycle. To keep your balance, you must keep moving.' },
    { author: 'Steve Jobs', message: 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.' },
    { author: 'Theodore Roosevelt', message: 'Believe you can and you\'re halfway there.' },
    { author: 'Mahatma Gandhi', message: 'Be the change that you wish to see in the world.' },
    { author: 'Mark Twain', message: 'The secret of getting ahead is getting started.' },
    { author: 'Abraham Lincoln', message: 'The best way to predict the future is to create it.' },
    { author: 'Leonardo da Vinci', message: 'Learning never exhausts the mind.' },
    { author: 'Confucius', message: 'Our greatest glory is not in never falling, but in rising every time we fall.' },
    { author: 'Oscar Wilde', message: 'Be yourself; everyone else is already taken.' },
    { author: 'Aristotle', message: 'It is the mark of an educated mind to be able to entertain a thought without accepting it.' },
    { author: 'Ralph Waldo Emerson', message: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.' },
    { author: 'J.K. Rowling', message: 'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.' },
    { author: 'Martin Luther King Jr.', message: 'Injustice anywhere is a threat to justice everywhere.' }
];

const quote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    document.getElementById('author').textContent = Quotes[randomIndex].author;
    document.getElementById('message').textContent = Quotes[randomIndex].message;
}