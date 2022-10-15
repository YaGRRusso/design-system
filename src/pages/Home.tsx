import { Text } from "../components/Text";
import { Title } from "../components/Title";
import { Link } from "react-router-dom";
import { Logo } from "../svgs/Logo";

export const Home = () => {
  return (
    <div className="bg-gray-900 p-4 gap-12 min-h-screen flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center">
        <Logo />
        <Title className="mt-4" size="lg">
          Bem-Vindo!
        </Title>
        <Text asChild>
          <Link className="hover:underline underline-offset-2" to="/signin">
            Fazer login
          </Link>
        </Text>
      </div>
    </div>
  );
};

export default Home;
