const Member = require('../models/member');

// Fonction de validation des membres
const validateMember = (member) => {
    if (!member.lastName || !member.firstName || !member.email || !member.password) {
        return false;
    }
    // Ajoutez d'autres validations si nécessaire
    return true;
};

// Enregistrement d'un membre
const register = async (req, res) => {
    const { lastName, firstName, email, password } = req.body;

    if (!validateMember(req.body)) {
        return res.status(400).json({ message: 'Données invalides' });
    }

    try {
        const newMember = new Member({ lastName, firstName, email, password });
        await newMember.save();
        res.status(200).json({ message: 'Membre enregistré avec succès' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de l\'enregistrement du membre', error: err });
    }
};

// Connexion d'un membre
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const member = await Member.findOne({ email, password });
        if (!member) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
        }
        res.status(200).json({ message: 'Connexion réussie', member });
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la connexion', error: err });
    }
};

module.exports = {
    register,
    login,
    validateMember
};
