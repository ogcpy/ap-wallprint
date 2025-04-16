import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote request API endpoint
  app.post('/api/quote-request', (req, res) => {
    try {
      const { firstName, lastName, email, phone, projectType, message } = req.body;
      
      // Validate request data
      if (!firstName || !lastName || !email || !phone || !projectType || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'Missing required fields' 
        });
      }
      
      // In a real application, you might want to:
      // 1. Store the quote request in a database
      // 2. Send an email notification
      // 3. Integrate with a CRM system

      // For now, just return success response
      res.status(200).json({ 
        success: true, 
        message: 'Quote request received' 
      });
    } catch (error) {
      console.error('Error processing quote request:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Server error processing request' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
