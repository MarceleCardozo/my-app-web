import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(4),
  lastName: z.string(),
});

type RegisterShcema = z.infer<typeof registerSchema>;

function Home() {
  const { register, handleSubmit } = useForm<RegisterShcema>({
    resolver: zodResolver(registerSchema),
  });

  function handleSubmitForm(data: RegisterShcema) {
    console.log(data);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4">Cadastro</h1>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="space-y-4 w-full max-w-md"
      >
        <TextField
          id="name"
          label="Nome"
          variant="standard"
          className="w-full bg-white rounded-md"
          {...register("name")}
        />
        <TextField
          id="lastName"
          label="Sobrenome"
          variant="standard"
          className="w-full bg-white rounded-md"
          {...register("lastName")}
        />
        <Button
          type="submit"
          variant="contained"
          className="w-full bg-white rounded-md"
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default Home;
