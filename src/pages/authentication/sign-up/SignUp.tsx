import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { SignUpSchema, signUpSchema } from "./validation";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  function handleRegister(data: SignUpSchema) {
    console.log("Registration data:", data);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4">Cadastro</h1>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="space-y-4 w-full max-w-md"
      >
        <TextField
          id="name"
          label="Nome"
          variant="standard"
          className="w-full bg-white rounded-md"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ""}
        />
        <TextField
          id="lastName"
          label="Sobrenome"
          variant="standard"
          className="w-full bg-white rounded-md"
          {...register("lastName")}
          error={!!errors.lastName}
          helperText={errors.lastName ? errors.lastName.message : ""}
        />
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
        <TextField
          id="confirmPassword"
          label="Confirme a Senha"
          type="password"
          variant="standard"
          className="w-full bg-white rounded-md"
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={
            errors.confirmPassword ? errors.confirmPassword.message : ""
          }
        />
        <Button
          type="submit"
          variant="contained"
          className="w-full bg-white rounded-md"
        >
          Cadastrar
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
