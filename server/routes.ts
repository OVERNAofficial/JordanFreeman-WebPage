import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist signup endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      const entry = await storage.addToWaitlist(validatedData);
      res.json({ success: true, message: "Successfully added to waitlist!", entry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid email format", 
          errors: error.errors 
        });
      } else if (error instanceof Error && error.message.includes("unique")) {
        res.status(409).json({ 
          success: false, 
          message: "This email is already on our waitlist!" 
        });
      } else {
        console.error("Waitlist signup error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to add to waitlist. Please try again." 
        });
      }
    }
  });

  // Get waitlist count endpoint
  app.get("/api/waitlist/count", async (req, res) => {
    try {
      const count = await storage.getWaitlistCount();
      res.json({ count });
    } catch (error) {
      console.error("Get waitlist count error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to get waitlist count" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
