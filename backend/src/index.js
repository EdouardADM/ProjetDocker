import express from 'express';
import usersRouter from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Transforme le corps JSON des requêtes en objet JS (req.body)
app.use(express.json());

// Toutes les routes de users.js sont préfixées par /users
app.use('/users', usersRouter);

// Gestionnaire d'erreurs : attrape toute erreur non prévue
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Erreur interne du serveur' });
});

app.listen(PORT, () => {
  console.log(`API démarrée sur http://localhost:${PORT}`);
});
