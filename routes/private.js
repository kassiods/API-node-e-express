import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/listar-usuarios', async (req, res) => {
    try {
        const users = await prisma.user.findMany(); // Obtém todos os usuários
        res.status(200).json({
            message: "Usuários listados com sucesso!",
            users, // Retorna como `users` no plural
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erro no servidor ao listar usuários." });
    }
});

export default router;
