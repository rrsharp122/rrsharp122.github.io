const mountApp = () => {
    const root = document.getElementById('react-root');
    if (root) {
        const element = React.createElement(Homepage);
        ReactDOM.render(element, root);
    }
};

document.addEventListener('DOMContentLoaded', mountApp);
