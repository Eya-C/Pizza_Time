// validators/userValidator.js
const { body, validationResult } = require('express-validator');

// Validation pour l'enregistrement d'un utilisateur
const validateRegister = [
    body('email').isEmail().withMessage('Email invalide'),
    body('password').isLength({ min: 6 }).withMessage('Le mot de passe doit contenir au moins 6 caractères'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next(); // Si aucune erreur, on continue
    }
];

// Validation pour la connexion de l'utilisateur
const validateLogin = [
    body('email').isEmail().withMessage('Email invalide'),
    body('password').notEmpty().withMessage('Le mot de passe est requis'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next(); // Si aucune erreur, on continue
    }
];

module.exports = { validateRegister, validateLogin };
