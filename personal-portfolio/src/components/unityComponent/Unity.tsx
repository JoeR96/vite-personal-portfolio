const UnityGame: React.FC = () => {
    return (
      <iframe
        title="Space Shooter"
        src="http://localhost:8000/" // Replace with the URL where your game is hosted
        width="640" // Set the width of the iframe to match your game resolution
        height="480" // Set the height of the iframe to match your game resolution
        style={{ border: 'none' }}
      ></iframe>
    );
  };
  
  export default UnityGame;