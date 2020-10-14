const express = require('express');
const InventoryService = require('./inventory-service.js');
const { requireAuth } = require('../middleware/jwt-auth');
const BodyParser = express.json();

const inventoryRouter = express.Router();

inventoryRouter
  .use(requireAuth)
  .use(async (req, res, next) => {
    try {
      const inventory = await InventoryService.getUserInventory(req.app.get('db'), req.user.id);
      if (!inventory) return res.status(404).json({ error: `Inventory missing` });

      req.inventory = inventory;

    } catch (err) {
      next(err);
    }
  })

inventoryRouter
  .get('/', async (req, res, next) => {
    try {
      const items = await getInventoryItems(req.app.get('db'), req.inventory.id);

      res.json({
        inventory: req.inventory,
        items
      })
    } catch (err) {
      next(err)
    }
  });

module.exports = inventoryRouter;