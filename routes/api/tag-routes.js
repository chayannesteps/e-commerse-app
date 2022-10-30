const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Tag.findAll() .then ( 
    tags => res.json(tags)
  ) .catch (
    err => res.status (500).json(err)
  )
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Tag.findAll({
    where: {
      id: req.params.id
    }
  }) .then ( 
    tags => res.json(tags)
  ) .catch (
    err => res.status (500).json(err)
  )
});

router.post('/', (req, res) => {
  // create a new category
  Tag.create(req.body)
  .then ( 
    tags => res.json(tags)
  ) .catch (
    err => res.status (500).json(err)
  )
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
