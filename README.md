# 🎨 Pixel to Pattern  - Create your perfect piece!

**Pixel to Pattern** turns your pixel art into beautiful, beginner friendly crochet patterns stitch by stitch, row by row.  
Let the creativity flow!




## 🧶 Features

### Create  
Turn any pixel drawing into a crochet-ready pattern.  
Each row lists the stitch counts per color, e.g.:
        ( sc = single crochet)
        Row 1: 28 sc (white)
        Row 2: 9 sc (white), 10 sc (yellow), 9 sc (white)
        Row 3: 8 sc (white), 10 sc (yellow), 9 sc (white)

### Read  
Browse all submitted creations and view detailed stitch by stitch patterns.

### Update *(Coming Soon!)*  
Users will soon be able to edit their own patterns directly.

### Delete  
Remove any pattern you’ve posted with one click.




## ⚙️ Local Setup

Follow these steps to run **Pixel to Pattern** locally:

1. **Fork and clone** this repository to your machine.  
2. In the root directory, create a `.env` file named `db.env`.  
3. **Install dependencies** in both the `server/` and `pixel2pattern/` folders:
   ```bash
   npm install
   ```
4. Navigate to `server/` and start the backend:
   ```bash
   npm run dev
   ```
5. Navigate to `pixel2pattern/`
   ```bash
     npm run dev
   ```
6. Open your browser at http://localhost:3000
7. 🎨 Get creative!




## Tech Stack
- **Frontend:** NextJs, MaterialUI
- **Backend:** Node.js, Express
- **Database:** MySQL database with Sequelize used on the backend.
- **Version:** Node 24+




## Environment Variables

# Change to create a .env in backend and .env.local in frontend

This project utilizes environment variables for configuration. You need to create a `db.env` file in the root directory based on the provided variable examples listed below.

   **Required Variables:**

   *   `DB_USER`: The username for the user created to run the database.
   *   `DB_PASSWORD`: Your password used to access the database.
   *   `DB_HOST`: The IP for the virtual machine running the database.
   *   `DB_DATABASE`: name of the database you need to access.
   *   `DB_PORT`: The port number the database is running on.

Edit `db.env` and replace placeholder values with your actual configuration.
Restart your development server if it's already running (e.g., npm start).


## Deployment Process
Linked below is the documentation that was created while setting up the virtual machine for deployment.
[Click Here!](https://loving-eye-8b5.notion.site/VM-Deployment-27e101a39e1480328574fee619f042d8)

### Steps:
- Create GHCR containers for both frontend and backend.
- Login into GHCR in your code editor: echo "<YOUR_GITHUB_TOKEN>" | docker login ghcr.io -u <your_github_username> --password-stdin
- Build the backend container and push onto the backend GHCR container.
   1. Build the docker container: docker build --no-cache -t ghcr.io/AccountName/ContainerName:latest ./server
   2. Push the container onto GHCR: docker push ghcr.io/AccountName/ContainerName:latest
- Build the frontend container, replacing either .env.local with a base url of your VM's IP address or running these commands:
   1. Build the docker container: docker build -t ghcr.io/AccountName/ContainerName:latest \
         --build-arg NEXT_PUBLIC_API_BASE_URL=http://<vm-ip>:3000/OtherBackendPort \
         ./client
   2. Verify that the Base URL was changed: docker run --rm ghcr.io/AccountName/ContainerName:latest printenv | grep NEXT_PUBLIC_API_BASE_URL
   3. Push the container onto GHCR: docker push ghcr.io/AccountName/ContainerName:latest

- Create a new directory for your project
- Add the docker-compose.deploy.yml to your VM's new directory for the project
- Create the .env and place at same level as the yml file
- Pull the images: docker compose -f docker-compose.deploy.yml pull
- Start the application: docker compose -f docker-compose.deploy.yml up -d
- Verify the application's containers are running: docker ps

### VM Setup

1. Log into VM with: `ssh root@VM_IP`
2. Update Package index with: `sudo apt-get update -y`
3. Upgrade existing packages (non interactive) with: `yes | sudo DEBIAN_FRONTEND=noninteractive apt-get -yqq upgrade`
4. Install Docker: `sudo apt install -y ca-certificates curl gnupg lsb-release`
5. Add Docker GPG Key and Repository: `sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
https://download.docker.com/linux/ubuntu \
$(lsb_release -cs) stable" | \
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`
6. Install Docker engine and compose plugin: `sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`


