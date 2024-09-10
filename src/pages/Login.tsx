import backgroundImage from "../assets/background.jpg";

function Login() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg">
        <p className="text-2xl font-bold">Login</p>
      </div>
    </div>
  );
}

export default Login;
