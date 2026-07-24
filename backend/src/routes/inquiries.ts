import { Router, Request, Response } from 'express';
import { getDb } from '../db';

const router = Router();

// POST submit a new inquiry (Public - contact/inquiry form submission)
router.post('/', async (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields (name, email, phone, message) are required' });
  }

  try {
    const db = await getDb();
    const currentDate = new Date().toISOString();

    const result = await db.run(
      `INSERT INTO inquiries (name, email, phone, message, date)
       VALUES (?, ?, ?, ?, ?)`,
      [name, email, phone, message, currentDate]
    );

    res.status(201).json({
      message: 'Inquiry submitted successfully',
      inquiryId: result.lastID,
      inquiry: { id: result.lastID, name, email, phone, message, date: currentDate }
    });
  } catch (error) {
    console.error('Error creating inquiry:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
