// composables/useAuthValidation.ts
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export const useAuthValidation = () => {
  // Schema para login
  const loginSchema = z.object({
    email: z.email('E-mail inválido').min(1, 'E-mail é obrigatório'),
    password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres')
  })

  // Schema para registro
  const registerSchema = z.object({
    fullName: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
    email: z.email('E-mail inválido'),
    password: z.string().min(8, 'Senha deve ter pelo menos 8 caracteres'),
    confirmPassword: z.string(),
    agreeTerms: z.boolean().refine(val => val === true, 'Você deve aceitar os termos')
  }).refine(data => data.password === data.confirmPassword, {
    message: 'Senhas não coincidem',
    path: ['confirmPassword']
  })

  // Schema para forgot password
  const forgotPasswordSchema = z.object({
    email: z.email('E-mail inválido').min(1, 'E-mail é obrigatório')
  })

  return {
    loginSchema: toTypedSchema(loginSchema),
    registerSchema: toTypedSchema(registerSchema),
    forgotPasswordSchema: toTypedSchema(forgotPasswordSchema)
  }
}