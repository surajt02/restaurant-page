import burgergif from '../images/burgerfinal.gif';

const homepage = document.createElement('div');

homepage.innerHTML = `
    <h2>Welcome to GP Burger!</h2>
    <p>Delicious burger.</p>
    <img src="${burgergif}" width="500px" alt="Delicious burger" />
    <p>Check out our menu for more delicious options!</p>
`;

export { homepage };
