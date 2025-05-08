import { z } from 'zod';

export const checkoutSchema = z.object({
    cep: z.string().regex(/^\d{8}$|^\d{5}-\d{3}$/, 'CEP inválido'),
    street: z.string().min(1, 'Rua é obrigatória'),
    number: z.string().min(1, 'Número é obrigatório'),
    complement: z.string().optional(),
    neighborhood: z.string().min(1, 'Bairro é obrigatório'),
    city: z.string().min(1, 'Cidade é obrigatória'),
    state: z.string().length(2, 'UF inválido'),
    paymentMethod: z.enum(['credit', 'debit', 'money'], {
        errorMap: () => ({ message: 'Método de pagamento inválido' })
    }),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;