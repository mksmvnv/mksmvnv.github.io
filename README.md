# Portfolio

Tech stack and links on GitHub Page with Self-Hosted Deployment.

## How to Run?

### **Prerequisites**

- [npm](https://www.npmjs.com/)
- [Make](https://www.gnu.org/software/make/)
- [Docker](https://www.docker.com/)

### **Setup Instructions**

1. **SSL Certificates Setup:**  
   - Generate or obtain your SSL certificates:

     - `fullchain.pem`  
     - `privkey.pem`

   - Place them in the `/ssl` directory.
   - *Reference examples available in `/ssl/*.example` files*.

2. **Deployment:**

   ```bash
   make all  # Lint, build and run (check Makefile for details)
   ```

## **Why This Setup?**

This configuration provides:

- Secure HTTPS via SSL certificates  
- Nginx web server for production deployment  
- Self-hosted alternative to GitHub Pages  
- Containerized environment via Docker  

### **Done!**
