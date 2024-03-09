import express, { Request, Response, NextFunction } from 'express'; 

export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
};

export const setCache = (req: Request, res: Response, next: NextFunction) => {
  const period = 60 * 5; // 5mins
  if (req.method === "GET") {
    res.set("Cache-Control", `public, max-age=${period}`);
  } else {
    res.set("Cache-Control", "no-store");
  }
  next();
};

//   exports.auth = (req, res, next) => {
//     // Implement authentication logic
//     next();
//   };
