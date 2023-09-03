import { body, param } from "express-validator";

export const validateGamePOSTData = () => [
    body('game_name')
        .notEmpty().withMessage('Game name cannot be empty')
        .isString().withMessage('Game name must be a string'),

    body('game_start').isISO8601().withMessage('Invalid date format. Use ISO8601 format for game start date'),

    body('game_venue')
        .notEmpty().withMessage('Game venue cannot be empty')
        .isString().withMessage('Game venue must be a string'),

    body('team1')
        .notEmpty().withMessage('Team 1 name cannot be empty')
        .isString().withMessage('Team 1 name must be a string'),

    body('team2')
        .notEmpty().withMessage('Team 2 name cannot be empty')
        .isString().withMessage('Team 2 name must be a string'),
];

export const validateGamePATCHData = () => [
    param('game_id')
    .exists().withMessage("Game Id can't be empty")
    .isMongoId().withMessage("Game Id must be a Mongo Id"),
    body("game_name")
    .optional()
    .isString().withMessage('Game name must be a string'),
    body('game_venue')
    .optional()
    .isString().withMessage('Game venue must be a string'),
    body('game_start')
    .optional()
    .isISO8601().withMessage('Invalid date format. Use ISO8601 format for game start date'),
    body('team1')
    .optional()
    .isString().withMessage('Team 1 name must be a string'),
    body('team2')
    .optional()
    .isString().withMessage('Team 2 name must be a string')
];

export const validateGameDELETEData = () => [
    param('game_id')
    .exists().withMessage("Game Id can't be empty")
    .isMongoId().withMessage("Game Id must be a Mongo Id")
];