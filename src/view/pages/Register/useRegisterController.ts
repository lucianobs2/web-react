import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';

import { authService } from '../../../app/services/authService';
import { SignupParams } from '../../../app/services/authService/authService';
import toast from 'react-hot-toast';

const schema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  email: z
    .string()
    .nonempty('E-mail é obrigatório')
    .email('Informe um e-mail válido'),
  password: z
    .string()
    .nonempty('Senha é obrigatória')
    .min(8, 'A senha deve conter pelo menos 8 dígitos'),
});

type FormData = z.infer<typeof schema>;

export function useControllerRegister() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['signup'],
    mutationFn: async (data: SignupParams) => {
      return authService.signup(data);
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);
    } catch {
      toast.error('Ocorreu um erro ao criar sua conta');
    }
  });

  return { register, handleSubmit, errors, isPending };
}
