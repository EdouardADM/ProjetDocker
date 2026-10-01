# Projet Docker – Gestion d'utilisateurs

Application CRUD complète : frontend web, API REST, base de données PostgreSQL, le tout conteneurisé avec Docker.

## Stack

- **Frontend** : HTML + JavaScript (fetch), servi par Nginx
- **Backend** : Node.js + Express
- **Base de données** : PostgreSQL

## Modèle utilisateur

| Champ        | Type       | Règles                                          |
|--------------|------------|-------------------------------------------------|
| `id`         | entier     | clé primaire, générée par la base               |
| `nom`        | texte      | obligatoire, 1 à 100 caractères                 |
| `email`      | texte      | obligatoire, format valide, unique              |
| `role`       | texte      | `admin` ou `user` (défaut : `user`)             |
| `created_at` | date/heure | générée par la base                             |

## Lancement