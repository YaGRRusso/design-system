import { Envelope, KeyReturn, Lock } from "phosphor-react";
import { Button, Checkbox, Text, TextInput, Title } from "../components";
import { Logo } from "../svgs/Logo";
import { Link } from "react-router-dom";
import axios from "axios";
import { FormEvent, useCallback, useState } from "react";

export const SignIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = useCallback(async (ev: FormEvent) => {
    ev.preventDefault();

    const res = axios.post("/sessions", {
      email: "yagrrusso@gmail.com",
      password: "senha123segura",
    });

    setIsLoggedIn(true);
  }, []);

  return (
    <div className="bg-gray-900 p-4 gap-12 min-h-screen flex items-center justify-center flex-col">
      <Text size="sm" asChild>
        <Link
          className="hover:underline underline-offset-2 flex gap-1 items-center justify-center"
          to="/"
        >
          <KeyReturn />
          Voltar
        </Link>
      </Text>
      <div className="flex flex-col items-center justify-center">
        <Logo />
        <Title className="mt-4" size="lg">
          Ignite Lab
        </Title>
        <Text>Faça login e comece a usar!</Text>
      </div>
      {isLoggedIn && (
        <Title size="sm" className="text-green-400">
          Logado!
        </Title>
      )}
      <form
        className="w-full max-w-sm flex flex-col items-stretch gap-4"
        onSubmit={handleSignIn}
      >
        <label className="flex flex-col gap-2">
          <Text className="text-gray-200 font-semibold">Digite seu email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id="email" placeholder="example@email.com" />
          </TextInput.Root>
        </label>
        <label className="flex flex-col gap-2">
          <Text className="text-gray-200 font-semibold">Digite sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="********"
            />
          </TextInput.Root>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox id="remember" />
          <Text size="sm">Lembrar de mim</Text>
        </label>
        <Button className="mt-8" type="submit">
          Entrar na plataforma
        </Button>
      </form>
      <div className="flex flex-col gap-2 items-center justify-center">
        <Text size="sm" asChild>
          <a className="hover:underline underline-offset-2" href="">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text size="sm" asChild>
          <a className="hover:underline underline-offset-2" href="">
            Não possui conta? Crie uma!
          </a>
        </Text>
      </div>
    </div>
  );
};

export default SignIn;
