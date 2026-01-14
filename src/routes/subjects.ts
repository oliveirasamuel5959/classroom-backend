import express from 'express';


const router = express.Router();

// Get all subjects with optional search, filtering and pagination
router.get('/', async (req, res) => {
  try {
    res.status(200).json({
      "data": "success"
    })

  } catch (e) {
    console.error(`GET /subjects error: ${e}`);
    res.status(500).json({ error: 'Failed to get subjects'});
  }
})

export default router;
