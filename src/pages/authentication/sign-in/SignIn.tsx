import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { signInSchema, SignInSchema } from "./validation";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  function handleSignIn(data: SignInSchema) {
    console.log("Login data:", data);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="space-y-4 w-full max-w-md"
      >
        <TextField
          id="email"
          label="Email"
          variant="standard"
          className="w-full bg-white rounded-md"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
        />
        <TextField
          id="password"
          label="Senha"
          type="password"
          variant="standard"
          className="w-full bg-white rounded-md"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
        />
        <Button
          type="submit"
          variant="contained"
          className="w-full bg-white rounded-md"
        >
          Entrar
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
