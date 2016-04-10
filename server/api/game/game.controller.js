'use strict';

var _ = require('lodash');
var Game = require('./game.model');

function handleError (res, err) {
  return res.status(500).send(err);
}

/**
 * Get list of Game
 *
 * @param req
 * @param res
 */
exports.index = function (req, res) {
  Game.find(function (err, games) {
    if (err) { return handleError(res, err); }
    return res.status(200).json(games);
  });
};

/**
 * Get a single Game
 *
 * @param req
 * @param res
 */
exports.show = function (req, res) {
  Game.findById(req.params.id, function (err, game) {
    if (err) { return handleError(res, err); }
    if (!game) { return res.status(404).end(); }
    return res.status(200).json(game);
  });
};

/**
 * Creates a new Game in the DB.
 *
 * @param req
 * @param res
 */
exports.create = function (req, res) {
  Game.create(req.body, function (err, game) {
    if (err) { return handleError(res, err); }
    return res.status(201).json(game);
  });
};

/**
 * Updates an existing Game in the DB.
 *
 * @param req
 * @param res
 */
exports.update = function (req, res) {
  if (req.body._id) { delete req.body._id; }
  Game.findById(req.params.id, function (err, game) {
    if (err) { return handleError(res, err); }
    if (!game) { return res.status(404).end(); }
    var updated = _.merge(game, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(game);
    });
  });
};

/**
 * Deletes a Game from the DB.
 *
 * @param req
 * @param res
 */
exports.destroy = function (req, res) {
  Game.findById(req.params.id, function (err, game) {
    if (err) { return handleError(res, err); }
    if (!game) { return res.status(404).end(); }
    game.remove(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(204).end();
    });
  });
};
